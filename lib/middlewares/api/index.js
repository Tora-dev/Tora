"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = require("./post");
var express = require("express");
var apiRouter = express();
apiRouter.use('/post', post_1.default);
exports.default = apiRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFCQUE2QjtBQUU3QixzQkFBbUM7QUFHbkMsSUFBTSxBQUFTLFlBQUcsQUFBTyxBQUFFLEFBQUM7QUFFNUIsQUFBUyxVQUFDLEFBQUcsSUFBQyxBQUFPLFNBQUcsT0FBTyxBQUFDLEFBQUM7QUFFakMsa0JBQWUsQUFBb0IsQUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb3N0QXBpIGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IEV4cHJlc3MgfSBmcm9tICdleHByZXNzJztcblxuY29uc3QgYXBpUm91dGVyID0gZXhwcmVzcygpO1xuXG5hcGlSb3V0ZXIudXNlKCcvcG9zdCcgLCBwb3N0QXBpKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpUm91dGVyIGFzIEV4cHJlc3M7XG4iXX0=