var P5Canvas;

function setup() {
  P5Canvas = createCanvas(windowWidth-1, windowHeight-1);
  P5Canvas.position(0,0)
  P5Canvas.style("z-index","-1")
}

function draw() {
  background(200)



}


function windowResized(){

  resizeCanvas(windowWidth-1, windowHeight-1);


}