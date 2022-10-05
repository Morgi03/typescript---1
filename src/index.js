"use strict";
// Automata fordítás
// npx tsc --watch
// npx webpack watch
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
/*
function osszead(t : number[] | string[]) {
let sum : number | string = 0;
for (let e of t) {
    sum += e;
}
return sum;
}

console.log(osszead([1, 3445, -325.3]));
console.log(osszead(['He','Ll' , 'Oo']));
*/
// console.log(osszead([new User("a",3)]));
// console.log(osszead([2, 'adsf']))
function IDkiir(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id.toUpperCase());
    }
}
IDkiir(23);
IDkiir("adsasgh");
// Ellenőrizni kell
let elem = document.getElementById('sgdf');
if (elem != null) {
    console.log(elem.textContent);
}
// a null ellenőrzést a ' ? ' végzi el
console.log(elem === null || elem === void 0 ? void 0 : elem.textContent);
//html
function szamol() {
    let szam = parseInt(document.getElementById('szam').value);
    document.getElementById('kimenet').textContent = negyzet(szam).toString();
}
function init() {
    var _a;
    (_a = document.getElementById('szam')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', szamol);
}
document.addEventListener('DOMContentLoaded', init);
