"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
