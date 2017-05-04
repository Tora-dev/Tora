"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = require("./post");
var Tora_1 = require("../Tora");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
function connectDatabase(dburl) {
    return new Promise(function (resolve, reject) {
        mongoose.connect(dburl, function (err) {
            if (err) reject(err);
            resolve();
        });
    });
}
exports.connectDatabase = connectDatabase;
Tora_1.default.post = post_1.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFCQUErQjtBQUMvQixxQkFBMkI7QUFDM0IsdUJBQXFDO0FBRXBDLEFBQWdCLFNBQUMsQUFBTyxVQUFHLEFBQU0sT0FBQyxBQUFPLEFBQUM7QUFFM0MseUJBQWdDLEFBQWE7QUFDekMsQUFBTSxlQUFLLEFBQU8sUUFBQyxVQUFDLEFBQU8sU0FBRSxBQUFNO0FBQy9CLEFBQVEsaUJBQUMsQUFBTyxRQUFDLEFBQUssT0FBRSxVQUFDLEFBQUc7QUFDeEIsQUFBRSxBQUFDLGdCQUFDLEFBQUcsQUFBQyxLQUFBLEFBQU0sT0FBQyxBQUFHLEFBQUMsQUFBQztBQUNwQixBQUFPLEFBQUUsQUFBQyxBQUNkO0FBQUMsQUFBQyxBQUFDLEFBQ1A7QUFBQyxBQUFDLEFBQUMsQUFDUCxLQU5XO0FBTVY7QUFQRCwwQkFPQztBQUVELE9BQUksUUFBQyxBQUFJLE9BQUcsT0FBUyxBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuL3Bvc3QnO1xuaW1wb3J0IFRvcmEgZnJvbSAnLi4vVG9yYSc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbihtb25nb29zZSBhcyBhbnkpLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZShkYnVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChkYnVybCwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycilyZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblRvcmEucG9zdCA9IFBvc3RNb2RlbDtcbiJdfQ==