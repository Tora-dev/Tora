"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVCQUFxQztBQUVwQyxBQUFnQixTQUFDLEFBQU8sVUFBRyxBQUFNLE9BQUMsQUFBTyxBQUFDO0FBRTNDLHlCQUFnQyxBQUFhO0FBQ3pDLEFBQU0sZUFBSyxBQUFPLFFBQUMsVUFBQyxBQUFPLFNBQUUsQUFBTTtBQUMvQixBQUFRLGlCQUFDLEFBQU8sUUFBQyxBQUFLLE9BQUUsVUFBQyxBQUFHO0FBQ3hCLEFBQUUsQUFBQyxnQkFBQyxBQUFHLEFBQUMsS0FBQSxBQUFNLE9BQUMsQUFBRyxBQUFDLEFBQUM7QUFDcEIsQUFBTyxBQUFFLEFBQUMsQUFDZDtBQUFDLEFBQUMsQUFBQyxBQUNQO0FBQUMsQUFBQyxBQUFDLEFBQ1AsS0FOVztBQU1WO0FBUEQsMEJBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbihtb25nb29zZSBhcyBhbnkpLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZShkYnVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChkYnVybCwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycilyZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iXX0=