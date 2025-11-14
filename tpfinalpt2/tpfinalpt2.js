// video explicativo: https://youtu.be/3KqBkW6-M5c
let juego;
let imagenFondo;
let imagenesComida = [];
let imagenEnemigo;
let imagenOso;
let fuente;
let musicaFondo;

function preload() {
imagenFondo = loadImage('data/fondo.png');
imagenesComida[0] = loadImage('data/comida1.png');
imagenesComida[1] = loadImage('data/comida2.png');
imagenesComida[2] = loadImage('data/comida3.png');
imagenesComida[3] = loadImage('data/comida4.png');
imagenEnemigo = loadImage('data/rama.png');
imagenOso = loadImage('data/osos.png');
fuente = loadFont('data/fuenteoso.ttf');
musicaFondo = loadSound('data/musica.mp3')
}

function setup() {
  createCanvas (640, 480);
  juego = new Juego();
}

function draw() {
  background(100);
  juego.dibujar();
  if (juego.estado === juego.estado_jugando && musicaFondo && !musicaFondo.isPlaying()) {
        musicaFondo.play();
    }
}
function mouseClicked() {
  if (juego.estado === juego.estado_inicio) {
    juego.estado = juego.estado_jugando;
    juego.iniciar(); 
  }
}
function keyPressed() {
if (juego.estado === juego.estado_jugando) { 
    juego.teclapresionada();
  } 
  else if (juego.estado === juego.estado_fin_juego) {
    if (key === 'r' || key === 'R') {
      juego.reiniciar();
    }
  }
}

function keyReleased(){
  if (juego.estado === juego.estado_jugando) { 
    juego.teclasoltada();
  }
}
