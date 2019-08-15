import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
