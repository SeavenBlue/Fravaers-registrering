var Moduler;

class Skema{
constructor(){
    this.moduleTimer = ["8:10 - 9:20","9:30 - 10:40","10:50 - 12:00","12:25 - 13:35","13:45 - 14:55","15:05 - 16:15"]
Moduler = getItem("Moduler")
if(Moduler === null){Moduler =[]}
this.moduleTimer2 = [[490,560],[570,640],[650,720],[745,815],[825,895],[905,975]]
this.timer = 0;

for(let i = 0; i < 6; i++){

    if(Moduler[i]){
    
    
    }else{
    Moduler.splice(i,1,"Der tages automatisk fravær")   
    }


}}


show(){
fill(200,200,255)
    stroke(0)
    rect(640+312.5*2+12.5,10,width-640-312.5*2-20,height-17.5)

    fill(0)
    noStroke()
    textAlign(CENTER,CENTER)
    this.weekDay = ["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"]
    this.text = [this.weekDay[new Date().getDay()-1],[new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()]]
    text(this.text[0],640+312.5*2+12.5+(width-640-312.5*2-20)/2,30)
    textSize(15)
    text(this.text[1],640+312.5*2+12.5+(width-640-312.5*2-20)/2,50)


for(let i = 0; i < 6; i++){
stroke(0)
strokeWeight(3)
fill(180,180,255)
rect(640+312.5*2+12.5+(width-640-312.5*2-20)/2-100,150+90*i,200,60)
noStroke()
fill(0)
textSize(15)
text("Modul "+(i+1),640+312.5*2+12.5+(width-640-312.5*2-20)/2,140+90*i)

textSize(10)
textAlign(LEFT,CENTER)
text(this.moduleTimer[i],640+312.5*2+12.5+30,143+90*i)

textAlign(CENTER)
textSize(13)
text(Moduler[i],640+312.5*2+12.5+(width-640-312.5*2-20)/2,160+90*i)

if(mouseX > 640+312.5*2+12.5+(width-640-312.5*2-20)/2-100 && mouseX < 640+312.5*2+12.5+(width-640-312.5*2-20)/2+100 && mouseY >150+90*i && mouseY < 150+90*i+60 && this.timer < millis() && mouseIsPressed){
if(Moduler[i] === "Der tages automatisk fravær"){Moduler.splice(i,1,"Der tages ikke automaitsk fravær")}
else {Moduler.splice(i,1,"Der tages automatisk fravær")}
this.timer = millis()+500 
}


}



}


update(){
    
    this.show()


    for(let i = 0; i < 6; i ++){
    if(hour()*60+minute() >= this.moduleTimer2[i][0] && hour()*60+minute()  < this.moduleTimer2[i][1] && Moduler[i] === "Der tages automatisk fravær"){
    
    DanielInf.splice(0,1,false)
    GustavInf.splice(0,1,false)
    if(GustavInf[7]){if(GustavInf[7] >= this.moduleTimer2[i][1]){
        GustavInf.splice(0,1,true)
    }}
    
    
    
    JulieInf.splice(0,1,false)
    LasseInf.splice(0,1,false)
    LouiseInf.splice(0,1,false)
    MarcusInf.splice(0,1,false)
    MarkusInf.splice(0,1,false)
    MathiasInf.splice(0,1,false)
    ThomasInf.splice(0,1,false)


    }}




}










}