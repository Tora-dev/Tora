"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mongodbURL() {
    var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localhost';
    var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 27017;
    var table = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Tora';

    return "mongodb://" + host + ":" + port + "/" + table;
}
exports.default = mongodbURL;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29kYlVSTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tb25nb2RiVVJMLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO1FBQ0UsMkVBQWUsQUFBVztRQUMxQiwyRUFBZSxBQUFLO1FBQ3BCLDRFQUFnQixBQUFNOztBQUV0QixBQUFNLEFBQUMsMEJBQWEsQUFBSSxhQUFJLEFBQUksYUFBSSxBQUFLLEFBQUUsQUFBQyxBQUM5QztBQUFDO0FBTkQsa0JBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb25nb2RiVVJMKFxuICBob3N0OiBzdHJpbmcgPSAnbG9jYWxob3N0JyxcbiAgcG9ydDogbnVtYmVyID0gMjcwMTcsXG4gIHRhYmxlOiBzdHJpbmcgPSAnVG9yYSdcbiAgKSB7XG4gIHJldHVybiBgbW9uZ29kYjovLyR7aG9zdH06JHtwb3J0fS8ke3RhYmxlfWA7XG59XG4iXX0=