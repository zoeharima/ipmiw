class ramaEnemigo {
  constructor(posX,posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad=1;
  }
    dibujar() {
    image(imagenEnemigo, this.posX, this.posY, 60, 40); 
    this.mover();
  }
  mover(){
    
    this.posY=this.posY + this.velocidad;
  }
}
