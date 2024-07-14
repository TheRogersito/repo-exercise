import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer{
    run(matches: MatchData[]):string;
}

export interface OutputTarget{
    print(report: string):void;
}

export class Summary{
    static winsAnalysisHtmlReport(team:string){
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        )
    }
    constructor(public analyzer:Analyzer, public target:OutputTarget){}

    buildAndPrintReport(matches:MatchData[]){
        const output = this.analyzer.run(matches);
        this.target.print(output);
    }
}