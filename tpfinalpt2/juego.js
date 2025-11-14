class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.cantidadRamasenemigos = 5;
    this.ramasEnemigos=[];
    this.comidas = [];
    this.cantidadComidas = 5;
    this.estado_inicio = 0;
    this.estado_jugando = 1;
    this.estado_fin_juego = 2;
    this.estado = this.estado_inicio;
    this.textoFinal = "";
  }

actualizar() {
    if (this.estado === this.estado_jugando) {
        this.jugador.osos.actualizar();
        this.controlcolision();
        let puntaje_victoria = 100;
        if (this.jugador.puntaje >= puntaje_victoria) {
            this.estado = this.estado_fin_juego;
            this.textoFinal = "GANASTE";
        if (musicaFondo && musicaFondo.isPlaying()) {
                musicaFondo.stop();
            }
        }
        else if (this.jugador.vidas <= 0) {
            this.estado = this.estado_fin_juego;
            this.textoFinal = "PERDISTE";
           if (musicaFondo && musicaFondo.isPlaying()) {
                musicaFondo.stop();
            }
        }
    }
  }
  iniciar() {
    this.ramasEnemigos = [];
    this.comidas = [];
    for (let i=0; i<  this.cantidadRamasenemigos; i++) {
      let posX = random(0, width -40);
      let posY = random(-100, -1000);
      this.ramasEnemigos[i]= new ramaEnemigo(posX, posY);
    }
    for (let i = 0; i < this.cantidadComidas; i++) {
      let posX = random(0, width - 40);
      let posY = random(-100, -1000);
      this.comidas[i] = new Comida(posX, posY);
    }
  }
  reiniciar() {
    this.jugador = new Jugador(); 
    this.iniciar(); 
    this.estado = this.estado_jugando;
  }
  dibujarPantallaInicio() {
    fill(255, 255, 200);
    rect(0, 0, width, height);
    textFont(fuente);
    fill(255, 100, 0); 
    textSize(55);
    textAlign(CENTER, CENTER);
    text("OSOS RECOLECTORES", width / 2, height / 2 - 120);
    fill(0);
    textSize(23);
    text("Consegui 100 puntos para ganar.", width / 2, height / 2 - 20);
    text("Evita las ramas. Solo tenes 3 vidas!", width / 2, height / 2 + 10);
    text("Mover: Flechas Izq / Der", width / 2, height / 2 + 40);
    fill(50, 150, 50); 
    textSize(30);
    text("HACE CLICK PARA EMPEZAR", width / 2, height - 100);
  }
dibujar() {
    this.dibujarFondo(); 
    if (this.estado === this.estado_inicio) { 
      this.dibujarPantallaInicio(); 
    } 
    else if (this.estado === this.estado_jugando) { 
      this.actualizar();
      this.dibujarPuntaje();
      this.jugador.dibujar();
      this.dibujarramasEnemigos(); 
      this.dibujarComida();        
    } 
    else if (this.estado === this.estado_fin_juego) { 
      this.dibujarPantallaFinal();
    }
  }
  dibujarPantallaFinal() {
    fill(0, 0, 0, 180); 
    rect(0, 0, width, height);
    textFont(fuente);
    if (this.textoFinal === "GANASTE") {
     fill(50, 255, 50);
   } else {
    fill(255, 50, 50);
   }
    textSize(70);
    textAlign(CENTER, CENTER);
    text(this.textoFinal, width / 2, height / 2 - 80);
    fill(255);
    textSize(25);
    text("Puntaje Final: " + this.jugador.puntaje, width / 2, height / 2 + 0);
    fill(200);
    textSize(18);
    text("Créditos: Zoe Harima y Delfina Cebey ;)", width / 2, height / 2 + 50);
    fill(255, 255, 0); 
    textSize(20);
    text("Presiona R para reiniciar", width / 2, height - 40);
  }
  dibujarramasEnemigos() {
    for (let i=0; i< this.cantidadRamasenemigos; i++) {
      this.ramasEnemigos[i].dibujar();
    }
  }
  dibujarComida() {
    for (let i = 0; i < this.comidas.length; i++) {
      this.comidas[i].dibujar();
    }
  }
  dibujarFondo() {
    image(imagenFondo, 0, 0, width, height);
  }
  dibujarPuntaje() {
    textFont(fuente);
    fill(247, 97, 97);
    textAlign(LEFT, TOP);
    textSize(30);
    let textoPuntaje = "Puntos:" + this.jugador.puntaje;
    let textoVidas= "Vidas:" + this.jugador.vidas;
    text(textoPuntaje, 10, 10);
       text(textoVidas, 10, 40);
  }
  teclapresionada() {
    this.jugador.teclapresionada();
  }
  teclasoltada() {
    this.jugador.teclasoltada();
  }
  controlcolision() {
   let canastaX = this.jugador.osos.posX + 110; //(canasta ancho)
    let canastaY = this.jugador.osos.posY + 130;//(canasta largo)
    for (let i = 0; i < this.cantidadRamasenemigos; i++) {
      let enemigoX = this.ramasEnemigos[i].posX + 30; //(ancho rama)
      let enemigoY = this.ramasEnemigos[i].posY + 20;//(largo rama)
      if (dist(enemigoX, enemigoY, canastaX, canastaY) < 60) {
        this.jugador.quitarvida(); //cuando agarras una rama te disminuyen las vidas 
        this.ramasEnemigos[i].posY = random(-100, -1000);
        this.ramasEnemigos[i].posX = random(0, width - 40); //es como desaparece al tocar la canasta solo para que te quite una sola vida
        }
    }
    for (let i = 0; i < this.cantidadComidas; i++) {
      let comidaX = this.comidas[i].posX + 30; //  (ancho comida)
      let comidaY = this.comidas[i].posY + 30; // (alto comida)

      if (dist(comidaX, comidaY, canastaX, canastaY) < 60) {
        this.jugador.incrementarpuntaje(); // Suma puntos
  
  //vuelve a mover la comida arriba para que no se termine 
        this.comidas[i].posY = random(-100, -1000); 
        this.comidas[i].posX = random(0, width - 40);
    }
  }
  }
}
