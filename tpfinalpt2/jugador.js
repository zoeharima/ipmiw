class Jugador {
  constructor() {
    this.vidas=3;
    this.puntaje=0;
    this.osos= new ososJugador();
  }
  dibujar(){
    this.osos.dibujar();
  }
  quitarvida() {
    this.vidas = this.vidas -1;
  }
  incrementarpuntaje() {
    this.puntaje = this.puntaje + 10;
  }
  teclapresionada(){
   this.osos.teclapresionada();
  }
  teclasoltada(){
    this.osos.teclasoltada();
  }
}
