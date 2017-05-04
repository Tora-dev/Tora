"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var conf_1 = require("../utils/conf");
var post_1 = require("../models/post");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9yYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL1RvcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQkFBbUM7QUFFbkMscUJBQWtFO0FBRWxFLDZCQUEwQyxBQUUxQzs7WUFBQTs7O0FBQ2tCLFNBQU8sVUFBVyxPQUFNLFFBQUMsQUFBRyxJQUFDLEFBQVMsQUFBQyxBQUFDO0FBQ2pELFNBQUksT0FBZSxPQUFTLEFBQUM7QUFDN0IsU0FBWSxlQUFpQixlQUFZLEFBQUMsQUFDbkQ7QUFBQzs7QUFKRCxnQkFJQztBQUVELElBQU0sQUFBSSxPQUFHLElBQUksQUFBSyxBQUFDO0FBRXZCLGtCQUFlLEFBQUksQUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vdXRpbHMvY29uZic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQb3N0TW9kZWwsIFBvc3RNb2RlbEkgfSBmcm9tICcuLi9tb2RlbHMvcG9zdCc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuaW1wb3J0IGV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcic7XG5cbmV4cG9ydCBjbGFzcyBUb3JhSSB7XG4gIHB1YmxpYyByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmcgPSBjb25maWcuZ2V0KCd2ZXJzaW9uJyk7XG4gIHB1YmxpYyBwb3N0OiBQb3N0TW9kZWxJID0gUG9zdE1vZGVsO1xuICBwdWJsaWMgZXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXIgPSBldmVudEVtaXR0ZXI7XG59XG5cbmNvbnN0IFRvcmEgPSBuZXcgVG9yYUk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvcmE7XG4iXX0=