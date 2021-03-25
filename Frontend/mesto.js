import {Raf} from "./raf.js";
export class Mesto{
    constructor(i, j, kapacitet, maxKapacitet)
    {
        this.x=i;
        this.y=j;
        this.kapacitet=0;
        this.maxKapacitet=maxKapacitet;
        this.miniKontejner=null;
    }
}