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


this.timeSorter;



}

show(){
fill(200,200,255)
rect(7.5,480+10,640-7.5,height-480-17.5)
fill(0)
textAlign(LEFT,CENTER)
textSize(20)
if(this.ShouldShow[0]){
noStroke()
for(let i = 0; i < this.ShouldShow.length; i++){
if(i > 1){image(this.ShouldShow[i][0][0],25+225,500+100*(i-2),90,90);text(this.ShouldShow[i][0][1],125+225,520+100*(i-2))
}else{image(this.ShouldShow[i][0][0],25,500+100*i,90,90);text(this.ShouldShow[i][0][1],125,520+100*i)}

}stroke(0)
}
   
}




update(){
if(labelsToText.length > 0){
    
for(let i = 0; i < labelsToText[labelsToText.length-1].length; i++){
if(labelsToText[labelsToText.length-1][i]){

if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Gustav"){
    this.Gustav.splice(0,this.Gustav.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
GustavInf[2]++ 
if(GustavInf[4] === undefined){GustavInf.push([this.Gustav[0][0]])}else{
GustavInf[4].push(this.Gustav[0][0])}


for(let i = 0; i < 6; i++){
if(i === 0){
if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
    GustavInf.splice(7,1,skema.moduleTimer2[i][1])
    
}}
else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
GustavInf.splice(7,1,skema.moduleTimer2[i][1])

}}
GustavInf[0] = true

}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Thomas"){
    this.Thomas.splice(0,this.Thomas.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
    ThomasInf[2]++ 
    ThomasInf[0] = true
    if(ThomasInf[4] === undefined){ThomasInf.push([this.Thomas[0][0]])}else{
        ThomasInf[4].push(this.Thomas[0][0])}
        for(let i = 0; i < 6; i++){
            if(i === 0){
            if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
                ThomasInf.splice(7,1,skema.moduleTimer2[i][1])
                
            }}
            else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
            ThomasInf.splice(7,1,skema.moduleTimer2[i][1])
            
            }}
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Markus"){
    this.Markus.splice(0,this.Markus.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
    MarkusInf[2]++ 
    MarkusInf[0] = true
    if(MarkusInf[4] === undefined){MarkusInf.push([this.Markus[0][0]])}else{
        MarkusInf[4].push(this.Markus[0][0])}
        for(let i = 0; i < 6; i++){
            if(i === 0){
            if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
                MarkusInf.splice(7,1,skema.moduleTimer2[i][1])
                
            }}
            else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
            MarkusInf.splice(7,1,skema.moduleTimer2[i][1])
            
            }}
}

else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Marcus"){
    this.Marcus.splice(0,this.Marcus.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
    MarcusInf[2]++ 
    MarcusInf[0] = true
    if(MarcusInf[4] === undefined){MarcusInf.push([this.Marcus[0][0]])}else{
        MarcusInf[4].push(this.Marcus[0][0])}
        for(let i = 0; i < 6; i++){
            if(i === 0){
            if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
               MarcusInf.splice(7,1,skema.moduleTimer2[i][1])
                
            }}
            else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
            MarcusInf.splice(7,1,skema.moduleTimer2[i][1])
            
            }}
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Daniel"){
    this.Daniel.splice(0,this.Daniel.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
    DanielInf[2]++ 
    DanielInf[0] = true
    if(DanielInf[4] === undefined){DanielInf.push([this.Daniel[0][0]])}else{
        DanielInf[4].push(this.Daniel[0][0])}
        for(let i = 0; i < 6; i++){
            if(i === 0){
            if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
                DanielInf.splice(7,1,skema.moduleTimer2[i][1])
                
            }}
            else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
            DanielInf.splice(7,1,skema.moduleTimer2[i][1])
            
            }}
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Lasse"){
    this.Lasse.splice(0,this.Lasse.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
    LasseInf[2]++ 
   LasseInf[0] = true
   if(LasseInf[4] === undefined){LasseInf.push([this.Lasse[0][0]])}else{
    LasseInf[4].push(this.Lasse[0][0])}
    for(let i = 0; i < 6; i++){
        if(i === 0){
        if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
            LasseInf.splice(7,1,skema.moduleTimer2[i][1])
            
        }}
        else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
        LasseInf.splice(7,1,skema.moduleTimer2[i][1])
        
        }}
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Mathias"){
    this.Mathias.splice(0,this.Mathias.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
    MathiasInf[2]++ 
    MathiasInf[0] = true
    if(MathiasInf[4] === undefined){MathiasInf.push([this.Mathias[0][0]])}else{
        MathiasInf[4].push(this.Mathias[0][0])}
        for(let i = 0; i < 6; i++){
            if(i === 0){
            if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
                MathiasInf.splice(7,1,skema.moduleTimer2[i][1])
                
            }}
            else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
            MathiasInf.splice(7,1,skema.moduleTimer2[i][1])
            
            }}
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Louise"){
    this.Louise.splice(0,this.Louise.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
    LouiseInf[2]++ 
   LouiseInf[0] = true
   if(LouiseInf[4] === undefined){LouiseInf.push([this.Louise[0][0]])}else{
    LouiseInf[4].push(this.Louise[0][0])}
    for(let i = 0; i < 6; i++){
        if(i === 0){
        if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
            LouiseInf.splice(7,1,skema.moduleTimer2[i][1])
            
        }}
        else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
        LouiseInf.splice(7,1,skema.moduleTimer2[i][1])
        
        }}
}
else if(labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,"") === "Julie"){
    this.Julie.splice(0,this.Julie.length,[labelsToText[labelsToText.length-1][i][1],labelsToText[labelsToText.length-1][i][0].replace(/[^a-zA-Z]/g,""),millis()])
    JulieInf[2]++ 
   JulieInf[0] = true
   if(JulieInf[4] === undefined){JulieInf.push([this.Julie[0][0]])}else{
    JulieInf[4].push(this.Julie[0][0])}
    for(let i = 0; i < 6; i++){
        if(i === 0){
        if(450 < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
            JulieInf.splice(7,1,skema.moduleTimer2[i][1])
            
        }}
        else if(skema.moduleTimer2[i-1][1] < hour()*60+minute() && hour()*60+minute() < skema.moduleTimer2[i][1]){
        JulieInf.splice(7,1,skema.moduleTimer2[i][1])
        
        }}
}


}


}}
labelsToText = []


this.ShouldShow = [];
this.ShouldShow.push(this.Daniel,this.Gustav,this.Julie,this.Lasse,this.Louise,this.Marcus,this.Markus,this.Mathias,this.Thomas)

for(let i = 0; i < this.ShouldShow.length; i++){ 
if(this.ShouldShow[i].length < 1){
    this.ShouldShow.splice(i,1)
    i--
}
}
elever = this.ShouldShow;
if(this.ShouldShow.length > 4){
this.tempArray = []
for(let i = 0; i < this.ShouldShow.length;i++){
this.tempArray.push(this.ShouldShow[i][0][2])

}

this.tempArray = this.tempArray.sort(function(a, b){return b - a})


for(let i = 0; i < this.ShouldShow.length;i++){
if(this.ShouldShow[i][0][2] < this.tempArray[3]){
this.ShouldShow.splice(i,1)
i--

}   
}



}

storeItem("DanielFriModul",DanielInf[7])
storeItem("GustavFriModul",GustavInf[7])
storeItem("JulieFriModul",JulieInf[7])
storeItem("LasseFriModul",LasseInf[7])
storeItem("LouiseFriModul",LouiseInf[7])
storeItem("MarcusFriModul",MarcusInf[7])
storeItem("MarkusFriModul",MarkusInf[7])
storeItem("MathiasFriModul",MathiasInf[7])
storeItem("ThomasFriModul",ThomasInf[7])






this.show()
}







}