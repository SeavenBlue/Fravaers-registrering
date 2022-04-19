class sidsteElev{
constructor(){
this.Gustav = [];
this.Thomas = [];
this.Markus = [];
this.Marcus = [];
this.Daniel = [];
this.Julie = [];
this.Louise = [];
this.Lasse = [];
this.Mathias = [];


this.ShouldShow =[];
this.timeSorter;



}

show(){

rect(7.5,480+10,640-7.5,height-480-17.5)
fill(0)
textAlign(LEFT,CENTER)
textSize(20)
if(this.ShouldShow[0]){
console.log(this.ShouldShow)
for(let i = 0; i < this.ShouldShow.length; i++){
if(i > 1){image(this.ShouldShow[i][0][0],25+225,500+100*(i-2),90,90);text(this.ShouldShow[i][0][1],125+225,520+100*(i-2))
}else{image(this.ShouldShow[i][0][0],25,500+100*i,90,90);text(this.ShouldShow[i][0][1],125,520+100*i)}

}
}
   
}




update(){
if(labelsToText.length > 0){
    
for(let i = 0; i < labelsToText[labelsToText.length-1].length; i++){
if(labelsToText[labelsToText.length-1][i]){

if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Gustav"){
    this.Gustav.splice(0,this.Gustav.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Thomas"){
    this.Thomas.splice(0,this.Thomas.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Markus"){
    this.Markus.splice(0,this.Markus.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}

else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Marcus"){
    this.Marcus.splice(0,this.Marcus.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Daniel"){
    this.Daniel.splice(0,this.Daniel.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Lasse"){
    this.Lasse.splice(0,this.Lasse.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Mathias"){
    this.Mathias.splice(0,this.Mathias.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Louise"){
    this.Louise.splice(0,this.Louise.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Julie"){
    this.Julie.splice(0,this.Julie.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
}


}


}}



this.ShouldShow = [];
this.ShouldShow.push(this.Gustav,this.Thomas,this.Markus,this.Marcus,this.Daniel,this.Lasse,this.Louise,this.Mathias,this.Julie)

for(let i = 0; i < this.ShouldShow.length; i++){ 
   console.log("length:"+this.ShouldShow.length)
   console.log("type of:",this.ShouldShow[i],typeof this.ShouldShow[i])
if(this.ShouldShow[i].length < 1){
    console.log("before splice:",this.ShouldShow)
    this.ShouldShow.splice(i,1)
    i--
   console.log("after splice:",this.ShouldShow)
}
}



















this.show()
}







}