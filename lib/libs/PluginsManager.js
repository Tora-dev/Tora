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
var conf_1 = require("../utils/conf");
var Logger_1 = require("../utils/Logger");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1Z2luc01hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9QbHVnaW5zTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBZ0NPLEFBQUssWUFDVixBQUFRLCtFQUFHLE9BQU0sUUFBQyxBQUFHLElBQUMsQUFBVyxBQUFDO1lBQ2xDLEFBQVMsZ0ZBQUcsQ0FBQyxBQUFjLGdCQUFFLEFBQWEsQUFBQyxBQUUzQzs7Ozs7O0FBQU0sQUFBVyxzQ0FBRyxBQUFFLEFBQUM7O0FBRXZCLEFBQUUsQUFBQyw0QkFBQyxBQUFDLEVBQUMsQUFBUyxxQkFBWSxBQUFLLEFBQUMsQUFBQyxRQUFDLEFBQUM7QUFDbEMsQUFBUyx3Q0FBRyxDQUFDLEFBQVMsQUFBQyxBQUFDLEFBQzFCO0FBQUM7QUFHRCxBQUFTLDhDQUFhLEFBQUcsSUFBQyxVQUFDLEFBQUs7QUFDOUIsQUFBTSxtQ0FBQyxBQUFJLEtBQUMsQUFBSSxLQUFDLEFBQVEsVUFBRSxBQUFLLEFBQUMsQUFBQyxBQUNwQztBQUFDLEFBQUMsQUFBQyxBQUVILEFBQUcsQUFBQyxBQUFDLHlCQUpPLEFBQVM7OERBSUUsQUFBUyxBQUFDLEFBQUMsQUFBQyxBQUNqQyxBQUFFLEFBQUM7Ozs7Ozs7O0FBRE0sQUFBUTs7NkJBQ2IsQUFBUyxVQUFDLEFBQWMsZUFBQyxBQUFRLEFBQUMsQUFBQyxBQUFDLEFBQUMsQUFDdkM7Ozs7OzsrQkFBTSxBQUFFLEdBQUMsQUFBUyxVQUFDLEFBQVMsVUFBQyxBQUFRLEFBQUMsQUFBQyxBQUFDLEFBQ3hDOzs7OytCQUFvQixBQUFFLEdBQUMsQUFBTyxRQUFDLEFBQVMsVUFBQyxBQUFRLEFBQUMsQUFBQyxBQUFDLEFBQ3BELEFBQUcsQUFBQyxBQUFDOzs7QUFEQyxBQUFLLEFBQUc7OERBQ1UsQUFBSyxBQUFDLEFBQUMsQUFBQyxBQUM5QixBQUFFLEFBQUM7Ozs7Ozs7O0FBRE0sQUFBUzs7NkJBQ2QsQUFBSyxNQUFDLEFBQWMsZUFB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aEIsc0RBQU0sU0FBQyxBQUFPLGtDQUFDLEFBQXVCLEFBQUUsMkRBQVcsQUFBRyxjQUFFLEFBQU07QUFBUCxtQ0FBWSxBQUFNLE9BQUMsQUFBSSxBQUFDLEFBQUMsQUFBQyxBQUdqRjt5QkFIMkMsQUFBTztBQUc1QyxBQUFhLGdEQUFXLEFBQUc7QUFBWCxBQUFPLG9HQUFZLEFBQU0sQUFDN0M7QUFEZ0MsQUFBSzs7Ozs7dURBQy9CLEFBQU8sUUFBQyxBQUFNLE9BQUMsQUFBSSxBQUFDLE1BQUMsQUFBWSxhQUFDLE9BQUksQUFBQyxBQUFDLEFBQ2hELEFBQUMsQUFBQyxBQUFDLEFBRUg7Ozs7Ozs7Ozs7Ozs7OzsrQkFBTSxBQUFPLFFBQUMsQUFBRyxJQUFDLEFBQWEsQUFBQyxBQUFDOzs7QUFFakMsK0JBQUksUUFBQyxBQUFZLGFBQUMsQUFBSSxLQUFDLEFBQWUsaUJBQUUsQUFBTyxBQUFDLEFBQUMsQUFDbkQsQUFBQzs7Ozs7Ozs7OztvQkFYQzs7Ozs7Ozs7OztBQW5IRixxQkFBbUM7QUFDbkMsdUJBQXFDO0FBQ3JDLHFCQUEwQjtBQUMxQixtQkFBNkI7QUFDN0IsaUJBQStCO0FBRS9CLElBQU0sQUFBYyxpQkFBRyxBQUFTLEFBQUM7QUFFakMsSUFBTSxBQUFhLGdCQUFHLEFBQVEsQUFBQztBQWEvQixJQUFNLEFBQW1CO0FBQ3ZCLEFBQUksVUFBRSxBQUFRO0FBQ2QsQUFBSSxVQUFFLEFBQUU7QUFDUixBQUFPLGFBQUUsQUFBTztBQUNoQixBQUFXLGlCQUFFLEFBQWdCO0FBQzdCLEFBQU8sYUFBRSxBQUFLO0FBQ2QsQUFBUSxjQUFFLENBQUMsQUFBRSxBQUFDO0FBQ2QsQUFBTSxZQUFFLEFBQUU7QUFDVixBQUFJLFVBQUUsQUFBVSxBQUNqQixBQUFDO0FBVDBCOztBQVc1QixzQkFrQ0M7O0FBRUQscUJBMENDOztBQUVELHNCQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi91dGlscy9jb25mJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbHMvTG9nZ2VyJztcbmltcG9ydCBUb3JhIGZyb20gJy4vVG9yYSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMtZXh0cmEnO1xuXG5jb25zdCBQbHVnaW5zRGlyTmFtZSA9ICdwbHVnaW5zJztcblxuY29uc3QgVGhlbWVzRGlyTmFtZSA9ICd0aGVtZXMnO1xuXG5pbnRlcmZhY2UgUGx1Z2luQ29uZmlnSSB7XG4gIHR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGxpY2Vuc2U6IHN0cmluZztcbiAga2V5d29ya3M6IHN0cmluZ1tdO1xuICBhdXRob3I6IHN0cmluZztcbiAgbWFpbjogc3RyaW5nO1xufVxuXG5jb25zdCBkZWZhdWx0UGx1Z2luQ29uZmlnID0ge1xuICB0eXBlOiAncGx1Z2luJyxcbiAgbmFtZTogJycsXG4gIHZlcnNpb246ICcwLjAuMCcsXG4gIGRlc2NyaXB0aW9uOiAnbm8gZGVzY3JpcHRpb24nLFxuICBsaWNlbnNlOiAnTUlUJyxcbiAga2V5d29ya3M6IFsnJ10sXG4gIGF1dGhvcjogJycsXG4gIG1haW46ICdpbmRleC5qcydcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kUGx1Z2lucyhcbiAgcm9vdFBhdGggPSBjb25maWcuZ2V0KCdST09UX1BBVEgnKSxcbiAgdGFyZ2V0RGlyID0gW1BsdWdpbnNEaXJOYW1lLCBUaGVtZXNEaXJOYW1lXSkge1xuXG4gIGNvbnN0IFBsdWdpbnNMaXN0ID0gW107XG5cbiAgaWYgKCEodGFyZ2V0RGlyIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgdGFyZ2V0RGlyID0gW3RhcmdldERpcl07XG4gIH1cblxuICAvLyBDb252ZXJ0IHRvIGFic29sdXRlIHBhdGguXG4gIHRhcmdldERpciA9IHRhcmdldERpci5tYXAoKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHBhdGguam9pbihyb290UGF0aCwgdmFsdWUpO1xuICB9KTtcblxuICBmb3IgKGNvbnN0IGRpckluZGV4IGluIHRhcmdldERpcikge1xuICAgIGlmICh0YXJnZXREaXIuaGFzT3duUHJvcGVydHkoZGlySW5kZXgpKSB7XG4gICAgICBhd2FpdCBmcy5lbnN1cmVEaXIodGFyZ2V0RGlyW2RpckluZGV4XSk7XG4gICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIodGFyZ2V0RGlyW2RpckluZGV4XSk7XG4gICAgICBmb3IgKGNvbnN0IGZpbGVJbmRleCBpbiBmaWxlcykge1xuICAgICAgICBpZiAoZmlsZXMuaGFzT3duUHJvcGVydHkoZmlsZUluZGV4KSkge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHRhcmdldERpcltkaXJJbmRleF0sIGZpbGVzW2ZpbGVJbmRleF0pO1xuICAgICAgICAgIGlmICgoYXdhaXQgZnMuc3RhdChmaWxlUGF0aCkpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIFBsdWdpbnNMaXN0LnB1c2goYXdhaXQgbG9hZFBsdWdpbihmaWxlUGF0aCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIExvZ2dlci5lcnJvcignTG9hZCBQbHVnaW5zIGVycm9yICwnLCBlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUGx1Z2luc0xpc3Q7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGx1Z2luKFBsdWdpbkRpclBhdGg6IHN0cmluZykge1xuICBjb25zdCBQbHVnaW5EaXJOYW1lID0gcGF0aC5kaXJuYW1lKFBsdWdpbkRpclBhdGgpO1xuICBjb25zdCBjb25maWdGaWxlUGF0aCA9IHBhdGguam9pbihQbHVnaW5EaXJQYXRoLCAndG9yYUNvbmZpZy5qcycpO1xuICBjb25zdCBwYWNrYWdlSlNPTlBhdGggPSBwYXRoLmpvaW4oUGx1Z2luRGlyUGF0aCwgJ3BhY2thZ2UuanNvbicpO1xuICBsZXQgcGFja2FnZUpTT05EYXRhO1xuICBsZXQgY29uZmlnID0gZGVmYXVsdFBsdWdpbkNvbmZpZztcblxuICAvLyBUbyBkZXRlcm1pbmUgd2hldGhlciB0aGUgZmlsZSBleGlzdHMuXG4gIGF3YWl0IGZzLmFjY2Vzcyhjb25maWdGaWxlUGF0aCwgZnMuY29uc3RhbnRzLlJfT0spO1xuXG4gIGxldCBwbHVnaW5Db25maWdEYXRhID0gcmVxdWlyZShjb25maWdGaWxlUGF0aCk7XG5cbiAgaWYgKHR5cGVvZiBwbHVnaW5Db25maWdEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGx1Z2luQ29uZmlnRGF0YSA9IGF3YWl0IHBsdWdpbkNvbmZpZ0RhdGEoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcGFja2FnZUpTT05EYXRhID0gcmVxdWlyZShjb25maWdGaWxlUGF0aCkgfHwge307XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHBhY2thZ2VKU09ORGF0YSA9IHt9O1xuICB9XG5cbiAgY29uZmlnID0ge1xuICAgIC4uLmNvbmZpZyxcbiAgICAuLi57XG4gICAgICBuYW1lOiBwYWNrYWdlSlNPTkRhdGEubmFtZSB8fCBQbHVnaW5EaXJOYW1lLFxuICAgICAgdmVyc2lvbjogcGFja2FnZUpTT05EYXRhLnZlcnNpb24sXG4gICAgICBkZXNjcmlwdGlvbjogcGFja2FnZUpTT05EYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgbWFpbjogcGFja2FnZUpTT05EYXRhLm1haW4sXG4gICAgICBsaWNlbnNlOiBwYWNrYWdlSlNPTkRhdGEubGljZW5zZSxcbiAgICAgIGF1dGhvcjogcGFja2FnZUpTT05EYXRhLmF1dGhvclxuICAgIH0sXG4gICAgLi4ucGx1Z2luQ29uZmlnRGF0YVxuICB9O1xuXG4gIC8vIENvbnZlcnQgdG8gYWJzb2x1dGUgcGF0aC5cbiAgY29uZmlnLm1haW4gPSBwYXRoLmpvaW4oUGx1Z2luRGlyUGF0aCwgY29uZmlnLm1haW4pO1xuXG4gIC8vIFRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBmaWxlIGV4aXN0cy5cbiAgYXdhaXQgZnMuYWNjZXNzKGNvbmZpZy5tYWluLCBmcy5jb25zdGFudHMuUl9PSyk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQbHVnaW5zKCkge1xuXG4gIC8vIEZpbmQgcGx1Z2lucyBmcm9tIGBwbHVnaW5zYCBhbmQgYHRoZW1lc2AgZm9sZGVyLlxuICBjb25zdCBQbHVnaW5zID0gYXdhaXQgZmluZFBsdWdpbnMoKTtcbiAgTG9nZ2VyLnZlcmJvc2UoJ1BsdWdpbnMgY29uZmlnIGxvYWRlZCcsIC4uLlBsdWdpbnMubWFwKChwbHVnaW4pID0+IHBsdWdpbi5uYW1lKSk7XG5cbiAgLy8gSW5qZWN0aW9uIFBsdWdpbnMuXG4gIGNvbnN0IFBsdWdpbkxvYWRlcnMgPSBQbHVnaW5zLm1hcChhc3luYyAocGx1Z2luKSA9PiB7XG4gICAgYXdhaXQgcmVxdWlyZShwbHVnaW4ubWFpbikuSW5qZWN0aW9uQXBwKFRvcmEpO1xuICB9KTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChQbHVnaW5Mb2FkZXJzKTtcblxuICBUb3JhLmV2ZW50RW1pdHRlci5lbWl0KCdwbHVnaW5zTG9hZGVkJywgUGx1Z2lucyk7XG59XG4iXX0=