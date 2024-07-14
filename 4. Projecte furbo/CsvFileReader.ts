import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./matchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader{
    data: MatchData[]=[];
    constructor(public filename:string){}
    read(){
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map(match=>match.split(','))
        .map((match:string[]):MatchData=>[
        dateStringToDate(match[0]),
        match[1],
        match[2],
        parseInt(match[3]),
        parseInt(match[4]),
        match[5] as MatchResult,
        match[6]
        ])
    }
}