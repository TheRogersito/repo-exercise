import { User } from "./models/User";

const user1 = new User({name:'hehe',age:4})

console.log(user1.get('age'))