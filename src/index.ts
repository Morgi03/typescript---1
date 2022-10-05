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

let users : User[] = [];
users.push(new User("masikuser", 10));
users.push(user1);
/*
console.log(users);
*/
let u = users[1];
for (let e of users) {
    e.kiir();
}

let usernames : Array<string> = [ 'str1', 'str2' ];
let userHalmaz : Set<User> = new Set();

// Dictionary
let nevUser : Map<string, User> = new Map();
let nevUser2 = new Map<string, User>();
// nevUser2.set("usernev", new User("usernv", 33));
// nevUser2.get("usernev").kiir();


