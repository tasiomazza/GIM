function setup() {
	createCanvas(windowWidth, windowHeight)
  }
  
  function windowResized() {
	  resizeCanvas(windowWidth, windowHeight)
	}
	
	function draw() {
		background(0)
		
		// centro del clock
		translate(width /2, height /2)
		
		//quadrato
		let squareSize = min(width,height)* 0.9

		noFill()
		stroke(255, 50)
		rectMode(CENTER)
		rect(0, 0,squareSize,squareSize)
  


	// avere l'ora
	let hours =hour();
	let minutes =minute();
	let seconds =second();
  

	let secondPos=map(seconds,0, 60, -squareSize / 2,squareSize /2)
	let minutePos=map(minutes, 0,60,squareSize / 2, -squareSize /2)
  

	// mappare le ore x la diagonale
	let hourX=map(hours% 12, 0,12, -squareSize / 2, squareSize/ 2)
	let hourY=map(hours% 12, 0, 12, squareSize /2, -squareSize/ 2)


	
	strokeWeight(4);
  


	// segundos
	stroke(255, 0,0);
	line(secondPos, -squareSize /2,secondPos, squareSize / 2)
  


	// minutos
	stroke(0,255,0);
	line(-squareSize / 2,minutePos,squareSize / 2,minutePos)
  


	// horas
	stroke(0,0, 255);
	line(-squareSize /2, squareSize/ 2,hourX,hourY); 





  }
  
