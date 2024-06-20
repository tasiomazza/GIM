function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)

	
	translate (width/2, height/2)
	
	line(-200, 0, 200, 0)
	line(0, -200, 0, 200)

	noStroke()
	fill(0)

	push()
	
	rotate(TAU /12 * (hour() % 12) + TAU/12 / 60 * minute())
	rect (-15, 25, 30, -160)
	pop()
	

	push()
	rotate(TAU /60 * minute())
	rect (-10, 25, 20, -230)
	pop()
	
	const m = (new Date()) .getMilliseconds() / 1000 * TAU / 60
	fill(255,0,0)
	push()
	rotate(TAU /60 * second() + m ) 
	rect (-5, 25, 10, -300)

	fill(255)
	circle (0,0, 60)


}