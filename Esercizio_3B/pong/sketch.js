
let posizioneX, posizioneY 
let velX, velY

function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX = width/2
	posizioneY = height/2

	velX = random (5, -30)
	velY = random (-25, 7)


}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	
	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width || posizioneX < 0) {
		velX = -velX
	}
	
	if (posizioneY >= height || posizioneY < 0) {
		velY = -velY
	}


	fill (random (256)), random (256), random (256) 
	noStroke ()

	//background(0)
	circle (posizioneX, posizioneY, random (10, 200))

}

