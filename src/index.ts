import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchesReader = MatchReader.fromCsv('098 football.csv');
const summary = Summary.buildHtmlReport('Man United');
matchesReader.load();
summary.buildAndPrintReport(matchesReader.matches);
