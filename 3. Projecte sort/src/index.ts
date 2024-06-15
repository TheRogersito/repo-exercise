class Sorter{
    collection : number[]|string;
    constructor(collection:number[]|string){
        this.collection = collection
    }
    sort():number[]|string{
        if(typeof this.collection==="string"){
          return this.collection.split('').sort().join('')
        }
        return this.collection.sort((a,b)=>a-b)
    }
}

const sorter = new Sorter([0,10,-1,5,-5]);
console.log(sorter.sort())
const sentence = new Sorter("Amiga")
console.log(sentence.sort())