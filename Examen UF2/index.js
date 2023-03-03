class alumneCF {
    constructor(nomAlumne) {
        this.nomAlumne = nomAlumne;
        this.centre = "Institut Pedralbes";
        this.curs = 1;
        this.notes = [];
    }
    passarDeCurs() {
        if (this.curs == 1) {
            this.curs++
            return `${this.nomAlumne} ha passat de curs!`
        } else {
            return "Error, ja esta en segon"
        }
    }
    afegirNota(nota) {
        this.notes.push(nota)
    }
    calcularNotaMitjana() {
        const mitjana = this.notes.reduce((a, b) => a + b, 0) / this.notes.length;
        return mitjana.toFixed(2)
    }
    imprimirDades() {
        return `
        Nom alumne: ${this.nomAlumne}\n
        Centre: ${this.centre}
        Curs: ${this.curs}
        Notes: ${this.notes}
        Nota mitjana: ${this.calcularNotaMitjana()}
        `
    }
}

class alumneCFGS extends alumneCF {
    constructor(nomAlumne, nomCicle, menorDeEdat, veDeGrauMig) {
        super(nomAlumne);
        this.nomCicle = nomCicle
        this.menorDeEdat = menorDeEdat
        this.veDeGrauMig = veDeGrauMig
    }
    imprimirDades() {
        return `
        Nom alumne: ${this.nomAlumne}
        Centre: ${this.centre}
        Curs: ${this.curs}
        Nom cicle: ${this.nomCicle}
        Menor d'edat? ${this.menorDeEdat?"Si":"No"}
        Ve de grau mig? ${this.veDeGrauMig?"Si":"No"}
        Notes: ${this.notes}
        Nota mitjana: ${this.calcularNotaMitjana()}
        `
    }
}

