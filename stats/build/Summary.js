"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    Summary.winAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HTMLReport_1.HTMLReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
