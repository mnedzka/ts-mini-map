import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outPutTarget: OutputTarget) {}

  static winAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HTMLReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outPutTarget.print(output);
  }
}
