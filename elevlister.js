class ElevLister{
constructor(){
this.fraværende = [];
this.tilstedeværende = [];
this.person;
this.scroll = 0;
this.scroll2 = 0;
this.timer = 0;
this.minuteTimer = minute();
this.additionalTimer = 0;
}


show(){
    if(popUp === false){
fill(200,200,255)
rect(640+12.5,207.5,300,height-215)
rect(640+12.5+312.5,207.5,300,height-215)



for(let i = 0; i < this.fraværende.length; i++){
    fill(255,180,100,180)
    strokeWeight(3)
    stroke(0)
    rect(640+12.5-1.5+10,295+70*i+this.scroll2,300-2.5-20,70)
    noStroke()
    image(this.fraværende[i][1],640+12.5+25,300+70*i+this.scroll2,50,50)
    textSize(15)
    fill(0)
    textAlign(LEFT,CENTER)
    text(this.fraværende[i][3],640+12.5+90,310+70*i+this.scroll2)



    this.size = 15
    fill(130,255,130)
    stroke(100,100,100)
    strokeWeight(1)
    beginShape()
    vertex(1216-312.5+this.size*2,325+70*i+this.scroll2)
    vertex(1216+this.size-312.5,325-this.size+70*i+this.scroll2)
    vertex(1216+this.size-312.5,325-this.size/2+70*i+this.scroll2)
    vertex(1216-312.5,325-this.size/2+70*i+this.scroll2)
    vertex(1216-312.5,325+this.size/2+70*i+this.scroll2)
    vertex(1216+this.size-312.5,325+this.size/2+70*i+this.scroll2)
    vertex(1216+this.size-312.5,325+this.size+70*i+this.scroll2)
    endShape(CLOSE)


    if(mouseX >1216-312.5 && mouseX < 1216+this.size*2-312.5 && mouseY >325-this.size+70*i+this.scroll2 && mouseY < 325+this.size+70*i+this.scroll2 && mouseIsPressed === true){
        
        console.log("click")
            this.person = this.fraværende[i]
            this.additionalTimer = millis()+1000
        popUp = true;


      
    } 
    noStroke()
    fill(0)
    textSize(10)
  
    text("Fravær for idag: "+this.fraværende[i][6],640+12.5+90,325+70*i+this.scroll2)
    text("Fravær for modul: "+this.fraværende[i][5],640+12.5+90,335+70*i+this.scroll2)
    
}



for(let i = 0; i < this.tilstedeværende.length; i++){
    fill(200,255,100,180)
    strokeWeight(3)
    stroke(0)
    rect(640+12.5+315-1.5+10,295+70*i+this.scroll,300-2.5-20,70)
    noStroke()
    image(this.tilstedeværende[i][1],640+12.5+312.5+25,300+70*i+this.scroll,50,50)
    textSize(15)
    fill(0)
    textAlign(LEFT,CENTER)
    text(this.tilstedeværende[i][3],640+12.5+312.5+90,310+70*i+this.scroll)




    this.size = 15
    fill(255,130,130)
    stroke(100,100,100)
    strokeWeight(1)
    beginShape()
    vertex(1216,325+70*i+this.scroll)
    vertex(1216+this.size,325-this.size+70*i+this.scroll)
    vertex(1216+this.size,325-this.size/2+70*i+this.scroll)
    vertex(1216+this.size*2,325-this.size/2+70*i+this.scroll)
    vertex(1216+this.size*2,325+this.size/2+70*i+this.scroll)
    vertex(1216+this.size,325+this.size/2+70*i+this.scroll)
    vertex(1216+this.size,325+this.size+70*i+this.scroll)
    endShape(CLOSE)

    if(mouseX >1216 && mouseX < 1216+this.size*2 && mouseY >325-this.size+70*i+this.scroll && mouseY < 325+this.size+70*i+this.scroll && mouseIsPressed === true){
        
        console.log("click")
            this.person = this.tilstedeværende[i]
            this.additionalTimer = millis()+1000
        popUp = true;


      
    } 
    noStroke()
    fill(0)
    textSize(10)
  
    text("Fravær for idag: "+this.tilstedeværende[i][6],640+12.5+90+312.5,325+70*i+this.scroll)
    text("Fravær for modul: "+this.tilstedeværende[i][5],640+12.5+90+312.5,335+70*i+this.scroll)
    
}
noStroke()
fill(226,228,255)
rect(640+12.5,height-5,600,height+100)
stroke(0)
strokeWeight(5)
line(640+12.5+312.5,height-7.5,640+12.5+312.5+300,height-7.5)
noStroke()
fill(200,200,255)
rect(640+15,210,300-5,70)
rect(640+15+312.5,210,300-5,70)

textAlign(CENTER,CENTER)
fill(0)
textSize(20)
text("Tilstedeværende",640+12.5+312.5+300/2,250)
text("Fraværende",640+12.5+300/2,250)

stroke(0)
line(640+12.5+312.5+50,260,640+12.5+312.5+250,260)
line(640+12.5+50,260,640+12.5+250,260)
line(640+12.5,207.5,640+12.5+300,207.5)
line(640+12.5+312.5,207.5,640+12.5+300+312.5,207.5)
    }else{







stroke(5)
fill(200,200,255)
rect(660-7.5,200+7.5,600+12.5,500-1.5)
textAlign(CENTER,CENTER)
noStroke()
fill(0)
text(this.person[3],660-7.5+(600+12.5)/2,240)
image(this.person[1],660-7.5+(600+12.5)/2-50,300-50,100,100)

if(this.person[4]){
    textAlign(LEFT,CENTER)
    if(this.person[4].length > 0){
text("Billeder: "+this.person[2],662.5,550)

for(let i = 0; i < this.person[4].length;i++){
image(this.person[4][i],662.5+122.5*i,570,100,100)
if(mouseX < 662.5+122.5*i+100 && mouseX > 662.5+122.5*i && mouseY > 570 && mouseY < 670 && this.timer < millis()){
stroke(255,0,0)
line(662.5+122.5*i,570,662.5+122.5*i+100,670)
line(662.5+122.5*i,670,662.5+122.5*i+100,570)

if(mouseIsPressed === true){

 for(let j = 0; j < this.tilstedeværende.length; j++){
if(this.person[3] === this.tilstedeværende[j][3]){
    
    if(this.tilstedeværende[j][3] === DanielInf[3]){ DanielInf[4].splice(i,1);DanielInf[2]--}
    if(this.tilstedeværende[j][3] === GustavInf[3]){GustavInf[4].splice(i,1);GustavInf[2]--}
    if(this.tilstedeværende[j][3] === JulieInf[3]){JulieInf[4].splice(i,1);JulieInf[2]--}
    if(this.tilstedeværende[j][3] === LasseInf[3]){LasseInf[4].splice(i,1);LasseInf[2]--}
    if(this.tilstedeværende[j][3] === LouiseInf[3]){LouiseInf[4].splice(i,1);LouiseInf[2]--}
    if(this.tilstedeværende[j][3] === MarcusInf[3]){MarcusInf[4].splice(i,1);MarcusInf[2]--}
    if(this.tilstedeværende[j][3] === MarkusInf[3]){MarkusInf[4].splice(i,1);MarkusInf[2]--}
    if(this.tilstedeværende[j][3] === MathiasInf[3]){MathiasInf[4].splice(i,1);MathiasInf[2]--}
    if(this.tilstedeværende[j][3] === ThomasInf[3]){ThomasInf[4].splice(i,1);ThomasInf[2]--}
    this.timer = millis()+500
}



 }   
}
}
if(i >= 4){i = this.person[4].length}

}}}

noStroke()
textSize(15)
text("Fravær for modul: "+this.person[5],662.5,400)
text("Fravær for idag: "+this.person[6],662.5,420)



text("Sæt elev til tilstedeværende",662.5+450-40,400,100)
noFill()
strokeWeight(3)
stroke(0)
rect(662.5+450-10-40,400-15,150,50)

if(mouseX > 662.5+450-10-40 && mouseX < 662.5+450-10+150-40 && mouseY > 400-15 && mouseY < 400-15+50 && mouseIsPressed === true && this.additionalTimer-500 < millis()){
    if(this.person[0] === true){
        for(let j = 0; j < this.tilstedeværende.length; j++){
            if(this.person[3] === this.tilstedeværende[j][3]){

                for(let i = 0; i < 6; i++){
                    if(i === 0){
                    if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
                if(this.tilstedeværende[j][3] === DanielInf[3]){popUp = false; DanielInf.splice(7,1,skema.moduleTimer2[i][1]); DanielInf.splice(5,1,"0%")}
                if(this.tilstedeværende[j][3] === GustavInf[3]){popUp = false;GustavInf.splice(7,1,skema.moduleTimer2[i][1]); GustavInf.splice(5,1,"0%")}
                if(this.tilstedeværende[j][3] === JulieInf[3]){popUp = false;JulieInf.splice(7,1,skema.moduleTimer2[i][1]); JulieInf.splice(5,1,"0%")}
                if(this.tilstedeværende[j][3] === LasseInf[3]){popUp = false;LasseInf.splice(7,1,skema.moduleTimer2[i][1]); LasseInf.splice(5,1,"0%")}
                if(this.tilstedeværende[j][3] === LouiseInf[3]){popUp = false;LouiseInf.splice(7,1,skema.moduleTimer2[i][1]); LouiseInf.splice(5,1,"0%")}
                if(this.tilstedeværende[j][3] === MarcusInf[3]){popUp = false;MarcusInf.splice(7,1,skema.moduleTimer2[i][1]); MarcusInf.splice(5,1,"0%")}
                if(this.tilstedeværende[j][3] === MarkusInf[3]){popUp = false;MarkusInf.splice(7,1,skema.moduleTimer2[i][1]); MarkusInf.splice(5,1,"0%")}
                if(this.tilstedeværende[j][3] === MathiasInf[3]){popUp = false;MathiasInf.splice(7,1,skema.moduleTimer2[i][1]); MathiasInf.splice(5,1,"0%")}
                if(this.tilstedeværende[j][3] === ThomasInf[3]){popUp = false;ThomasInf.splice(7,1,skema.moduleTimer2[i][1]); ThomasInf.splice(5,1,"0%")}
                        
                    }}
                    else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
                        if(this.tilstedeværende[j][3] === DanielInf[3]){popUp = false; DanielInf.splice(7,1,skema.moduleTimer2[i][1]); DanielInf.splice(5,1,"0%")}
                        if(this.tilstedeværende[j][3] === GustavInf[3]){popUp = false;GustavInf.splice(7,1,skema.moduleTimer2[i][1]); GustavInf.splice(5,1,"0%")}
                        if(this.tilstedeværende[j][3] === JulieInf[3]){popUp = false;JulieInf.splice(7,1,skema.moduleTimer2[i][1]); JulieInf.splice(5,1,"0%")}
                        if(this.tilstedeværende[j][3] === LasseInf[3]){popUp = false;LasseInf.splice(7,1,skema.moduleTimer2[i][1]); LasseInf.splice(5,1,"0%")}
                        if(this.tilstedeværende[j][3] === LouiseInf[3]){popUp = false;LouiseInf.splice(7,1,skema.moduleTimer2[i][1]); LouiseInf.splice(5,1,"0%")}
                        if(this.tilstedeværende[j][3] === MarcusInf[3]){popUp = false;MarcusInf.splice(7,1,skema.moduleTimer2[i][1]); MarcusInf.splice(5,1,"0%")}
                        if(this.tilstedeværende[j][3] === MarkusInf[3]){popUp = false;MarkusInf.splice(7,1,skema.moduleTimer2[i][1]); MarkusInf.splice(5,1,"0%")}
                        if(this.tilstedeværende[j][3] === MathiasInf[3]){popUp = false;MathiasInf.splice(7,1,skema.moduleTimer2[i][1]); MathiasInf.splice(5,1,"0%")}
                        if(this.tilstedeværende[j][3] === ThomasInf[3]){popUp = false;ThomasInf.splice(7,1,skema.moduleTimer2[i][1]); ThomasInf.splice(5,1,"0%")}
                    
                    }}

    
            }}
             }else {
                for(let j = 0; j < this.fraværende.length; j++){
                    if(this.person[3] === this.fraværende[j][3]){
                        for(let i = 0; i < 6; i++){
                            if(i === 0){
                            if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
                        if(this.fraværende[j][3] === DanielInf[3]){popUp = false; DanielInf.splice(7,1,skema.moduleTimer2[i][1]); DanielInf.splice(5,1,"0%")}
                        if(this.fraværende[j][3] === GustavInf[3]){popUp = false;GustavInf.splice(7,1,skema.moduleTimer2[i][1]); GustavInf.splice(5,1,"0%")}
                        if(this.fraværende[j][3] === JulieInf[3]){popUp = false;JulieInf.splice(7,1,skema.moduleTimer2[i][1]); JulieInf.splice(5,1,"0%")}
                        if(this.fraværende[j][3] === LasseInf[3]){popUp = false;LasseInf.splice(7,1,skema.moduleTimer2[i][1]); LasseInf.splice(5,1,"0%")}
                        if(this.fraværende[j][3] === LouiseInf[3]){popUp = false;LouiseInf.splice(7,1,skema.moduleTimer2[i][1]); LouiseInf.splice(5,1,"0%")}
                        if(this.fraværende[j][3] === MarcusInf[3]){popUp = false;MarcusInf.splice(7,1,skema.moduleTimer2[i][1]); MarcusInf.splice(5,1,"0%")}
                        if(this.fraværende[j][3] === MarkusInf[3]){popUp = false;MarkusInf.splice(7,1,skema.moduleTimer2[i][1]); MarkusInf.splice(5,1,"0%")}
                        if(this.fraværende[j][3] === MathiasInf[3]){popUp = false;MathiasInf.splice(7,1,skema.moduleTimer2[i][1]); MathiasInf.splice(5,1,"0%")}
                        if(this.fraværende[j][3] === ThomasInf[3]){popUp = false;ThomasInf.splice(7,1,skema.moduleTimer2[i][1]); ThomasInf.splice(5,1,"0%")}
                                
                            }}
                            else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
                                if(this.fraværende[j][3] === DanielInf[3]){popUp = false; DanielInf.splice(7,1,skema.moduleTimer2[i][1]); DanielInf.splice(5,1,"0%")}
                                if(this.fraværende[j][3] === GustavInf[3]){popUp = false;GustavInf.splice(7,1,skema.moduleTimer2[i][1]);GustavInf.splice(5,1,"0%")}
                                if(this.fraværende[j][3] === JulieInf[3]){popUp = false;JulieInf.splice(7,1,skema.moduleTimer2[i][1]); JulieInf.splice(5,1,"0%")}
                                if(this.fraværende[j][3] === LasseInf[3]){popUp = false;LasseInf.splice(7,1,skema.moduleTimer2[i][1]); LasseInf.splice(5,1,"0%")}
                                if(this.fraværende[j][3] === LouiseInf[3]){popUp = false;LouiseInf.splice(7,1,skema.moduleTimer2[i][1]); LouiseInf.splice(5,1,"0%")}
                                if(this.fraværende[j][3] === MarcusInf[3]){popUp = false;MarcusInf.splice(7,1,skema.moduleTimer2[i][1]);  MarcusInf.splice(5,1,"0%")}
                                if(this.fraværende[j][3] === MarkusInf[3]){popUp = false;MarkusInf.splice(7,1,skema.moduleTimer2[i][1]);  MarkusInf.splice(5,1,"0%")}
                                if(this.fraværende[j][3] === MathiasInf[3]){popUp = false;MathiasInf.splice(7,1,skema.moduleTimer2[i][1]); MathiasInf.splice(5,1,"0%")}
                                if(this.fraværende[j][3] === ThomasInf[3]){popUp = false;ThomasInf.splice(7,1,skema.moduleTimer2[i][1]); ThomasInf.splice(5,1,"0%")}
                            
                            }}
            
                    }}
                     }
}



if(this.person[2] < 1 && this.timer < millis()){
    noFill()
    stroke(0)
    strokeWeight(3)
rect(663.5+122.5*2.5-150,630-25,300,50)
    fill(0)
    noStroke()
    textAlign(CENTER,CENTER)
text("Ingen billeder, giv fuld fravær?",662.5+122.5*2.5,630)

if(mouseX >663.5+122.5*2.5-150 && mouseX < 663.5+122.5*2.5-150+300 && mouseY > 630-25 && mouseY <630+25 && mouseIsPressed && this.additionalTimer < millis()){
    if(this.person[0] === true){
    for(let j = 0; j < this.tilstedeværende.length; j++){
        if(this.person[3] === this.tilstedeværende[j][3]){
            if(this.tilstedeværende[j][3] === DanielInf[3]){popUp = false; DanielInf.splice(7,1,0)}
            if(this.tilstedeværende[j][3] === GustavInf[3]){popUp = false;GustavInf.splice(7,1,0)}
            if(this.tilstedeværende[j][3] === JulieInf[3]){popUp = false;JulieInf.splice(7,1,0)}
            if(this.tilstedeværende[j][3] === LasseInf[3]){popUp = false;LasseInf.splice(7,1,0)}
            if(this.tilstedeværende[j][3] === LouiseInf[3]){popUp = false;LouiseInf.splice(7,1,0)}
            if(this.tilstedeværende[j][3] === MarcusInf[3]){popUp = false;MarcusInf.splice(7,1,0)}
            if(this.tilstedeværende[j][3] === MarkusInf[3]){popUp = false;MarkusInf.splice(7,1,0)}
            if(this.tilstedeværende[j][3] === MathiasInf[3]){popUp = false;MathiasInf.splice(7,1,0)}
            if(this.tilstedeværende[j][3] === ThomasInf[3]){popUp = false;ThomasInf.splice(7,1,0)}

        }}
         }else {
            for(let j = 0; j < this.fraværende.length; j++){
                if(this.person[3] === this.fraværende[j][3]){
                    if(this.fraværende[j][3] === DanielInf[3]){popUp = false; DanielInf.splice(7,1,0)}
                    if(this.fraværende[j][3] === GustavInf[3]){popUp = false;GustavInf.splice(7,1,0)}
                    if(this.fraværende[j][3] === JulieInf[3]){popUp = false;JulieInf.splice(7,1,0)}
                    if(this.fraværende[j][3] === LasseInf[3]){popUp = false;LasseInf.splice(7,1,0)}
                    if(this.fraværende[j][3] === LouiseInf[3]){popUp = false;LouiseInf.splice(7,1,0)}
                    if(this.fraværende[j][3] === MarcusInf[3]){popUp = false;MarcusInf.splice(7,1,0)}
                    if(this.fraværende[j][3] === MarkusInf[3]){popUp = false;MarkusInf.splice(7,1,0)}
                    if(this.fraværende[j][3] === MathiasInf[3]){popUp = false;MathiasInf.splice(7,1,0)}
                    if(this.fraværende[j][3] === ThomasInf[3]){popUp = false;ThomasInf.splice(7,1,0)}
        
                }}
                 }
                
                 
         }
        
        }






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
    


if(this.scroll2 < -250){
    this.scroll2 = -250
}
if(this.scroll2 > 0){
    this.scroll2 = 0
}

if(this.scroll < -250){
    this.scroll = -250
}
if(this.scroll > 0){
    this.scroll = 0
}


if(DanielInf[0]=== false){DanielInf.splice(5,1,"100%")}
if(GustavInf[0]=== false){GustavInf.splice(5,1,"100%")}
if(JulieInf[0]=== false){JulieInf.splice(5,1,"100%")}
if(LasseInf[0]=== false){LasseInf.splice(5,1,"100%")}
if(LouiseInf[0]=== false){LouiseInf.splice(5,1,"100%")}
if(MarcusInf[0]=== false){MarcusInf.splice(5,1,"100%")}
if(MarkusInf[0]=== false){MarkusInf.splice(5,1,"100%")}
if(MathiasInf[0]=== false){MathiasInf.splice(5,1,"100%")}
if(ThomasInf[0]=== false){ThomasInf.splice(5,1,"100%")}


if(DanielInf[0]=== true){DanielInf.splice(5,1,"0%")}
if(GustavInf[0]=== true){GustavInf.splice(5,1,"0%")}
if(JulieInf[0]=== true){JulieInf.splice(5,1,"0%")}
if(LasseInf[0]=== true){LasseInf.splice(5,1,"0%")}
if(LouiseInf[0]=== true){LouiseInf.splice(5,1,"0%")}
if(MarcusInf[0]=== true){MarcusInf.splice(5,1,"0%")}
if(MarkusInf[0]=== true){MarkusInf.splice(5,1,"0%")}
if(MathiasInf[0]=== true){MathiasInf.splice(5,1,"0%")}
if(ThomasInf[0]=== true){ThomasInf.splice(5,1,"0%")}





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


storeItem("DanielTotalFravær",DanielInf[5])
storeItem("GustavTotalFravær",GustavInf[5])
storeItem("JulieTotalFravær",JulieInf[5])
storeItem("LasseTotalFravær",LasseInf[5])
storeItem("MarcusTotalFravær",MarcusInf[5])
storeItem("MarkusTotalFravær",MarkusInf[5])
storeItem("LouiseTotalFravær",LouiseInf[5])
storeItem("MathiasTotalFravær",MathiasInf[5])
storeItem("ThomasTotalFravær",ThomasInf[5])


storeItem("DanielFravær",DanielInf[6])
storeItem("GustavFravær",GustavInf[6])
storeItem("JulieFravær",JulieInf[6])
storeItem("LasseFravær",LasseInf[6])
storeItem("MarcusFravær",MarcusInf[6])
storeItem("MarkusFravær",MarkusInf[6])
storeItem("LouiseFravær",LouiseInf[6])
storeItem("MathiasFravær",MathiasInf[6])
storeItem("ThomasFravær",ThomasInf[6])





}


}


function mouseWheel(event){
    if(mouseX > 640+12.5+315-1.5+10 && mouseX < 640+12.5+315-1.5+10+300-2.5-20 && mouseY > 295 ){
elevLister.scroll += -1*event.delta/3

    }
    if(mouseX > 640+12.5-1.5+10 && mouseX < 640+12.5-1.5+10+300-2.5-20 && mouseY > 295 ){
        elevLister.scroll2 += -1*event.delta/3
            }

}