import { MatchData } from "./MatchData";
import { Analyzer } from "./Summary";
import { MatchResult } from "./matchResult";

export class WinsAnalysis implements Analyzer{
    constructor(public team:string){}
    run(matches:MatchData[]):string{
        let wins = 0
        for(let match of matches){
            const result = match[5]
            if(match[1]==="Man United" && result===MatchResult.Home){
                wins++;
            }else if(match[2]==="Man United" && result===MatchResult.Away){
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} times`
    }
}