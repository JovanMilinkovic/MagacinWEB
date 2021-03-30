import {Raf} from "./raf.js";
import {Mesto} from "./mesto.js";

export class Magacin{

    constructor(id, ime, kapacitet, n)
    {
        this.id = id;
        this.ime = ime;
        this.kapacitet = kapacitet;
        this.n = n;
        this.kontejnerMag = null;
        this.brRaf = 1;
        this.rafovi = Array(); //ovo je niz rafova
    }
    crtajMagacin(host)
    {
        const kontejnerMag = document.createElement("div");
        kontejnerMag.className="kontejnerMag";
        kontejnerMag.classList.add("mag"+this.id);
        host.appendChild(kontejnerMag);
        const idm = document.createElement("h1");
        idm.innerHTML = "ID magacina: "+this.id;
        kontejnerMag.appendChild(idm);

        const ime = document.createElement("h1");
        ime.innerHTML="Ime magacina: "+this.ime;
        kontejnerMag.appendChild(ime);
        fetch("https://localhost:5001/Magacin/PreuzmiRafove"+"/"+this.id).then(p=>{
            p.json().then(data=>{
                data.forEach(raf => {
                    this.rafovi.push(new Raf(raf.id, raf.imeRafa, raf.boja, raf.x, raf.kapacitet));
                    
                    if(raf.mesta!=null)
                    {
                        raf.mesta.forEach(mesto=>
                            {
                                if(this.rafovi[this.rafovi.length-1].mesta[mesto.x] === undefined)
                                {
                                    this.rafovi[this.rafovi.length-1].mesta[mesto.x].kolicina=mesto.kolicina;
                                }
                                else
                                {
                                    this.rafovi[this.rafovi.length-1].mesta[mesto.x].kolicina+=mesto.kolicina;
                                }
                                this.rafovi[this.rafovi.length-1].mesta[mesto.x].maxKolicina=mesto.maxKolicina;
                                this.rafovi[this.rafovi.length-1].mesta[mesto.x].x=mesto.x;
                            })  
                    }
                    this.rafovi[this.rafovi.length-1].crtajRaf(kontejnerMag, this.brRaf++, this.n);
                    
                });
                
            });
        });
        
        /*while(this.brRaf <= this.kapacitet)
        {
            //const divRaf = document.createElement("div");
            divRaf.className = "divRaf";
            kontejnerMag.appendChild(divRaf);

            const label = document.createElement("label");
            label.innerHTML=this.rafovi[0].ime;
            label.className = "labelImeRaf"+this.brRaf;
            divRaf.classList.add("raf"+this.brRaf);
            divRaf.appendChild(label);
            this.brRaf+=1;
            let brMesta = 1;
            while(brMesta <= this.n)
            {
                const divMes = document.createElement("div");
                divMes.className = "divMes";
                divRaf.appendChild(divMes);

                const dodajMesto = document.createElement("button");
                dodajMesto.className="dodajMesto";
                dodajMesto.innerHTML = "+";
                divMes.appendChild(dodajMesto);
                brMesta+=1;
                let tr = 1;
                dodajMesto.onclick=(ev)=>
                {
                    let kr = this.rafovi[this.brRaf-1].kapacitetRaf;
                    if (tr<=kr)
                    {
                        dodajMesto.innerHTML = tr++ + "/" + kr;
                    }
                    else
                        alert("Mesto je popunjeno");
                }
            }
        }*/
    }
    crtajRafove(host)
    {
        
    }
}