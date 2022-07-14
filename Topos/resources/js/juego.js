class juego{
    constructor(){
        this.puntos = 0;
        this.velocidad = 1;
        this.topo;
        this.numeroAleatorio;
    }
    
    sumarPuntos(){
        let puntos = document.getElementById("puntos").value;
        puntos = parseInt(puntos) + 1;
        document.getElementById("puntos").value = puntos;
        this.puntos = puntos;
    }

    seleccionarDificultad(){
        let dificultad = document.getElementById("dificultad").value;
        if(dificultad == "Facil"){
            this.velocidad = 1;
        }else if(dificultad == "Normal"){
            this.velocidad = 2;
        }else if(dificultad == "Dificil"){
            this.velocidad = 3;
        }
    }

    restarPuntos(){
        let puntos = document.getElementById("puntos").value;
        puntos = parseInt(puntos) - 1;
        document.getElementById("puntos").value = puntos;
        this.puntos = puntos;
    }

    iniciarJuego(){
        this.seleccionarDificultad();
        this.desactivarDificultad();
    }

    desactivarDificultad(btnStart, diff) {
        btnStart.disabled = true;
        diff.disabled = true;
    }

}