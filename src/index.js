"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statue_1 = require("./statue");
let nameRegex = /[A-Za-z, ]+/i;
var isRight = 0;
let statueList = [];
var osszesen = 0;
var ertek = 0;
var statueName;
var creationYear;
var statuePrice;
var statueHeight;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        checkIfRight();
        console.log(isRight);
        if (isRight == 0) {
            statueList.push(new statue_1.Statue(statueName, creationYear, statuePrice, statueHeight));
            alert("A szobor hozzá lett adva!");
            osszesen++;
            ertek += statuePrice;
            let inputs = document.querySelectorAll("input");
            inputs.forEach((input) => (input.value = ""));
            document.getElementById('overall').textContent = "Összesen " + osszesen + " darab van";
            document.getElementById('price').textContent = "Az értékük " + ertek + " Ft";
        }
    });
});
function checkIfRight() {
    statueName = document.getElementById('nev').value;
    creationYear = parseInt(document.getElementById('ev').value);
    statuePrice = parseInt(document.getElementById('ar').value);
    statueHeight = parseInt(document.getElementById('magassag').value);
    if (statueName.toLowerCase() == null) {
        isRight = 1;
        alert("Nem lehet üres a név!");
    }
    else if (!(nameRegex.test(statueName))) {
        isRight = 1;
        alert("Nem tartalmazhat speciális karaktert!");
    }
    else if (creationYear > 2022) {
        isRight = 1;
        alert("Nem lehet nagyobb az év mint a jelenlegi!");
    }
    else if (statuePrice < 1) {
        isRight = 1;
        alert("Nem lehet kisebb az ár mint egy!");
    }
    else if (statueHeight < 10) {
        isRight = 1;
        alert("Nem lehet kisebb a szobor mint 10 centi!");
    }
}
