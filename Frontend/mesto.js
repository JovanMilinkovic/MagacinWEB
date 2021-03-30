import {Raf} from "./raf.js";
export class Mesto{
    constructor(i, kolicina, maxKolicina)
    {
        this.x=i;
        this.kolicina=1;
        this.maxKolicina=maxKolicina;
        this.miniKontejner=null;
    }
}