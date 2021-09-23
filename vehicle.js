class Vehicle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.maxSpeed = maxSpeed.value();
    this.maxForce = maxForce.value();
    this.r = 5;
  }

  seek(target) {
    let force = p5.Vector.sub(target, this.position);
    force.sub(this.velocity);
    this.upplyForce(force);
  }

  upplyForce(force) {
    this.acceleration.add(force);
    this.acceleration.limit(this.maxForce);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.setMag(this.maxSpeed);
    this.position.add(this.velocity);
  }

  show() {
    stroke(255);
    line(this.position.x, this.position.y, (this.velocity.x * 10) + this.position.x, (this.velocity.y * 10) + this.position.y);

    // Draw a triangle rotated in the direction of velocity
    let theta = this.velocity.heading() + PI / 2;

    stroke(200);
    strokeWeight(1);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}