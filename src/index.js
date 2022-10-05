"use strict";
// Automata fordítás
// npx tsc --watch
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
let message = 'Hello world';
console.log(message);
// let ures; <- nem találja ki a tipust 
if (message.startsWith('H')) {
    console.log('H-val kezdődik');
}
else {
    console.log();
}
let ertek = 5;
// Kitalálja magától:
// ertek = "asdf"; <-- hiba!
function negyzet(szam) {
    return szam * szam;
}
// let s : string = negyzet(3); hibát jelez
let user1 = new User_1.User('nev', 44);
user1.kiir();
let users = [];
users.push(new User_1.User("masikuser", 10));
users.push(user1);
/*
console.log(users);
*/
let u = users[1];
for (let e of users) {
    e.kiir();
}
let usernames = ['str1', 'str2'];
let userHalmaz = new Set();
// Dictionary
let nevUser = new Map();
let nevUser2 = new Map();
// nevUser2.set("usernev", new User("usernv", 33));
// nevUser2.get("usernev").kiir();
