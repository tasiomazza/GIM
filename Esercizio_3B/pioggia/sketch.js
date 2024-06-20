function setup() {
	createCanvas(windowWidth, windowHeight)
   }
   
   function windowResized() {
   resizeCanvas(windowWidth, windowHeight)
   }

   
   
   function draw() {
   background(0)
   stroke(255)
   


   for (let i = 0; i<200; i ++){
	let lunghezza = random(18, 115)

	 let gocciaX = random(width)

   let gocciaY=random(-lunghezza, height)
   strokeWeight(random(0.4, 4))

   line(gocciaX,gocciaY, gocciaX, gocciaY + lunghezza)
   }
   
	if (random(100) < 0.5)
	{ background(255) }
   }
   