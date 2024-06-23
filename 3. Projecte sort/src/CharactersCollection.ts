import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
    data: string;
    constructor(data:string){
        super()
        this.data=data;
    }
    get length():number{
        return this.data.length;
    }
    compare(leftIndex:number, rightIndex:number):boolean{
        return this.data[leftIndex].toLowerCase()>this.data[rightIndex].toLowerCase()
    }
    swap(leftIndex:number, rightIndex:number){
        const characters = this.data.split('')
        let temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join('')
    }
}