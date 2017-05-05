"use strict";

var InjectionMiddlewares = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(app) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        app.use(log_1.default);
                        app.use(cookieParser());
                        app.use(bodyParser());
                        app.use(session({ secret: conf_1.default.get('session:secret') }));
                        app.use(errorhandler());
                        app.use('/api', api_1.default);

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function InjectionMiddlewares(_x) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var errorhandler = require("errorhandler");
var session = require("express-session");
var conf_1 = require("../utils/conf");
var log_1 = require("./log");
var api_1 = require("./api");

exports.default = InjectionMiddlewares;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBFQVNtRCxBQUFZO0FBQWhELEFBQUs7Ozs7QUFDaEIsQUFBRyw0QkFBQyxBQUFHLElBQUMsTUFBRyxBQUFDLEFBQUM7QUFDYixBQUFHLDRCQUFDLEFBQUcsSUFBQyxBQUFZLEFBQUUsQUFBQyxBQUFDO0FBQ3hCLEFBQUcsNEJBQUMsQUFBRyxJQUFDLEFBQVUsQUFBRSxBQUFDLEFBQUM7QUFDdEIsQUFBRyw0QkFBQyxBQUFHLElBQUMsQUFBTyxRQUFDLEVBQUUsQUFBTSxRQUFFLE9BQU0sUUFBQyxBQUFHLElBQUMsQUFBZ0IsQUFBQyxBQUFFLEFBQUMsQUFBQyxBQUFDO0FBQzNELEFBQUcsNEJBQUMsQUFBRyxJQUFDLEFBQVksQUFBRSxBQUFDLEFBQUM7QUFDeEIsQUFBRyw0QkFBQyxBQUFHLElBQUMsQUFBTSxRQUFFLE1BQVMsQUFBQyxBQUFDLEFBQy9CLEFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCRCx5QkFBMEM7QUFDMUMsMkJBQThDO0FBQzlDLDJCQUE2QztBQUU3QyxzQkFBMkM7QUFDM0MscUJBQW1DO0FBQ25DLG9CQUF3QjtBQUN4QixvQkFBOEI7O0FBRTlCLGtCQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5pbXBvcnQgKiBhcyBlcnJvcmhhbmRsZXIgZnJvbSAnZXJyb3JoYW5kbGVyJztcbmltcG9ydCB7IEV4cHJlc3MgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vdXRpbHMvY29uZic7XG5pbXBvcnQgbG9nIGZyb20gJy4vbG9nJztcbmltcG9ydCBhcGlSb3V0ZXIgZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBJbmplY3Rpb25NaWRkbGV3YXJlcyhhcHA6IEV4cHJlc3MpIHtcbiAgICBhcHAudXNlKGxvZyk7XG4gICAgYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyKCkpO1xuICAgIGFwcC51c2Uoc2Vzc2lvbih7IHNlY3JldDogY29uZmlnLmdldCgnc2Vzc2lvbjpzZWNyZXQnKSB9KSk7XG4gICAgYXBwLnVzZShlcnJvcmhhbmRsZXIoKSk7XG4gICAgYXBwLnVzZSgnL2FwaScsIGFwaVJvdXRlcik7XG59XG4iXX0=