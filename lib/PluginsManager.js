"use strict";

var findPlugins = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var rootPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : conf_1.default.get('ROOT_PATH');
        var targetDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [PluginsDirName, ThemesDirName];
        var PluginsList, dirIndex, files, fileIndex, filePath;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        PluginsList = [];

                        if (!(targetDir instanceof Array)) {
                            targetDir = [targetDir];
                        }
                        targetDir = targetDir.map(function (value) {
                            return path.join(rootPath, value);
                        });
                        _context.t0 = regeneratorRuntime.keys(targetDir);

                    case 4:
                        if ((_context.t1 = _context.t0()).done) {
                            _context.next = 35;
                            break;
                        }

                        dirIndex = _context.t1.value;

                        if (!targetDir.hasOwnProperty(dirIndex)) {
                            _context.next = 33;
                            break;
                        }

                        _context.next = 9;
                        return fs.ensureDir(targetDir[dirIndex]);

                    case 9:
                        _context.next = 11;
                        return fs.readdir(targetDir[dirIndex]);

                    case 11:
                        files = _context.sent;
                        _context.t2 = regeneratorRuntime.keys(files);

                    case 13:
                        if ((_context.t3 = _context.t2()).done) {
                            _context.next = 33;
                            break;
                        }

                        fileIndex = _context.t3.value;

                        if (!files.hasOwnProperty(fileIndex)) {
                            _context.next = 31;
                            break;
                        }

                        filePath = path.join(targetDir[dirIndex], files[fileIndex]);
                        _context.next = 19;
                        return fs.stat(filePath);

                    case 19:
                        if (!_context.sent.isDirectory()) {
                            _context.next = 31;
                            break;
                        }

                        _context.prev = 20;
                        _context.t4 = PluginsList;
                        _context.next = 24;
                        return loadPlugin(filePath);

                    case 24:
                        _context.t5 = _context.sent;

                        _context.t4.push.call(_context.t4, _context.t5);

                        _context.next = 31;
                        break;

                    case 28:
                        _context.prev = 28;
                        _context.t6 = _context["catch"](20);

                        Logger_1.default.error('Load Plugins error ,', _context.t6.message || _context.t6);

                    case 31:
                        _context.next = 13;
                        break;

                    case 33:
                        _context.next = 4;
                        break;

                    case 35:
                        return _context.abrupt("return", PluginsList);

                    case 36:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[20, 28]]);
    }));

    return function findPlugins() {
        return _ref.apply(this, arguments);
    };
}();

var loadPlugin = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(PluginDirPath) {
        var PluginDirName, configFilePath, packageJSONPath, packageJSONData, config, pluginConfigData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        PluginDirName = path.dirname(PluginDirPath);
                        configFilePath = path.join(PluginDirPath, 'toraConfig.js');
                        packageJSONPath = path.join(PluginDirPath, 'package.json');
                        packageJSONData = void 0;
                        config = defaultPluginConfig;
                        _context2.next = 7;
                        return fs.access(configFilePath, fs.constants.R_OK);

                    case 7:
                        pluginConfigData = require(configFilePath);

                        if (!(typeof pluginConfigData === 'function')) {
                            _context2.next = 12;
                            break;
                        }

                        _context2.next = 11;
                        return pluginConfigData();

                    case 11:
                        pluginConfigData = _context2.sent;

                    case 12:
                        try {
                            packageJSONData = require(configFilePath) || {};
                        } catch (err) {
                            packageJSONData = {};
                        }
                        config = Object.assign({}, config, {
                            name: packageJSONData.name || PluginDirName,
                            version: packageJSONData.version,
                            description: packageJSONData.description,
                            main: packageJSONData.main,
                            license: packageJSONData.license,
                            author: packageJSONData.author
                        }, pluginConfigData);
                        config.main = path.join(PluginDirPath, config.main);
                        _context2.next = 17;
                        return fs.access(config.main, fs.constants.R_OK);

                    case 17:
                        return _context2.abrupt("return", config);

                    case 18:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function loadPlugin(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

var loadPlugins = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var _Logger_1$default,
            _this = this;

        var Plugins, PluginLoaders;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return findPlugins();

                    case 2:
                        Plugins = _context4.sent;

                        (_Logger_1$default = Logger_1.default).verbose.apply(_Logger_1$default, ['Plugins config loaded'].concat(_toConsumableArray(Plugins.map(function (plugin) {
                            return plugin.name;
                        }))));
                        PluginLoaders = Plugins.map(function () {
                            var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(plugin) {
                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                _context3.next = 2;
                                                return require(plugin.main).InjectionApp(Tora_1.default);

                                            case 2:
                                            case "end":
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, _this);
                            }));

                            return function (_x4) {
                                return _ref4.apply(this, arguments);
                            };
                        }());
                        _context4.next = 7;
                        return Promise.all(PluginLoaders);

                    case 7:
                        Tora_1.default.eventEmitter.emit('pluginsLoaded', Plugins);

                    case 8:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function loadPlugins() {
        return _ref3.apply(this, arguments);
    };
}();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Object.defineProperty(exports, "__esModule", { value: true });
var conf_1 = require("./utils/conf");
var Logger_1 = require("./utils/Logger");
var Tora_1 = require("./Tora");
var path = require("path");
var fs = require("fs-extra");
var PluginsDirName = 'plugins';
var ThemesDirName = 'themes';
var defaultPluginConfig = {
    type: 'plugin',
    name: '',
    version: '0.0.0',
    description: 'no description',
    license: 'MIT',
    keyworks: [''],
    author: '',
    main: 'index.js'
};

exports.findPlugins = findPlugins;

exports.loadPlugin = loadPlugin;

exports.loadPlugins = loadPlugins;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1Z2luc01hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUGx1Z2luc01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQWdDTyxBQUFLLFlBQ1YsQUFBUSwrRUFBRyxPQUFNLFFBQUMsQUFBRyxJQUFDLEFBQVcsQUFBQztZQUNsQyxBQUFTLGdGQUFHLENBQUMsQUFBYyxnQkFBRSxBQUFhLEFBQUMsQUFFM0M7Ozs7OztBQUFNLEFBQVcsc0NBQUcsQUFBRSxBQUFDOztBQUV2QixBQUFFLEFBQUMsNEJBQUMsQUFBQyxFQUFDLEFBQVMscUJBQVksQUFBSyxBQUFDLEFBQUMsUUFBQyxBQUFDO0FBQ2xDLEFBQVMsd0NBQUcsQ0FBQyxBQUFTLEFBQUMsQUFBQyxBQUMxQjtBQUFDO0FBR0QsQUFBUyw4Q0FBYSxBQUFHLElBQUMsVUFBQyxBQUFLO0FBQzlCLEFBQU0sbUNBQUMsQUFBSSxLQUFDLEFBQUksS0FBQyxBQUFRLFVBQUUsQUFBSyxBQUFDLEFBQUMsQUFDcEM7QUFBQyxBQUFDLEFBQUMsQUFFSCxBQUFHLEFBQUMsQUFBQyx5QkFKTyxBQUFTOzhEQUlFLEFBQVMsQUFBQyxBQUFDLEFBQUMsQUFDakMsQUFBRSxBQUFDOzs7Ozs7OztBQURNLEFBQVE7OzZCQUNiLEFBQVMsVUFBQyxBQUFjLGVBQUMsQUFBUSxBQUFDLEFBQUMsQUFBQyxBQUFDLEFBQ3ZDOzs7Ozs7K0JBQU0sQUFBRSxHQUFDLEFBQVMsVUFBQyxBQUFTLFVBQUMsQUFBUSxBQUFDLEFBQUMsQUFBQyxBQUN4Qzs7OzsrQkFBb0IsQUFBRSxHQUFDLEFBQU8sUUFBQyxBQUFTLFVBQUMsQUFBUSxBQUFDLEFBQUMsQUFBQyxBQUNwRCxBQUFHLEFBQUMsQUFBQzs7O0FBREMsQUFBSyxBQUFHOzhEQUNVLEFBQUssQUFBQyxBQUFDLEFBQUMsQUFDOUIsQUFBRSxBQUFDOzs7Ozs7OztBQURNLEFBQVM7OzZCQUNkLEFBQUssTUFBQyxBQUFjLGVBQUMsQUFBUyxB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LFNBQUMsQUFBTyxrQ0FBQyxBQUF1QixBQUFFLDJEQUFXLEFBQUcsY0FBRSxBQUFNO0FBQVAsbUNBQVksQUFBTSxPQUFDLEFBQUksQUFBQyxBQUFDLEFBQUMsQUFHakY7eUJBSDJDLEFBQU87QUFHNUMsQUFBYSxnREFBVyxBQUFHO0FBQVgsQUFBTyxvR0FBWSxBQUFNLEFBQzdDO0FBRGdDLEFBQUs7Ozs7O3VEQUMvQixBQUFPLFFBQUMsQUFBTSxPQUFDLEFBQUksQUFBQyxNQUFDLEFBQVksYUFBQyxPQUFJLEFBQUMsQUFBQyxBQUNoRCxBQUFDLEFBQUMsQUFBQyxBQUVIOzs7Ozs7Ozs7Ozs7Ozs7K0JBQU0sQUFBTyxRQUFDLEFBQUcsSUFBQyxBQUFhLEFBQUMsQUFBQzs7O0FBRWpDLCtCQUFJLFFBQUMsQUFBWSxhQUFDLEFBQUksS0FBQyxBQUFlLGlCQUFFLEFBQU8sQUFBQyxBQUFDLEFBQ25ELEFBQUM7Ozs7Ozs7Ozs7b0JBWEM7Ozs7Ozs7Ozs7QUFuSEYscUJBQWtDO0FBQ2xDLHVCQUFvQztBQUNwQyxxQkFBMEI7QUFDMUIsbUJBQTZCO0FBQzdCLGlCQUErQjtBQUUvQixJQUFNLEFBQWMsaUJBQUcsQUFBUyxBQUFDO0FBRWpDLElBQU0sQUFBYSxnQkFBRyxBQUFRLEFBQUM7QUFhL0IsSUFBTSxBQUFtQjtBQUN2QixBQUFJLFVBQUUsQUFBUTtBQUNkLEFBQUksVUFBRSxBQUFFO0FBQ1IsQUFBTyxhQUFFLEFBQU87QUFDaEIsQUFBVyxpQkFBRSxBQUFnQjtBQUM3QixBQUFPLGFBQUUsQUFBSztBQUNkLEFBQVEsY0FBRSxDQUFDLEFBQUUsQUFBQztBQUNkLEFBQU0sWUFBRSxBQUFFO0FBQ1YsQUFBSSxVQUFFLEFBQVUsQUFDakIsQUFBQztBQVQwQjs7QUFXNUIsc0JBa0NDOztBQUVELHFCQTBDQzs7QUFFRCxzQkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi91dGlscy9jb25mJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi91dGlscy9Mb2dnZXInO1xuaW1wb3J0IFRvcmEgZnJvbSAnLi9Ub3JhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcy1leHRyYSc7XG5cbmNvbnN0IFBsdWdpbnNEaXJOYW1lID0gJ3BsdWdpbnMnO1xuXG5jb25zdCBUaGVtZXNEaXJOYW1lID0gJ3RoZW1lcyc7XG5cbmludGVyZmFjZSBQbHVnaW5Db25maWdJIHtcbiAgdHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZlcnNpb246IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgbGljZW5zZTogc3RyaW5nO1xuICBrZXl3b3Jrczogc3RyaW5nW107XG4gIGF1dGhvcjogc3RyaW5nO1xuICBtYWluOiBzdHJpbmc7XG59XG5cbmNvbnN0IGRlZmF1bHRQbHVnaW5Db25maWcgPSB7XG4gIHR5cGU6ICdwbHVnaW4nLFxuICBuYW1lOiAnJyxcbiAgdmVyc2lvbjogJzAuMC4wJyxcbiAgZGVzY3JpcHRpb246ICdubyBkZXNjcmlwdGlvbicsXG4gIGxpY2Vuc2U6ICdNSVQnLFxuICBrZXl3b3JrczogWycnXSxcbiAgYXV0aG9yOiAnJyxcbiAgbWFpbjogJ2luZGV4LmpzJ1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRQbHVnaW5zKFxuICByb290UGF0aCA9IGNvbmZpZy5nZXQoJ1JPT1RfUEFUSCcpLFxuICB0YXJnZXREaXIgPSBbUGx1Z2luc0Rpck5hbWUsIFRoZW1lc0Rpck5hbWVdKSB7XG5cbiAgY29uc3QgUGx1Z2luc0xpc3QgPSBbXTtcblxuICBpZiAoISh0YXJnZXREaXIgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICB0YXJnZXREaXIgPSBbdGFyZ2V0RGlyXTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdG8gYWJzb2x1dGUgcGF0aC5cbiAgdGFyZ2V0RGlyID0gdGFyZ2V0RGlyLm1hcCgodmFsdWUpID0+IHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHJvb3RQYXRoLCB2YWx1ZSk7XG4gIH0pO1xuXG4gIGZvciAoY29uc3QgZGlySW5kZXggaW4gdGFyZ2V0RGlyKSB7XG4gICAgaWYgKHRhcmdldERpci5oYXNPd25Qcm9wZXJ0eShkaXJJbmRleCkpIHtcbiAgICAgIGF3YWl0IGZzLmVuc3VyZURpcih0YXJnZXREaXJbZGlySW5kZXhdKTtcbiAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgZnMucmVhZGRpcih0YXJnZXREaXJbZGlySW5kZXhdKTtcbiAgICAgIGZvciAoY29uc3QgZmlsZUluZGV4IGluIGZpbGVzKSB7XG4gICAgICAgIGlmIChmaWxlcy5oYXNPd25Qcm9wZXJ0eShmaWxlSW5kZXgpKSB7XG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4odGFyZ2V0RGlyW2RpckluZGV4XSwgZmlsZXNbZmlsZUluZGV4XSk7XG4gICAgICAgICAgaWYgKChhd2FpdCBmcy5zdGF0KGZpbGVQYXRoKSkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgUGx1Z2luc0xpc3QucHVzaChhd2FpdCBsb2FkUGx1Z2luKGZpbGVQYXRoKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdMb2FkIFBsdWdpbnMgZXJyb3IgLCcsIGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBQbHVnaW5zTGlzdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQbHVnaW4oUGx1Z2luRGlyUGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IFBsdWdpbkRpck5hbWUgPSBwYXRoLmRpcm5hbWUoUGx1Z2luRGlyUGF0aCk7XG4gIGNvbnN0IGNvbmZpZ0ZpbGVQYXRoID0gcGF0aC5qb2luKFBsdWdpbkRpclBhdGgsICd0b3JhQ29uZmlnLmpzJyk7XG4gIGNvbnN0IHBhY2thZ2VKU09OUGF0aCA9IHBhdGguam9pbihQbHVnaW5EaXJQYXRoLCAncGFja2FnZS5qc29uJyk7XG4gIGxldCBwYWNrYWdlSlNPTkRhdGE7XG4gIGxldCBjb25maWcgPSBkZWZhdWx0UGx1Z2luQ29uZmlnO1xuXG4gIC8vIFRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBmaWxlIGV4aXN0cy5cbiAgYXdhaXQgZnMuYWNjZXNzKGNvbmZpZ0ZpbGVQYXRoLCBmcy5jb25zdGFudHMuUl9PSyk7XG5cbiAgbGV0IHBsdWdpbkNvbmZpZ0RhdGEgPSByZXF1aXJlKGNvbmZpZ0ZpbGVQYXRoKTtcblxuICBpZiAodHlwZW9mIHBsdWdpbkNvbmZpZ0RhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwbHVnaW5Db25maWdEYXRhID0gYXdhaXQgcGx1Z2luQ29uZmlnRGF0YSgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBwYWNrYWdlSlNPTkRhdGEgPSByZXF1aXJlKGNvbmZpZ0ZpbGVQYXRoKSB8fCB7fTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcGFja2FnZUpTT05EYXRhID0ge307XG4gIH1cblxuICBjb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIC4uLntcbiAgICAgIG5hbWU6IHBhY2thZ2VKU09ORGF0YS5uYW1lIHx8IFBsdWdpbkRpck5hbWUsXG4gICAgICB2ZXJzaW9uOiBwYWNrYWdlSlNPTkRhdGEudmVyc2lvbixcbiAgICAgIGRlc2NyaXB0aW9uOiBwYWNrYWdlSlNPTkRhdGEuZGVzY3JpcHRpb24sXG4gICAgICBtYWluOiBwYWNrYWdlSlNPTkRhdGEubWFpbixcbiAgICAgIGxpY2Vuc2U6IHBhY2thZ2VKU09ORGF0YS5saWNlbnNlLFxuICAgICAgYXV0aG9yOiBwYWNrYWdlSlNPTkRhdGEuYXV0aG9yXG4gICAgfSxcbiAgICAuLi5wbHVnaW5Db25maWdEYXRhXG4gIH07XG5cbiAgLy8gQ29udmVydCB0byBhYnNvbHV0ZSBwYXRoLlxuICBjb25maWcubWFpbiA9IHBhdGguam9pbihQbHVnaW5EaXJQYXRoLCBjb25maWcubWFpbik7XG5cbiAgLy8gVG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGZpbGUgZXhpc3RzLlxuICBhd2FpdCBmcy5hY2Nlc3MoY29uZmlnLm1haW4sIGZzLmNvbnN0YW50cy5SX09LKTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFBsdWdpbnMoKSB7XG5cbiAgLy8gRmluZCBwbHVnaW5zIGZyb20gYHBsdWdpbnNgIGFuZCBgdGhlbWVzYCBmb2xkZXIuXG4gIGNvbnN0IFBsdWdpbnMgPSBhd2FpdCBmaW5kUGx1Z2lucygpO1xuICBMb2dnZXIudmVyYm9zZSgnUGx1Z2lucyBjb25maWcgbG9hZGVkJywgLi4uUGx1Z2lucy5tYXAoKHBsdWdpbikgPT4gcGx1Z2luLm5hbWUpKTtcblxuICAvLyBJbmplY3Rpb24gUGx1Z2lucy5cbiAgY29uc3QgUGx1Z2luTG9hZGVycyA9IFBsdWdpbnMubWFwKGFzeW5jIChwbHVnaW4pID0+IHtcbiAgICBhd2FpdCByZXF1aXJlKHBsdWdpbi5tYWluKS5JbmplY3Rpb25BcHAoVG9yYSk7XG4gIH0pO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKFBsdWdpbkxvYWRlcnMpO1xuXG4gIFRvcmEuZXZlbnRFbWl0dGVyLmVtaXQoJ3BsdWdpbnNMb2FkZWQnLCBQbHVnaW5zKTtcbn1cbiJdfQ==