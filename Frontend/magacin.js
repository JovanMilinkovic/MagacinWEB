import {Raf} from "./raf.js";

export class Magacin{

    constructor(naziv, n,m,kapacitet)
    {
        this.naziv = naziv;
        this.n = n;
        this.m = m;
        this.kapacitet = kapacitet;
        this.kontejnerMag = null;
        this.rafovi = []; //ovo je niz rafova
    }
}