// Automata fordítás
// npx tsc --watch
// npx webpack watch
 
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

function IDkiir(id : number | string){

if(typeof id === 'number'){
console.log(id);
} else {
    console.log(id.toUpperCase());
}
}
IDkiir(23);
IDkiir("adsasgh");


// Ellenőrizni kell
let elem : HTMLElement | null = document.getElementById('sgdf');
if (elem != null){
    console.log(elem.textContent);
}
// a null ellenőrzést a ' ? ' végzi el
console.log(elem?.textContent);

//html

function szamol(){
    let szam : number = parseInt((document.getElementById('szam') as HTMLInputElement).value);
    (document.getElementById('kimenet') as HTMLElement).textContent = negyzet(szam).toString();
}

function init(){
    document.getElementById('szam')?.addEventListener('input',szamol);
}

document.addEventListener('DOMContentLoaded', init);