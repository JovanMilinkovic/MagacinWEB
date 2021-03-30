import {Magacin} from "./magacin.js";
import {Raf} from "./raf.js";
import {Mesto} from "./mesto.js";

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
label.innerHTML = "Unesite maksimalni broj rafova u magacinu: ";
magacinForma.appendChild(label);

input = document.createElement("input");
input.className = "inputRafbrMag";
input.type = "number";
magacinForma.appendChild(input);

label = document.createElement("label");
label.className = "labelMag";
label.innerHTML = "Unesite broj mesta u rafu: ";
magacinForma.appendChild(label);

input = document.createElement("input");
input.className = "inputNMag";
input.type = "number";
magacinForma.appendChild(input);

/*label = document.createElement("label");
label.className = "labelMag";
label.innerHTML = "Unesite M: ";
magacinForma.appendChild(label);

input = document.createElement("input");
input.className = "inputMMag";
input.type = "number";
magacinForma.appendChild(input);*/

const dodajMagacin = document.createElement("button");
dodajMagacin.className = "dodajMagacin";
dodajMagacin.innerHTML = "Dodajte magacin";
magacinForma.appendChild(dodajMagacin);

dodajMagacin.onclick=(ev)=>{
    let ime = magacinForma.querySelector(".inputImeMag").value;
    let kapacitet = magacinForma.querySelector(".inputRafbrMag").value;
    let n = magacinForma.querySelector(".inputNMag").value;
    //let m = magacinForma.querySelector(".inputMMag").value;
    if(ime!=null && kapacitet!=0 && n!=0){
        fetch("https://localhost:5001/Magacin/DodajMagacin", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                ime:ime,
                kapacitet:kapacitet,
                n:n
            })
        });

        alert("Uspesno ste dodali magacin");
    }
    else {
        alert("Niste uneli validne podatke");
    }
}

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

izmeniMagacin.onclick=(ev)=>
{
    let id, ime, kapacitet, n, m;
    id=magacinForma.querySelector(".inputIDMag").value;
    ime=magacinForma.querySelector(".inputImeMag").value;
    kapacitet=magacinForma.querySelector(".inputRafbrMag").value;
    n=magacinForma.querySelector(".inputNMag").value;
    //m=magacinForma.querySelector(".inputMMag").value;
    if(id==0 || ime==null || kapacitet==0 || n==0 || m==0)
    alert("Niste uneli sve podatke!");
    fetch("https://localhost:5001/Magacin/IzmeniMagacin",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id:id,
            ime:ime,
            kapacitet:kapacitet,
            n:n,
            m:m
        })
        }).then(p=>{
            if(p.ok)
            {
                location.reload();
            }
        });
}
const obrisiMagacin = document.createElement("button");
obrisiMagacin.className = "obrisiMagacin";
obrisiMagacin.innerHTML = "Obrišite magacin";
magacinForma.appendChild(obrisiMagacin);

obrisiMagacin.onclick=(ev)=>{
    let id=magacinForma.querySelector(".inputIDMag").value;
    fetch("https://localhost:5001/Magacin/IzbrisiMagacin?id="+id, 
    {
        method: "DELETE"
    }).then(p=>
        {
            if(p.ok)
            {
                location.reload();
            }
            else
                alert("Niste uneli ID ili je ID neispravan!");
        });
    }

//kontejner za CRUD rafova
const rafForma = document.createElement("div");
rafForma.className = "rafForma";
main.appendChild(rafForma);

label = document.createElement("h2");
label.innerHTML = "RAFOVI";
rafForma.appendChild(label);

label = document.createElement("label");
label.innerHTML = "Upišite ID magacina u koji ubacujete rafove: ";
rafForma.appendChild(label);

input = document.createElement("input");
input.className = "inputIDMagRaf";
rafForma.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Unesite vrstu robe na rafu: ";
rafForma.appendChild(label);

input = document.createElement("input");
input.className="inputRafIme";
rafForma.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Izaberite boju rafa: ";
rafForma.appendChild(label);

let select = document.createElement("select");
select.id = "bojaRafa";
rafForma.appendChild(select);

let option = document.createElement("option");
option.innerHTML="crvena";
option.value = "red";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML="žuta";
option.value = "yellow";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML="zelena";
option.value = "green";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML="narandžasta";
option.value = "orange";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML="plava";
option.value = "blue";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML="ljubičasta";
option.value = "violet";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML="roze";
option.value = "pink";
select.appendChild(option);

label = document.createElement("label");
label.innerHTML = "Unesite kapacitet mesta na rafu: ";
rafForma.appendChild(label);

input = document.createElement("input");
input.className = "kapacitetRafa";
rafForma.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Unesite red u kom se nalazi raf: ";
rafForma.appendChild(label);

input = document.createElement("input");
input.className = "xRafa";
rafForma.appendChild(input);

const unesiRaf = document.createElement("button");
unesiRaf.className = "unesiRaf";
unesiRaf.innerHTML = "Unesite raf u magacin";
rafForma.appendChild(unesiRaf);

unesiRaf.onclick=(ev)=>
{
    let id = rafForma.querySelector(".inputIDMagRaf").value;
    let mag = document.querySelector(".mag"+id);
    let ime = rafForma.querySelector(".inputRafIme").value;
    let boja = rafForma.querySelector("#bojaRafa").value;
    let kapacitet = rafForma.querySelector(".kapacitetRafa").value;
    let x = rafForma.querySelector(".xRafa").value;
    /*let imeRaf = mag.querySelector(".labelImeRaf"+x);
    let bojaRafa = mag.querySelector(".raf"+x);
    let raf = rafForma.querySelector(".raf"+x);
    bojaRafa.style.backgroundColor=boja;
    imeRaf.innerHTML = ime;*/
    if(id==0 || ime==null || kapacitet==0)
        alert("Neispravan unos!");
        fetch("https://localhost:5001/Magacin/DodajRaf" + "/" + id, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                imeRafa:ime,
                boja:boja,
                kapacitet:kapacitet,
                x:x
            })
        }).then(p=>{
            if(p.ok)
            {
                location.reload();
                alert("Dodali ste raf!");
            }
            else("Neispravan unos!");
        });
        
}

//dugme za iscrtavanje

const iscrtajForma = document.createElement("div");
iscrtajForma.className = "iscrtajForma";
main.appendChild(iscrtajForma);

const iscrtajMagacine = document.createElement("button");
iscrtajMagacine.className="iscrtajMagacine";
iscrtajMagacine.innerHTML = "Iscrtaj magacine";
iscrtajForma.appendChild(iscrtajMagacine);

iscrtajMagacine.onclick=(ev)=>
{
    fetch("https://localhost:5001/Magacin/PreuzmiMagacine").then(p=>{
        p.json().then(data=>{
            data.forEach(magacin => {
                const magacin1=new Magacin(magacin.id, magacin.ime, magacin.kapacitet, magacin.n, magacin.m);

                magacin1.crtajMagacin(document.body);
                magacin1.rafovi.forEach(raf=>{
                    var r=raf;
                        r.crtajRafove(magacin1);
                })
            });
        })
    })
}

//dugme za brisanje mesta
const brisiMestaForma = document.createElement("div");
brisiMestaForma.className = "brisiMesta";
main.appendChild(brisiMestaForma);

label = document.createElement("label");
label.innerHTML = "ID rafa u kom brišete mesto: ";
brisiMestaForma.appendChild(label);

input = document.createElement("input");
input.className="idRafaBrisi";
brisiMestaForma.appendChild(input);

const brisiRaf = document.createElement("button");
brisiRaf.className = "brisiRaf";
brisiRaf.innerHTML = "Obrišite raf";
brisiMestaForma.appendChild(brisiRaf);

brisiRaf.onclick=(ev)=>{
    let id=brisiMestaForma.querySelector(".idRafaBrisi").value;
    fetch("https://localhost:5001/Magacin/IzbrisiRaf?id="+id, 
    {
        method: "DELETE"
    })
    }

label = document.createElement("label");
label.innerHTML = "ID mesta koje brišete: ";
brisiMestaForma.appendChild(label);

input = document.createElement("input");
input.className="idMestaBrisi";
brisiMestaForma.appendChild(input);

const brisiMesto = document.createElement("button");
brisiMesto.className = "brisiMesto";
brisiMesto.innerHTML = "Obrišite mesto";
brisiMestaForma.appendChild(brisiMesto);

brisiMesto.onclick=(ev)=>{
    let id1 = brisiMestaForma.querySelector(".idRafaBrisi").value;
    let id2 = brisiMestaForma.querySelector(".idMestaBrisi").value;
    fetch("https://localhost:5001/Magacin/ObrisiMesto" + "/" + id1 + "?id=" + id2,
    {
        method: "DELETE"
    })
}