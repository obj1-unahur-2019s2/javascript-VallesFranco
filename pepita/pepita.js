class Golondrina {
    constructor() {
        this._energia = 0;
    }

    energia() {
        return this._energia;
    }

    comer(cosa, gramos) {
        this._energia += cosa.energiaPorGramo() * gramos;
    }

    volar(kms) {
        if (this._energia >= 1) {    
            this._energia -= kms + 10;
        }   
    }
}

const alpiste = { energiaPorGramo: () => 5 }
const mondongo = { energiaPorGramo: () => 100 }



function darleAlpisteAPepita() {
    const input = document.getElementById("gramos");
    pepita.comer(alpiste, input.value);
    const label = document.getElementById("energia");
    label.innerText = pepita.energia();
}
function hacerVolarAPepita() {
    pepita.volar(25);
    const label = document.getElementById("energia");
    label.innerText = pepita.energia();
}
function darleMondongoAPepita() {
    pepita.comer(mondongo, 5);
    const label = document.getElementById("energia");
    label.innerText = pepita.energia();
}

const pepita = new Golondrina();

module.exports = { Golondrina, alpiste, mondongo }