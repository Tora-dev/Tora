"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var post_1 = require("../../models/post");
var router = express_1.Router();
router.get('*', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = res;
                        _context.next = 3;
                        return post_1.default.find();

                    case 3:
                        _context.t1 = _context.sent;

                        _context.t0.json.call(_context.t0, _context.t1);

                    case 5:
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
exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9hcGkvcG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdCQUFpRDtBQUNqRCxxQkFBMEM7QUFFMUMsSUFBTSxBQUFNLFNBQUcsVUFBTSxBQUFFLEFBQUM7QUFFeEIsQUFBTSxPQUFDLEFBQUcsSUFBQyxBQUFHOzBFQUFTLEFBQUcsS0FBRSxBQUFHLEtBQUUsQUFBSTtBQUFyQixBQUFLOzs7O3NDQUNuQixBQUFHOzsrQkFBWSxPQUFTLFFBQUMsQUFBSSxBQUFFLEFBQUMsQUFBQyxBQUNuQyxBQUFDLEFBQUMsQUFBQzs7Ozs7b0NBREcsQUFBSSxBQUFDOzs7Ozs7Ozs7Ozs7OztBQUdYLGtCQUFlLEFBQXdCLEFBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uLy4uL21vZGVscy9wb3N0JztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJyonLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVzLmpzb24oYXdhaXQgUG9zdE1vZGVsLmZpbmQoKSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIGFzIFJlcXVlc3RIYW5kbGVyO1xuIl19