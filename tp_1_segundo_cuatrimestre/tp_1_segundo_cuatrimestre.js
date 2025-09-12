//https://youtu.be/OCM2TCvE2IU
//variables
let refe;
let xr, yr;
let c1, c2;
let activarefectotrans;
function preload () {
  refe = loadImage("imagenes/imagrefe.jpg")
}
function setup() {
  createCanvas(800, 400);
  xr= 400/8;
  yr= 400/8;
  c1=color(255);
  c2=color(0);
  activarefectotrans=false;
}
function draw() {
  background(255);
  image(refe, 0, 0, 400, 400);
  noFill();
  cuadrados(xr, yr);
}
function cuadrados( xr, yr) {
  //for (inicio, condicion, final)
  for (let x=400; x<width; x+=xr) {
    for (let y=0; y<400; y+=yr) {
      //bolean para saber si es par la fila
      let esPar = esFilaPar(y, yr);
      //for para hacer el degrade y efecto de tranparencia.
      for (let i = 0; i < xr; i++) {
        let d= dist(mouseX, mouseY, x+i, y+yr/2);
        let efecto = map(i, 0, xr, 0, 1);
        let c;
        //condicional para los colores y el "degrade"
        //console.log("efectp: " + efecto);
        if (esPar) {
          c = lerpColor(c1, c2, efecto);
        } else {
          c = lerpColor(c2, c1, efecto);
        }
        //si el boton del mouse iquierdo se pareta y se deja apretado se activa el true o false del bolean activar efecto transparente
        if (mouseIsPressed && (mouseButton== LEFT) ) {
          activarefectotrans = true;
        } else {
          activarefectotrans = false;
        }
        //rect(x, y, xr, yr);
        //aca es como darle un valor a una varieble que en todo caso seria el click del mouse llamado como activarefectotrans
        if (activarefectotrans== true) {
              rect(x, y, xr, yr);
               stroke([map(d, 0, 400, 255, 50)]);
          line(x + i, y, x + i, y + yr)
         // stroke([map(d, 0, 400, 255, 50)]);
          
        } else {
          rect(x, y, xr, yr);
          line(x + i, y, x + i, y + yr)
          stroke (c);
        }
        //line(x + i, y, x + i, y + yr);
      }
    }
    if ( mouseIsPressed && (mouseButton==RIGHT) ) {
      c1 = color(random(255), random(255), random(255));
      c2 = color(random(255), random(255), random(255));
    }
    if (keyIsPressed && key=='b') {
      c1= color(255);
      c2= color(0);
      xr= 400/8;
      yr= 400/8;
    }
  }
}
//funcion que retorna valor
function esFilaPar(y, altodfila) {
  return int (y / altodfila) % 2 == 0;
}
