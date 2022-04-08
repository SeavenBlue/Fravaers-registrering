class sidsteElev{
constructor(){
this.Gustav = [];
this.Thomas = [];
this.ShouldShow =[];
this.timeSorter;



}

show(){

rect(7.5,480+10,640-7.5,height-480-17.5)
fill(0)
textAlign(LEFT,CENTER)
textSize(20)
if(this.ShouldShow[0][0]){
console.log(this.ShouldShow)
for(let i = 0; i < this.ShouldShow.length; i++){
image(this.ShouldShow[i][0][0],25,500+100*i,90,90)

text(this.ShouldShow[i][0][1],125,500+100*i)
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

}


}}



this.ShouldShow = [];
this.ShouldShow.push(this.Gustav,this.Thomas)

for(let i = 0; i < this.ShouldShow.length; i++){ 
if(this.ShouldShow[i][0] === undefined){
this.ShouldShow.splice(i,1)}
}


this.show()
}







}