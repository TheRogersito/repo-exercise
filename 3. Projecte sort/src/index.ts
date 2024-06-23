import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";


const numbersa = new NumbersCollection([1,4,2,6,5])
const charactersa = new CharactersCollection("Costra amb carn de patata")
console.log(numbersa.sort())
console.log(charactersa.sort())
const linked = new LinkedList();
linked.add(500)
linked.add(320)
linked.add(755500)
linked.add(50)
linked.sort();
linked.print();