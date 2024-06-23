import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
    data: number[];
    constructor(data:number[]){
        super();
        this.data=data;
    }
    get length():number{
        return this.data.length;
    }
    compare(leftIndex:number, rightIndex:number):boolean{
        return this.data[leftIndex]>this.data[rightIndex]
    }
    swap(leftIndex:number, rightIndex:number){
        let temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}