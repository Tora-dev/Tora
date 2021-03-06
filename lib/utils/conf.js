"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nconf = require("nconf");
var path_1 = require("path");
var Logger_1 = require("./Logger");
var PATH_TO_CONFIG = path_1.join(path_1.resolve(__dirname, '../../config.json'));
function setupNconf() {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PATH_TO_CONFIG;

    Logger_1.default.info("Read config from " + file + ".");
    var configFile = file;
    nconf.argv().env().file({ file: configFile });
    nconf.set('IS_PROD', (nconf.get('NODE_ENV') || 'development') === 'production');
    nconf.set('IS_DEV', (nconf.get('NODE_ENV') || 'development') === 'development');
    nconf.set('version', '1.0.0');
    nconf.set('ROOT_PATH', path_1.join(path_1.resolve(__dirname, '../../')));
}
exports.setupNconf = setupNconf;
setupNconf();
var config = nconf;
exports.default = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9CQUErQjtBQUMvQixxQkFBcUM7QUFDckMsdUJBQThCO0FBRTlCLElBQU0sQUFBYyxpQkFBRyxPQUFJLEtBQUMsT0FBTyxRQUFDLEFBQVMsV0FBRSxBQUFtQixBQUFDLEFBQUMsQUFBQztBQUVyRTtRQUEyQiwyRUFBZSxBQUFjOztBQUN0RCxhQUFNLFFBQUMsQUFBSSxBQUFDLDJCQUFvQixBQUFJLEFBQUcsQUFBQyxBQUFDO0FBRXpDLFFBQU0sQUFBVSxhQUFHLEFBQUksQUFBQztBQUV4QixBQUFLLFVBQ0YsQUFBSSxBQUFFLE9BQ04sQUFBRyxBQUFFLE1BQ0wsQUFBSSxLQUFDLEVBQUMsQUFBSSxNQUFFLEFBQVUsQUFBQyxBQUFDLEFBQUM7QUFFNUIsQUFBSyxVQUFDLEFBQUcsSUFBQyxBQUFTLFdBQUUsQ0FBQyxBQUFLLE1BQUMsQUFBRyxJQUFDLEFBQVUsQUFBQyxlQUFJLEFBQWEsQUFBQyxtQkFBSyxBQUFZLEFBQUMsQUFBQztBQUNoRixBQUFLLFVBQUMsQUFBRyxJQUFDLEFBQVEsVUFBRSxDQUFDLEFBQUssTUFBQyxBQUFHLElBQUMsQUFBVSxBQUFDLGVBQUksQUFBYSxBQUFDLG1CQUFLLEFBQWEsQUFBQyxBQUFDO0FBQ2hGLEFBQUssVUFBQyxBQUFHLElBQUMsQUFBUyxXQUFFLEFBQU8sQUFBQyxBQUFDO0FBQzlCLEFBQUssVUFBQyxBQUFHLElBQUMsQUFBVyxhQUFFLE9BQUksS0FBQyxPQUFPLFFBQUMsQUFBUyxXQUFFLEFBQVEsQUFBQyxBQUFDLEFBQUMsQUFBQyxBQUM3RDtBQUFDO0FBZEQscUJBY0M7QUFFRCxBQUFVLEFBQUUsQUFBQztBQUViLElBQU0sQUFBTSxTQUFHLEFBQUssQUFBQztBQUVyQixrQkFBZSxBQUFNLEFBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBuY29uZiBmcm9tICduY29uZic7XG5pbXBvcnQgeyBqb2luLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcblxuY29uc3QgUEFUSF9UT19DT05GSUcgPSBqb2luKHJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vY29uZmlnLmpzb24nKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE5jb25mKGZpbGU6IHN0cmluZyA9IFBBVEhfVE9fQ09ORklHKSB7XG4gIExvZ2dlci5pbmZvKGBSZWFkIGNvbmZpZyBmcm9tICR7ZmlsZX0uYCk7XG5cbiAgY29uc3QgY29uZmlnRmlsZSA9IGZpbGU7XG5cbiAgbmNvbmZcbiAgICAuYXJndigpXG4gICAgLmVudigpXG4gICAgLmZpbGUoe2ZpbGU6IGNvbmZpZ0ZpbGV9KTtcblxuICBuY29uZi5zZXQoJ0lTX1BST0QnLCAobmNvbmYuZ2V0KCdOT0RFX0VOVicpIHx8ICdkZXZlbG9wbWVudCcpID09PSAncHJvZHVjdGlvbicpO1xuICBuY29uZi5zZXQoJ0lTX0RFVicsIChuY29uZi5nZXQoJ05PREVfRU5WJykgfHwgJ2RldmVsb3BtZW50JykgPT09ICdkZXZlbG9wbWVudCcpO1xuICBuY29uZi5zZXQoJ3ZlcnNpb24nLCAnMS4wLjAnKTtcbiAgbmNvbmYuc2V0KCdST09UX1BBVEgnLCBqb2luKHJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vJykpKTtcbn1cblxuc2V0dXBOY29uZigpO1xuXG5jb25zdCBjb25maWcgPSBuY29uZjtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl19