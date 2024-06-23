import { CsvFileReader } from "./CsvFileReader";

const matches = new CsvFileReader('football.csv')
matches.read()

enum MatchResult {
    Home="H",
    Away="A",
    Draw="D"
}

let manUnitedWins = 0;

for(let match of matches.data){
    const result = match[5]
    if(match[1]==="Man United" && result===MatchResult.Home){
        manUnitedWins++;
    }else if(match[2]==="Man United" && result===MatchResult.Away){
        manUnitedWins++;
    }
}