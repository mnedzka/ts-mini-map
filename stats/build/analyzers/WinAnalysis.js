"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.homeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.awayWin) {
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins;
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
