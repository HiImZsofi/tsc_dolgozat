
import type {Artwork} from './form';
import {Statue} from './statue';

let nameRegex = /[A-Za-z, ]+/i;

var isRight : number = 0;

let statueList : Artwork[] = [];

var osszesen : number = 0;
var ertek : number = 0;

var statueName : string;
var creationYear : number;
var statuePrice : number;
var statueHeight : number;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit')?.addEventListener('click', () => {
        checkIfRight();
        console.log(isRight);
        if(isRight == 0) {
            statueList.push(new Statue(statueName, creationYear, statuePrice, statueHeight)) 
            alert("A szobor hozzá lett adva!")
            osszesen++
            ertek+= statuePrice;
            let inputs = document.querySelectorAll("input");
            inputs.forEach((input) => (input.value = ""));
            (document.getElementById('overall') as HTMLInputElement).textContent = "Összesen " + osszesen + " darab van";
            (document.getElementById('price') as HTMLInputElement).textContent = "Az értékük " + ertek + " Ft";
        }
    })
})

function checkIfRight(){
    statueName = (<HTMLInputElement>document.getElementById('nev')).value;
    creationYear = parseInt((<HTMLInputElement>document.getElementById('ev')).value);
    statuePrice = parseInt((<HTMLInputElement>document.getElementById('ar')).value);
    statueHeight = parseInt((<HTMLInputElement>document.getElementById('magassag')).value);

    if(statueName.toLowerCase() == null){
        isRight = 1;
        alert("Nem lehet üres a név!")
    }
    else if(!(nameRegex.test(statueName))){
        isRight = 1;
        alert("Nem tartalmazhat speciális karaktert!")
    }
    else if(creationYear > 2022){
        isRight = 1;
        alert("Nem lehet nagyobb az év mint a jelenlegi!")
    }
    else if(statuePrice < 1){
        isRight = 1;
        alert("Nem lehet kisebb az ár mint egy!")
    }
    else if(statueHeight < 10){
        isRight = 1;
        alert("Nem lehet kisebb a szobor mint 10 centi!")
    }
}
