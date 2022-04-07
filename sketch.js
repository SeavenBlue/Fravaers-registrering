var P5Canvas;
var sidstSete;
var frames =[];
var VidCapture;

function setup() {
  P5Canvas = createCanvas(windowWidth-1, windowHeight-1);
  P5Canvas.position(0,0)
  P5Canvas.style("z-index","-1")
  sidstSete = new sidsteElev()



  let constraints = {
    video: {
      mandatory: {
        maxWidth: 640,
        maxHeight: 480
      }
    },
    audio: false
  };

  VidCapture = createCapture(constraints)
  VidCapture.hide()
}

function draw() {
  background(200)

  noFill()
  strokeWeight(5)
  rect(0,0,640,480)

sidstSete.show()



}


function windowResized(){

  resizeCanvas(windowWidth-1, windowHeight-1);


}