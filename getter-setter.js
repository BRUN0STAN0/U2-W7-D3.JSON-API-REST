class Rettangolo {
    constructor(base, altezza) {
        this._base = base
        this._altezza = altezza
    }

    get base() {
        return this._base
    }

    set base(b) {
        if (b <= 0) {
            console.error("La base non può essere minore o uguale a 0")
        } else {
            this._base = b
        }
    }

    get altezza() {
        return this._altezza
    }

    set altezza(a) {
        if (a <= 0) {
            console.error("L'altezza non può essere minore o uguale a 0")
        } else {
            this._altezza = a
        }
    }
    get area() { 
        return this.base * this.altezza
    }

    printName() {
        console.log("Ciao, sono un Rettangolo!")
    }

    static fromString(stringa) {
        let stringParts = stringa.split(',');
        let base = Number(stringParts[0]);
        let altezza = Number(stringParts[1]);
        return new Rettangolo(base,altezza);
    }
}

let rettangolo1 = new Rettangolo(10,5);

// console.log(rettangolo1.area);
// rettangolo1.base = 20;
// console.log(rettangolo1.area);

console.log(rettangolo1.base)

let rettangolo2 = Rettangolo.fromString("12,27");

console.log(rettangolo2.area);