"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var post_1 = require("../../models/post");
var postApiRouter = express_1.Router();
postApiRouter.get('*', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        res.set({
                            'Content-Type': 'application/json'
                        });
                        _context.t0 = res;
                        _context.next = 4;
                        return post_1.default.find();

                    case 4:
                        _context.t1 = _context.sent;
                        return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t1));

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}());
exports.default = postApiRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9hcGkvcG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdCQUFpRDtBQUNqRCxxQkFBMEM7QUFFMUMsSUFBTSxBQUFhLGdCQUFHLFVBQU0sQUFBRSxBQUFDO0FBRS9CLEFBQWEsY0FBQyxBQUFHLElBQUMsQUFBRzswRUFBUyxBQUFHLEtBQUUsQUFBRyxLQUFFLEFBQUk7QUFBckIsQUFBSzs7OztBQUMxQixBQUFHLDRCQUFDLEFBQUc7QUFDTCxBQUFjLDRDQUFFLEFBQWtCLEFBQ25DLEFBQUMsQUFBQyxBQUNILEFBQU07QUFIRTtzQ0FHRCxBQUFHOzsrQkFBWSxPQUFTLFFBQUMsQUFBSSxBQUFFLEFBQUMsQUFBQyxBQUMxQyxBQUFDLEFBQUMsQUFBQzs7OztxRUFEVSxBQUFJLEFBQUM7Ozs7Ozs7Ozs7Ozs7O0FBR2xCLGtCQUFlLEFBQStCLEFBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uLy4uL21vZGVscy9wb3N0JztcblxuY29uc3QgcG9zdEFwaVJvdXRlciA9IFJvdXRlcigpO1xuXG5wb3N0QXBpUm91dGVyLmdldCgnKicsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuc2V0KHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH0pO1xuICByZXR1cm4gcmVzLmpzb24oYXdhaXQgUG9zdE1vZGVsLmZpbmQoKSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdEFwaVJvdXRlciBhcyBSZXF1ZXN0SGFuZGxlcjtcbiJdfQ==