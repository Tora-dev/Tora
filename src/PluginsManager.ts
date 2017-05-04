import config from './utils/conf';
import Logger from './utils/Logger';
import Tora from './Tora';
import * as path from 'path';
import * as fs from 'fs-extra';

const PluginsDirName = 'plugins';

const ThemesDirName = 'themes';

interface PluginConfigI {
  type: string;
  name: string;
  version: string;
  description: string;
  license: string;
  keyworks: string[];
  author: string;
  main: string;
}

const defaultPluginConfig = {
  type: 'plugin',
  name: '',
  version: '0.0.0',
  description: 'no description',
  license: 'MIT',
  keyworks: [''],
  author: '',
  main: 'index.js'
};

export async function findPlugins(
  rootPath = config.get('ROOT_PATH'),
  targetDir = [PluginsDirName, ThemesDirName]) {

  const PluginsList = [];

  if (!(targetDir instanceof Array)) {
    targetDir = [targetDir];
  }

  // Convert to absolute path.
  targetDir = targetDir.map((value) => {
    return path.join(rootPath, value);
  });

  for (const dirIndex in targetDir) {
    if (targetDir.hasOwnProperty(dirIndex)) {
      await fs.ensureDir(targetDir[dirIndex]);
      const files = await fs.readdir(targetDir[dirIndex]);
      for (const fileIndex in files) {
        if (files.hasOwnProperty(fileIndex)) {
          const filePath = path.join(targetDir[dirIndex], files[fileIndex]);
          if ((await fs.stat(filePath)).isDirectory()) {
            try {
              PluginsList.push(await loadPlugin(filePath));
            } catch (err) {
              Logger.error('Load Plugins error ,', err.message || err);
            }
          }
        }
      }
    }
  }
  return PluginsList;
}

export async function loadPlugin(PluginDirPath: string) {
  const PluginDirName = path.dirname(PluginDirPath);
  const configFilePath = path.join(PluginDirPath, 'toraConfig.js');
  const packageJSONPath = path.join(PluginDirPath, 'package.json');
  let packageJSONData;
  let config = defaultPluginConfig;

  // To determine whether the file exists.
  await fs.access(configFilePath, fs.constants.R_OK);

  let pluginConfigData = require(configFilePath);

  if (typeof pluginConfigData === 'function') {
    pluginConfigData = await pluginConfigData();
  }

  try {
    packageJSONData = require(configFilePath) || {};
  } catch (err) {
    packageJSONData = {};
  }

  config = {
    ...config,
    ...{
      name: packageJSONData.name || PluginDirName,
      version: packageJSONData.version,
      description: packageJSONData.description,
      main: packageJSONData.main,
      license: packageJSONData.license,
      author: packageJSONData.author
    },
    ...pluginConfigData
  };

  // Convert to absolute path.
  config.main = path.join(PluginDirPath, config.main);

  // To determine whether the file exists.
  await fs.access(config.main, fs.constants.R_OK);

  return config;
}

export async function loadPlugins() {

  // Find plugins from `plugins` and `themes` folder.
  const Plugins = await findPlugins();
  Logger.verbose('Plugins config loaded', ...Plugins.map((plugin) => plugin.name));

  // Injection Plugins.
  const PluginLoaders = Plugins.map(async (plugin) => {
    await require(plugin.main).InjectionApp(Tora);
  });

  await Promise.all(PluginLoaders);

  Tora.eventEmitter.emit('pluginsLoaded', Plugins);
}
