"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var conf_1 = require("./utils/conf");
var post_1 = require("./models/post");
var eventEmitter_1 = require("./eventEmitter");

var ToraI = function ToraI() {
    _classCallCheck(this, ToraI);

    this.version = conf_1.default.get('version');
    this.post = post_1.default;
    this.eventEmitter = eventEmitter_1.default;
};

exports.ToraI = ToraI;
var Tora = new ToraI();
exports.default = Tora;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9yYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub3JhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUJBQWtDO0FBRWxDLHFCQUFpRTtBQUVqRSw2QkFBMEMsQUFFMUM7O1lBQUE7OztBQUNrQixTQUFPLFVBQVcsT0FBTSxRQUFDLEFBQUcsSUFBQyxBQUFTLEFBQUMsQUFBQztBQUNqRCxTQUFJLE9BQWUsT0FBUyxBQUFDO0FBQzdCLFNBQVksZUFBaUIsZUFBWSxBQUFDLEFBQ25EO0FBQUM7O0FBSkQsZ0JBSUM7QUFFRCxJQUFNLEFBQUksT0FBRyxJQUFJLEFBQUssQUFBQztBQUV2QixrQkFBZSxBQUFJLEFBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vdXRpbHMvY29uZic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQb3N0TW9kZWwsIFBvc3RNb2RlbEkgfSBmcm9tICcuL21vZGVscy9wb3N0JztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgZXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJztcblxuZXhwb3J0IGNsYXNzIFRvcmFJIHtcbiAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyA9IGNvbmZpZy5nZXQoJ3ZlcnNpb24nKTtcbiAgcHVibGljIHBvc3Q6IFBvc3RNb2RlbEkgPSBQb3N0TW9kZWw7XG4gIHB1YmxpYyBldmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlciA9IGV2ZW50RW1pdHRlcjtcbn1cblxuY29uc3QgVG9yYSA9IG5ldyBUb3JhSTtcblxuZXhwb3J0IGRlZmF1bHQgVG9yYTtcbiJdfQ==