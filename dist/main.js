(()=>{"use strict";var e={741:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Statue=void 0,t.Statue=class{constructor(e,t,a,n){this.title=e,this.year=t,this.price=a,this.height=n}}}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,a),l.exports}(()=>{const e=a(741);let t=/[A-Za-z, ]+/i;var n=0;let r=[];var l,o,s,i,u=0,d=0;document.addEventListener("DOMContentLoaded",(()=>{var a;null===(a=document.getElementById("submit"))||void 0===a||a.addEventListener("click",(()=>{l=document.getElementById("nev").value,o=parseInt(document.getElementById("ev").value),s=parseInt(document.getElementById("ar").value),i=parseInt(document.getElementById("magassag").value),null==l.toLowerCase()?(n=1,alert("Nem lehet üres a név!")):t.test(l)?o>2022?(n=1,alert("Nem lehet nagyobb az év mint a jelenlegi!")):s<1?(n=1,alert("Nem lehet kisebb az ár mint egy!")):i<10&&(n=1,alert("Nem lehet kisebb a szobor mint 10 centi!")):(n=1,alert("Nem tartalmazhat speciális karaktert!")),console.log(n),0==n&&(r.push(new e.Statue(l,o,s,i)),alert("ok"),u++,d+=s,document.querySelectorAll("input").forEach((e=>e.value="")),document.getElementById("overall").textContent="Összesen "+u+" darab van",document.getElementById("price").textContent="Az értékük "+d+" Ft")}))}))})()})();