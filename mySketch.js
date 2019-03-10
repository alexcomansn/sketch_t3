var particles = [];

const s = 300;
const size = 200;

function setup() {
	createCanvas(800, 800, WEBGL);
	angleMode(DEGREES);
	colorMode(255, 255, 255, 100);
	rectMode(CENTER);
	for (let j = 0; j < 10; j++) {
		for (let i = 0; i < 360; i += 15) {
			particles.push(new particle(cos(i) * (s - j * 10), sin(i) * (s - j * 10), size));
		}
	}
}

function draw() {
	background(0);

	push();
	for (let i = 0; i < particles.length; i++) {
		particles[i].display();
	}
	fill(0);
	stroke(255);
	sphere(150);
	pop();
}