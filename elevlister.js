class ElevLister{
constructor(){
this.fraværende = [];
this.tilstedeværende = [];
}


show(){

noFill()

rect(width-307.5,7.5,300,height-15)
rect(width-617.5,7.5,300,height-15)

console.log(this.tilstedeværende)








for(let i = 0; i < this.tilstedeværende.length; i++){
    image(this.tilstedeværende[i][0][0],width-300,100*i,90,90)
    text(this.tilstedeværende[i][0][1],125,520+100*i)




}








}




update(){

this.tilstedeværende =[];
this.tilstedeværende.push(sidstSete.Daniel,sidstSete.Gustav,sidstSete.Julie,sidstSete.Lasse,sidstSete.Louise,sidstSete.Marcus,sidstSete.Markus,sidstSete.Mathias,sidstSete.Thomas)

for(let i = 0; i < this.tilstedeværende.length;i++){
if(this.tilstedeværende[i][0] === undefined){
    this.tilstedeværende.splice(i,1)
    i--
}

}



this.show()
}


}