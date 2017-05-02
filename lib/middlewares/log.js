"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("../utils/Logger");
var log = function log(req, res, next) {
    var startTime = new Date();
    res.on('finish', function () {
        var endTime = new Date();
        Logger_1.default.info(req.method + " " + req.url + " -- " + (endTime.getTime() - startTime.getTime()) + "ms");
    });
    next();
};
exports.default = log;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1QkFBcUM7QUFFckMsSUFBTSxBQUFHLE1BQTJCLGFBQUMsQUFBRyxLQUFFLEFBQUcsS0FBRSxBQUFJO0FBQ2pELFFBQU0sQUFBUyxZQUFHLElBQUksQUFBSSxBQUFDO0FBQzNCLEFBQUcsUUFBQyxBQUFFLEdBQUMsQUFBUSxVQUFFO0FBQ2YsWUFBTSxBQUFPLFVBQUcsSUFBSSxBQUFJLEFBQUM7QUFDekIsaUJBQU0sUUFBQyxBQUFJLEFBQUMsS0FBRyxBQUFHLElBQUMsQUFBTSxlQUFJLEFBQUcsSUFBQyxBQUFHLGdCQUFPLEFBQU8sUUFBQyxBQUFPLEFBQUUsWUFBRyxBQUFTLFVBQUMsQUFBTyxBQUFFLEFBQUksQUFBQyxBQUFDLEFBQzFGO0FBQUMsQUFBQyxBQUFDO0FBQ0gsQUFBSSxBQUFFLEFBQUMsQUFDVDtBQUFDLEFBQUM7QUFFRixrQkFBZSxBQUFHLEFBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi91dGlscy9Mb2dnZXInO1xuXG5jb25zdCBsb2c6IGV4cHJlc3MuUmVxdWVzdEhhbmRsZXIgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGU7XG4gIHJlcy5vbignZmluaXNoJywgKCkgPT4ge1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZTtcbiAgICBsb2dnZXIuaW5mbyhgJHtyZXEubWV0aG9kfSAke3JlcS51cmx9IC0tICR7ZW5kVGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpfW1zYCk7XG4gIH0pO1xuICBuZXh0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2c7XG4iXX0=