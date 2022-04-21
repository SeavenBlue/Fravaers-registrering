class Skema{
constructor(){



}


show(){
fill(200,200,255)
    stroke(0)
    rect(640+312.5*2+12.5,10,width-640-312.5*2-20,height-17.5)

    fill(0)
    noStroke()
    textAlign(CENTER,CENTER)
    const ugeDage = ["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"]
    text(ugeDage[0],640+312.5*2+12.5+(width-640-312.5*2-20)/2,30)

}


update(){
    
    this.show()








}




}