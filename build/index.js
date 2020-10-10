"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchesReader = MatchReader_1.MatchReader.fromCsv('098 football.csv');
var summary = Summary_1.Summary.buildHtmlReport('Man United');
matchesReader.load();
summary.buildAndPrintReport(matchesReader.matches);
