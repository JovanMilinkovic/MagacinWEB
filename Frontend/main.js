import {Magacin} from "./magacin.js";

//glavni kontejner
const main = document.createElement("div");
main.className = "kontejner";
document.body.appendChild(main);

//kontejner za CRUD magacina
const magacinForma = document.createElement("div");
magacinForma.className = "magacinForma";
main.appendChild(magacinForma);

let label = document.createElement("h2");
label.innerHTML = "MAGACINI";
magacinForma.appendChild(label);

label = document.createElement("label");
label.className = "labelMag";
label.innerHTML = "Unesite ime magacina: ";
magacinForma.appendChild(label);

let input = document.createElement("input");
input.className = "inputImeMag";
magacinForma.appendChild(input);

label = document.createElement("label");
label.className = "labelMag";
label.innerHTML = "Unesite broj rafova u magacinu: ";
magacinForma.appendChild(label);

input = document.createElement("input");
input.className = "inputRafbrMag";
input.type = "number";
magacinForma.appendChild(input);

label = document.createElement("label");
label.className = "labelMag";
label.innerHTML = "Unesite N: ";
magacinForma.appendChild(label);

input = document.createElement("input");
input.className = "inputNMag";
input.type = "number";
magacinForma.appendChild(input);

label = document.createElement("label");
label.className = "labelMag";
label.innerHTML = "Unesite M: ";
magacinForma.appendChild(label);

input = document.createElement("input");
input.className = "inputMMag";
input.type = "number";
magacinForma.appendChild(input);

const dodajMagacin = document.createElement("button");
dodajMagacin.className = "dodajMagacin";
dodajMagacin.innerHTML = "Dodajte magacin";
magacinForma.appendChild(dodajMagacin);

label = document.createElement("label");
label.innerHTML = "ID magacina: ";
magacinForma.appendChild(label);

input = document.createElement("input");
input.className = "inputIDMag";
magacinForma.appendChild(input);

const izmeniMagacin = document.createElement("button");
izmeniMagacin.className = "izmeniMagacin";
izmeniMagacin.innerHTML = "Izmenite magacin";
magacinForma.appendChild(izmeniMagacin);

const obrisiMagacin = document.createElement("button");
obrisiMagacin.className = "obrisiMagacin";
obrisiMagacin.innerHTML = "Obrišite magacin";
magacinForma.appendChild(obrisiMagacin);

//kontejner za CRUD rafova
const rafForma = document.createElement("div");
rafForma.className = "rafForma";
main.appendChild(rafForma);

//kontejner za CRUD mesta
const mestoForma = document.createElement("div");
mestoForma.className = "mestoForma";
main.appendChild(mestoForma);
