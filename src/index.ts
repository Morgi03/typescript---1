// Automata fordítás
// npx tsc --watch

class User {
    #nev : string;
    #eletkor : number;

    constructor(nev: string, eletkor : number){
        this.#nev = nev;
        this.#eletkor = eletkor;
    }

    kiir() : void {
        console.log(this.#nev, this.#eletkor);
    }

}


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