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
