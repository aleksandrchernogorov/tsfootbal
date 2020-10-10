"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wincount = 0;
        var homeWins = 0;
        var awayWins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.teamName && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wincount++;
                homeWins++;
            }
            else if (match[2] === this.teamName &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                wincount++;
                awayWins++;
            }
        }
        return this.teamName + " won " + wincount + " games in total this year. They won " + homeWins + " games at home and " + awayWins + " games away from home";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
