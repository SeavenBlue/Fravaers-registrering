class ElevLister{
constructor(){
this.fraværende = [];
this.tilstedeværende = [];
this.person;
}


show(){
    if(popUp === false){
fill(200,200,255)
rect(640+12.5,207.5,300,height-215)
rect(640+12.5+312.5,207.5,300,height-215)

noStroke()
textAlign(CENTER,CENTER)
fill(0)
textSize(20)
text("Tilstedeværende",640+12.5+312.5+300/2,250)
text("Fraværende",640+12.5+300/2,250)

stroke(0)
line(640+12.5+312.5+50,260,640+12.5+312.5+250,260)
line(640+12.5+50,260,640+12.5+250,260)


for(let i = 0; i < this.fraværende.length; i++){
image(this.fraværende[i][1],width-590,115+70*i,50,50)


}



for(let i = 0; i < this.tilstedeværende.length; i++){
    fill(200,255,100,180)
    strokeWeight(3)
    stroke(0)
    rect(640+12.5+315-1.5+10,295+70*i,300-2.5-20,70)
    noStroke()
    image(this.tilstedeværende[i][1],640+12.5+312.5+25,300+70*i,50,50)
    textSize(15)
    fill(0)
    textAlign(LEFT,CENTER)
    text(this.tilstedeværende[i][3],640+12.5+312.5+90,310+70*i)




    this.size = 15
    fill(255,130,130)
    stroke(100,100,100)
    strokeWeight(1)
    beginShape()
    vertex(1216,325+70*i)
    vertex(1216+this.size,325-this.size+70*i)
    vertex(1216+this.size,325-this.size/2+70*i)
    vertex(1216+this.size*2,325-this.size/2+70*i)
    vertex(1216+this.size*2,325+this.size/2+70*i)
    vertex(1216+this.size,325+this.size/2+70*i)
    vertex(1216+this.size,325+this.size+70*i)
    endShape(CLOSE)

    if(mouseX >1216 && mouseX < 1216+this.size*2 && mouseY >325-this.size+70*i && mouseY < 325+this.size+70*i && mouseIsPressed === true){
        
        console.log("click")
            this.person = this.tilstedeværende[i]
        popUp = true;


      
    } 

    
}




strokeWeight(5)
stroke(0)



    }else{

stroke(5)
fill(200,200,255)
rect(660-7.5,200+7.5,600+12.5,500-1.5)
textAlign(CENTER,CENTER)
noStroke()
fill(0)
text("Elev: "+this.person[3],660-7.5+(600+12.5)/2,240)
console.log(this.person)

if(this.person[4]){
for(let i = 0; i < this.person[4].length;i++){
image(this.person[4][i],662.5+122.5*i,400,100,100)
if(i >= 4){i = this.person[4].length}
}}



    }


















}





update(){

this.fraværende = []
this.tilstedeværende = []



if(DanielInf[0] === false){this.fraværende.push(DanielInf)} else{this.tilstedeværende.push(DanielInf)}
if(GustavInf[0] === false){this.fraværende.push(GustavInf)}else{this.tilstedeværende.push(GustavInf)}
if(JulieInf[0] === false){this.fraværende.push(JulieInf)}else{this.tilstedeværende.push(JulieInf)}
if(LasseInf[0] === false){this.fraværende.push(LasseInf)}else{this.tilstedeværende.push(LasseInf)}
if(LouiseInf[0] === false){this.fraværende.push(LouiseInf)}else{this.tilstedeværende.push(LouiseInf)}
if(MarcusInf[0] === false){this.fraværende.push(MarcusInf)}else{this.tilstedeværende.push(MarcusInf)}
if(MarkusInf[0] === false){this.fraværende.push(MarkusInf)}else{this.tilstedeværende.push(MarkusInf)}
if(MathiasInf[0] === false){this.fraværende.push(MathiasInf)}else{this.tilstedeværende.push(MathiasInf)}
if(ThomasInf[0] === false){this.fraværende.push(ThomasInf)}else{this.tilstedeværende.push(ThomasInf)}
    









this.show()

storeItem("Daniel",DanielInf[0])
storeItem("Gustav",GustavInf[0])
storeItem("Julie",JulieInf[0])
storeItem("Lasse",LasseInf[0])
storeItem("Marcus",MarcusInf[0])
storeItem("Markus",MarkusInf[0])
storeItem("Louise",LouiseInf[0])
storeItem("Mathias",MathiasInf[0])
storeItem("Thomas",ThomasInf[0])
















}


}