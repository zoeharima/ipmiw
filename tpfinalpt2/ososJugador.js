class ososJugador {
  constructor() {
    this.posX = width/2;
    this.posY = 300;
    this.velocidad = 5;
    this.color = color(0);
    this.movimiento= 0; //p mover el oso, -1 izq, 1 der, 0 quieto
  }
  dibujar() {
image(imagenOso, this.posX, this.posY, 220, 170);
  }
  
  actualizar() {
    this.posX += this.movimiento * this.velocidad;
        if (this.posX < -60) {
            this.posX = -60;
        }
        if (this.posX > width - 150) { 
            this.posX = width - 150;
        }
    }
    
teclapresionada(){
        if(keyCode === LEFT_ARROW){
            this.movimiento = -1;
        }else if(keyCode === RIGHT_ARROW){
            this.movimiento = 1; 
        }
    }
    teclasoltada(){
        if(keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW){
            this.movimiento = 0;
        }
    }
}
