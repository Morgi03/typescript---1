// Automata fordítás
// npx tsc --watch
 
import { User } from "./User";

let message : string = 'Hello world';
console.log(message);
// let ures; <- nem találja ki a tipust 
if(message.startsWith('H')) {
    console.log('H-val kezdődik')
}else{
    console.log()
}
let ertek = 5;

// Kitalálja magától:
// ertek = "asdf"; <-- hiba!


function negyzet(szam : number) : number {
    return szam * szam;
}

// let s : string = negyzet(3); hibát jelez

let  user1 = new User('nev',44);
user1.kiir();