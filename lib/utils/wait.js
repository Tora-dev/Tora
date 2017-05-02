"use strict";

var wait = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(time) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve();
                            }, time);
                        }));

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function wait(_x) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Object.defineProperty(exports, "__esModule", { value: true });

exports.default = wait;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy93YWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswRUFDb0IsQUFBWSxBQUM5QixBQUFNO0FBRFIsQUFBSzs7Ozs2REFDUSxBQUFPLFFBQUMsVUFBQyxBQUFPO0FBQ3pCLEFBQVUsdUNBQUM7QUFDVCxBQUFPLEFBQUUsQUFBQyxBQUNaO0FBQUMsK0JBQUUsQUFBSSxBQUFDLEFBQUMsQUFDWDtBQUFDLEFBQUMsQUFBQyxBQUNMLEFBQUMseUJBTFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPVCxrQkFBZSxBQUFJLEFBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYXN5bmMgZnVuY3Rpb24gd2FpdCh0aW1lOiBudW1iZXIpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9LCB0aW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2FpdDtcclxuIl19