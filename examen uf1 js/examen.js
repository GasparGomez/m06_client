var exercici3 = (function () {
    function init() {
        let dataCorrecta = false;
        let dia = null;
        let mes = null;
        let any = null;
        do {
            dia = parseInt(prompt("Introdueix el dia"));
            mes = parseInt(prompt("Introdueix el mes"));
            any = parseInt(prompt("Introdueix l'any"));

            data = {
                dia: dia,
                mes: mes,
                any: any
            }

            dataCorrecta = correcta(data);

            if (dataCorrecta) {
                console.log("correcta");
                
            } else {
                console.log("incorrecta");
            }
        } while (!dataCorrecta);

        if (es_any_de_traspas(any)) {
            console.log("Es any de traspas");
        }

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const novaData = new Date(any, mes, dia);

        let d = weekday[novaData.getDay()];

        document.open();
        document.write(`<h1>La data va caure en el dia: ${d}</h1>`);
        document.close();
    }

    function es_any_de_traspas(any) {
        let es = false;
        if (((any % 4 == 0) && (any % 100 != 0 )) || (any % 400 == 0)) {
            es = true;
        }

        return es;
    }

    function correcta(data) {
        let dataCorrecta = false;

        if (data.mes > 0 && data.mes <= 12) {
            let diaMaxim = new Date(data.any, data.mes, 0).getDate();

            if (data.dia >= 1 && data.dia <= diaMaxim) {
                dataCorrecta = true;
            } else {
                dataCorrecta = false;
            }
        } else {
            dataCorrecta = false;
        }
        return dataCorrecta;
    }

    return {ex3: init}
})();
