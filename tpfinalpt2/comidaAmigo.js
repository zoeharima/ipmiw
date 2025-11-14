class Comida {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.velocidad = 1; 
        this.size = 60;
        this.imagen = random(imagenesComida); 
        this.velocidad=1;
    }
    
dibujar() {
   image(this.imagen, this.posX, this.posY, this.size, this.size);
    this.mover();
    }
    
mover() {
   this.posY = this.posY + this.velocidad;
   if (this.posY > height) {
   this.reciclar();
        }
    }
    
reciclar() {
   this.posX = random(0, width - this.size);
   this.posY = random(-100, -1000); 
    }
}
