import {Mesto} from "./mesto.js"
export class Raf{

    constructor(ime, boja, kapacitet)
    {
        this.ime = ime;
        this.boja = boja;
        this.kapacitet = 0;
        this.miniKontejner = null;
        this.mesta = [];
    }
}