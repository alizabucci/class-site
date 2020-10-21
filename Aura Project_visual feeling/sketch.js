// let radio;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   radio = createRadio();
//   radio.option('black');
//   radio.option('white');
//   radio.option('gray');
//   radio.style('width', '60px');
//   textAlign(CENTER);
//   fill(255, 0, 0);
// }
//
// function draw() {
//   let val = radio.value();
//   background(val);
//   text(val, width / 2, height / 2);
// }

let yoff = 0.0;
let colorPicker;
// let song;


// function preload(){
//     song = loadSound('audio/Khalid_AmericanTeen_Angels.mp3');
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorPicker = createColorPicker(51);
  colorPicker.size(windowWidth);
  colorPicker.position(0,height/2);
  // title = text("frisson", width/2, height/2);
  // song.loop();
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {

  background(51);
  noStroke();

  // if (song.isPlaying()){
  //   song.pause();
  //   background(0);
  // }else{
  //   song.play();
  //   background(51);
  // }

  // rect(colorPicker.color());

  fill(colorPicker.color());
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0;

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 8) {
    // Calculate a y value according to noise, map to

    // 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 800);


    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);


  // textFont('arial');
  // textSize(100);
  // textAlign(CENTER);
  // fill('#47546C');
  // text("frisson",800,800);
}
