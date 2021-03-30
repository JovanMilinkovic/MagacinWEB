import {Mesto} from "./mesto.js"
export class Raf{

    constructor(id, ime, boja, i, kapacitet)
    {
        this.id = id;
        this.ime = ime;
        this.boja = boja;
        this.kapacitetRaf = kapacitet;
        this.x = i;
        this.miniKontejner = null;
        this.mesta = [];
    }

    dodajMesto(mesto)
    {
        this.mesta[mesto.x]=mesto;
    }
    crtajRaf(kontejnerMag, brRaf, n)
    {
            const divRaf = document.createElement("div");
            divRaf.className = "divRaf";
            kontejnerMag.appendChild(divRaf);

            const label = document.createElement("label");
            label.innerHTML=this.ime;
            label.className = "labelImeRaf"+brRaf;
            divRaf.classList.add("raf"+brRaf);
            divRaf.appendChild(label);
            brRaf+=1;
            let brMesta = 1;
            
            divRaf.style.backgroundColor=this.boja;
            while(brMesta <= n)
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
                    let kr = this.kapacitetRaf;
                    if (tr<=kr)
                    {
                        dodajMesto.innerHTML = tr++ + "/" + kr;
                        this.dodajMesto(new Mesto(brMesta-1, tr, kr));
                        console.log(this.mesta);
                        fetch("https://localhost:5001/Magacin/DodajMesto/"+this.id, {
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({
                                kolicina:this.mesta[brMesta-1].kolicina,
                                maxKolicina:this.mesta[brMesta-1].maxKolicina,
                                x:this.mesta[brMesta-1].x
                            })
                        }).then(p=>{
                            if(p.ok)
                            {
                                console.log("Dodali ste mesto");
                            }
                            else("Neispravan unos!");
                        });
                    }
                }
            }
        }
    }
