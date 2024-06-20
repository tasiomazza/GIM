let fiocchi = []

function setup(){createCanvas(windowWidth,windowHeight)}

function draw(){
background(0) 

if(random()<0.66){fiocchi.push(new Fiocco())}

for(let fiocco of fiocchi){fiocco.update();fiocco.display()}}


class Fiocco{constructor(){
this.x=random(width)
this.y= random(-50,-10)
this. diametro=random(2,12)
this.velocita=random(1,4.2)}

update(){this .y+=this.velocita}

display(){noStroke ();fill(255)
ellipse(this.x,this.y,this.diametro)}

}
