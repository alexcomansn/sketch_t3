class particle {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;

    this.r = 0;
  }

  display() {
    this.r+= 0.5;
    push();
    translate(this.x, this.y);
    rotate(this.r);
    stroke(255);
    noFill();
    box( this.s);
    pop();
  }
}