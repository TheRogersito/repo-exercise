import fs from "fs";

export abstract class CsvFileReader<T>{
    data: T[]=[];
    constructor(public filename:string){}

    abstract mapRow(match:string[]): T;

    read(){
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map(match=>match.split(','))
        .map(this.mapRow)
    }
}