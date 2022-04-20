var P5Canvas;
var sidstSete;
var frames =[];
var labelsToText =[];
var VidCapture;
var elevLister;
var elever;


function setup() {
  P5Canvas = createCanvas(windowWidth-1, windowHeight-1);
  P5Canvas.position(0,0)
  P5Canvas.style("z-index","-1")
  sidstSete = new sidsteElev;
  elevLister = new ElevLister;



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

sidstSete.update()
elevLister.update()



}


function windowResized(){

  resizeCanvas(windowWidth-1, windowHeight-1);


}