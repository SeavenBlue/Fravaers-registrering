var P5Canvas;
var sidstSete;
var frames =[];
var labelsToText =[];
var VidCapture;
var elevLister;
var elever;
var popUp = false;
var skema;

var DanielIMG;
var GustavIMG;
var JulieIMG;
var LasseIMG;
var LouiseIMG;
var MarcusIMG;
var MarkusIMG;
var MathiasIMG;
var ThomasIMG;

var DanielInf = [];
var GustavInf = [];
var JulieInf = [];
var LasseInf = [];
var LouiseInf = [];
var MarcusInf = [];
var MarkusInf = [];
var MathiasInf = [];
var ThomasInf = [];

var minuteHolder;
var modul;

var førsteTime;

function preload(){




DanielIMG = loadImage('/labeled_images/Daniel/1.jpg')
GustavIMG = loadImage('/labeled_images/Gustav/1.jpg')
JulieIMG = loadImage('/labeled_images/Julie/3.jpg')
LasseIMG = loadImage('/labeled_images/Lasse/1.jpg')
LouiseIMG = loadImage('/labeled_images/Louise/1.jpg')
MarcusIMG = loadImage('/labeled_images/Marcus/1.jpg')
MarkusIMG = loadImage('/labeled_images/Markus/1.jpg')
MathiasIMG = loadImage('/labeled_images/Mathias/1.jpg')
ThomasIMG = loadImage('/labeled_images/Thomas/1.jpg')





}

function setup() {
  P5Canvas = createCanvas(windowWidth-1, windowHeight-1);
  P5Canvas.position(0,0)
  P5Canvas.style("z-index","-1")
  sidstSete = new sidsteElev;
  elevLister = new ElevLister;
  skema = new Skema;





 DanielInf.splice(1,1,getItem("Daniel"))
  GustavInf.splice(1,1,getItem("Gustav"))
  JulieInf.splice(1,1,getItem("Julie"))
  LasseInf.splice(1,1,getItem("Lasse"))
  LouiseInf.splice(1,1,getItem("Louise"))
  MarcusInf.splice(1,1,getItem("Marcus"))
  MarkusInf.splice(1,1,getItem("Markus"))
  MathiasInf.splice(1,1,getItem("Mathias"))
  ThomasInf.splice(1,1,getItem("Thomas"))

/*
DanielInf = []
GustavInf = []
JulieInf = []
LasseInf = []
LouiseInf = []
MarcusInf = []
MarkusInf = []
MathiasInf = []
ThomasInf = []

*/



 


if(DanielInf[0] === null || DanielInf[0] === undefined){ DanielInf.splice(0,1,false)}
if(GustavInf[0] ===null || GustavInf[0] ===undefined){ GustavInf.splice(0,1,false)}
if(JulieInf[0] === null ||JulieInf[0] ===undefined){ JulieInf.splice(0,1,false)}
if(LasseInf[0] === null || LasseInf[0] ===undefined){ LasseInf.splice(0,1,false)}
if(LouiseInf[0] ===null ||LouiseInf[0] ===undefined){ LouiseInf.splice(0,1,false)}
if(MarcusInf[0] === null || MarcusInf[0] ===undefined){ MarcusInf.splice(0,1,false)}
if(MarkusInf[0] === null || MarkusInf[0] ===undefined){ MarkusInf.splice(0,1,false)}
if(MathiasInf[0] === null || MathiasInf[0] ===undefined){ MathiasInf.splice(0,1,false)}
if(ThomasInf[0] === null || ThomasInf[0] ===undefined){ ThomasInf.splice(0,1,false)}


  
  DanielInf.push(DanielIMG)
  GustavInf.push(GustavIMG) 
  JulieInf.push(JulieIMG)
  LasseInf.push(LasseIMG)
  LouiseInf.push(LouiseIMG)
  MarcusInf.push(MarcusIMG)
  MarkusInf.push(MarkusIMG)
  MathiasInf.push(MathiasIMG)
  ThomasInf.push(ThomasIMG)


  DanielInf.push(0)
  GustavInf.push(0) 
  JulieInf.push(0)
  LasseInf.push(0)
  LouiseInf.push(0)
  MarcusInf.push(0)
  MarkusInf.push(0)
  MathiasInf.push(0)
  ThomasInf.push(0)

  DanielInf.push("Daniel")
  GustavInf.push("Gustav") 
  JulieInf.push("Julie")
  LasseInf.push("Lasse")
  LouiseInf.push("Louise")
  MarcusInf.push("Marcus")
  MarkusInf.push("Markus")
  MathiasInf.push("Mathias")
  ThomasInf.push("Thomas")

  DanielInf.push([])
  GustavInf.push([]) 
  JulieInf.push([])
  LasseInf.push([])
  LouiseInf.push([])
  MarcusInf.push([])
  MarkusInf.push([])
  MathiasInf.push([])
  ThomasInf.push([])

  DanielInf.push(getItem("DanielTotalFravær"))
  GustavInf.push(getItem("GustavTotalFravær")) 
  JulieInf.push(getItem("JulieTotalFravær"))
  LasseInf.push(getItem("LasseTotalFravær"))
  LouiseInf.push(getItem("LouiseTotalFravær"))
  MarcusInf.push(getItem("MarcusTotalFravær"))
  MarkusInf.push(getItem("MarkusTotalFravær"))
  MathiasInf.push(getItem("MathiasTotalFravær"))
  ThomasInf.push(getItem("ThomasTotalFravær"))



  if(DanielInf[5] === NaN || DanielInf[5] === undefined){ DanielInf.splice(5,1,[])}
  if(GustavInf[5] ===NaN || GustavInf[5] ===undefined){ GustavInf.splice(5,1,[])}
  if(JulieInf[5] === NaN ||JulieInf[5] ===undefined){ JulieInf.splice(5,1,[])}
  if(LasseInf[5] === NaN || LasseInf[5] ===undefined){ LasseInf.splice(5,1,[])}
  if(LouiseInf[5] ===NaN ||LouiseInf[5] ===undefined){ LouiseInf.splice(5,1,[])}
  if(MarcusInf[5] === NaN || MarcusInf[5] ===undefined){ MarcusInf.splice(5,1,[])}
  if(MarkusInf[5] === NaN || MarkusInf[5] ===undefined){ MarkusInf.splice(5,1,[])}
  if(MathiasInf[5] === NaN || MathiasInf[5] ===undefined){ MathiasInf.splice(5,1,[])}
  if(ThomasInf[5] === NaN || ThomasInf[5] ===undefined){ ThomasInf.splice(5,1,[])}

  DanielInf.push(getItem("DanielFravær"))
  GustavInf.push(getItem("GustavFravær")) 
  JulieInf.push(getItem("JulieFravær"))
  LasseInf.push(getItem("LasseFravær"))
  LouiseInf.push(getItem("LouiseFravær"))
  MarcusInf.push(getItem("MarcusFravær"))
  MarkusInf.push(getItem("MarkusFravær"))
  MathiasInf.push(getItem("MathiasFravær"))
  ThomasInf.push(getItem("ThomasFravær"))

  DanielInf.splice(5,1,[])
  DanielInf.splice(6,1,[])
  GustavInf.splice(5,1,[])
  GustavInf.splice(6,1,[])
  JulieInf.splice(5,1,[])
  JulieInf.splice(6,1,[])
  LasseInf.splice(5,1,[])
  LasseInf.splice(6,1,[])
  LouiseInf.splice(5,1,[])
  LouiseInf.splice(6,1,[])
  MarcusInf.splice(5,1,[])
  MarcusInf.splice(6,1,[])
  MarkusInf.splice(5,1,[])
  MarkusInf.splice(6,1,[])
  MathiasInf.splice(5,1,[])
  MathiasInf.splice(6,1,[])
  ThomasInf.splice(5,1,[])
  ThomasInf.splice(6,1,[])

  if(DanielInf[6] === NaN || DanielInf[6] === undefined){ DanielInf.splice(6,1,[])}
  if(GustavInf[6] ===NaN || GustavInf[6] ===undefined){ GustavInf.splice(6,1,[])}
  if(JulieInf[6] === NaN ||JulieInf[6] ===undefined){ JulieInf.splice(6,1,[])}
  if(LasseInf[6] === NaN || LasseInf[6] ===undefined){ LasseInf.splice(6,1,[])}
  if(LouiseInf[6] ===NaN ||LouiseInf[6] ===undefined){ LouiseInf.splice(6,1,[])}
  if(MarcusInf[6] === NaN || MarcusInf[6] ===undefined){ MarcusInf.splice(6,1,[])}
  if(MarkusInf[6] === NaN || MarkusInf[6] ===undefined){ MarkusInf.splice(6,1,[])}
  if(MathiasInf[6] === NaN || MathiasInf[6] ===undefined){ MathiasInf.splice(6,1,[])}
  if(ThomasInf[6] === NaN || ThomasInf[6] ===undefined){ ThomasInf.splice(6,1,[])}

  DanielInf.push(getItem("DanielFriModul"))
  GustavInf.push(getItem("GustavFriModul")) 
  JulieInf.push(getItem("JulieFriModul"))
  LasseInf.push(getItem("LasseFriModul"))
  LouiseInf.push(getItem("LouiseFriModul"))
  MarcusInf.push(getItem("MarcusFriModul"))
  MarkusInf.push(getItem("MarkusFriModul"))
  MathiasInf.push(getItem("MathiasFriModul"))
  ThomasInf.push(getItem("ThomasFriModul"))



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

  if(popUp === false){
  background(226,228,255)}

  noFill()
  strokeWeight(5)
  rect(0,0,640,480)

sidstSete.update()
elevLister.update()
skema.update()

noStroke()
fill(226,228,255)
rect(640+312.5+7.5-310,0,630-5,205)
fill(0)
textAlign(CENTER,CENTER)

textSize(30)
if(minute() < 10){ minuteHolder = "0"+minute()}else[minuteHolder = minute()]
text(hour()+":"+minuteHolder,640+312.5+7.5,100)



if(runOnce === 0){
fill(226,228,255)
rect(640+312.5+7.5-300,0,600,205)
  textAlign(CENTER,CENTER)
  fill(0)
  noStroke()
  textSize(40)
  text("Loader...",640+312.5+7.5,100)
}
  
  stroke(0)
}


function windowResized(){

  resizeCanvas(windowWidth-1, windowHeight-1);


}