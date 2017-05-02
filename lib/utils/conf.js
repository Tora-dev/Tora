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
}
exports.setupNconf = setupNconf;
setupNconf();
var config = nconf;
exports.default = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9CQUErQjtBQUMvQixxQkFBcUM7QUFDckMsdUJBQThCO0FBRTlCLElBQU0sQUFBYyxpQkFBRyxPQUFJLEtBQUMsT0FBTyxRQUFDLEFBQVMsV0FBRSxBQUFtQixBQUFDLEFBQUMsQUFBQztBQUVyRTtRQUEyQiwyRUFBZSxBQUFjOztBQUN0RCxhQUFNLFFBQUMsQUFBSSxBQUFDLDJCQUFvQixBQUFJLEFBQUcsQUFBQyxBQUFDO0FBRXpDLFFBQU0sQUFBVSxhQUFHLEFBQUksQUFBQztBQUV4QixBQUFLLFVBQ0YsQUFBSSxBQUFFLE9BQ04sQUFBRyxBQUFFLE1BQ0wsQUFBSSxLQUFDLEVBQUMsQUFBSSxNQUFFLEFBQVUsQUFBQyxBQUFDLEFBQUM7QUFFNUIsQUFBSyxVQUFDLEFBQUcsSUFBQyxBQUFTLFdBQUUsQ0FBQyxBQUFLLE1BQUMsQUFBRyxJQUFDLEFBQVUsQUFBQyxlQUFJLEFBQWEsQUFBQyxtQkFBSyxBQUFZLEFBQUMsQUFBQztBQUNoRixBQUFLLFVBQUMsQUFBRyxJQUFDLEFBQVEsVUFBRSxDQUFDLEFBQUssTUFBQyxBQUFHLElBQUMsQUFBVSxBQUFDLGVBQUksQUFBYSxBQUFDLG1CQUFLLEFBQWEsQUFBQyxBQUFDLEFBQ2xGO0FBQUM7QUFaRCxxQkFZQztBQUVELEFBQVUsQUFBRSxBQUFDO0FBRWIsSUFBTSxBQUFNLFNBQUcsQUFBSyxBQUFDO0FBRXJCLGtCQUFlLEFBQU0sQUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5jb25mIGZyb20gJ25jb25mJztcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xuXG5jb25zdCBQQVRIX1RPX0NPTkZJRyA9IGpvaW4ocmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9jb25maWcuanNvbicpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTmNvbmYoZmlsZTogc3RyaW5nID0gUEFUSF9UT19DT05GSUcpIHtcbiAgTG9nZ2VyLmluZm8oYFJlYWQgY29uZmlnIGZyb20gJHtmaWxlfS5gKTtcblxuICBjb25zdCBjb25maWdGaWxlID0gZmlsZTtcblxuICBuY29uZlxuICAgIC5hcmd2KClcbiAgICAuZW52KClcbiAgICAuZmlsZSh7ZmlsZTogY29uZmlnRmlsZX0pO1xuXG4gIG5jb25mLnNldCgnSVNfUFJPRCcsIChuY29uZi5nZXQoJ05PREVfRU5WJykgfHwgJ2RldmVsb3BtZW50JykgPT09ICdwcm9kdWN0aW9uJyk7XG4gIG5jb25mLnNldCgnSVNfREVWJywgKG5jb25mLmdldCgnTk9ERV9FTlYnKSB8fCAnZGV2ZWxvcG1lbnQnKSA9PT0gJ2RldmVsb3BtZW50Jyk7XG59XG5cbnNldHVwTmNvbmYoKTtcblxuY29uc3QgY29uZmlnID0gbmNvbmY7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdfQ==