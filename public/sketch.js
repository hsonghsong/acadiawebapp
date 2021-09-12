let s1, s2;
let gravity = 9.0;
let mass = 2.0;
var time = 0;

function setup() {
  createCanvas(window.windowWidth, window.windowHeight);
  background(210, 250, 252);
  text("D U S T   S T O R M", 50, 30)

  fill(255, 126);
  // Inputs: x, y, mass, gravity
  s1 = new Spring2D(0.0, width / 2, mass, gravity);
  s2 = new Spring2D(0.0, width / 2, mass, gravity);
  s3 = new Spring2D(0.0, width / 2, mass, gravity);
  s4 = new Spring2D(0.0, width / 2, mass, gravity);
  s5 = new Spring2D(0.0, width / 2, mass, gravity);
  s6 = new Spring2D(0.0, width / 2, mass, gravity);


}

function draw() {

  let speed = abs(winMouseX - pwinMouseX);
  t = sin(time + 0.01);

  if (speed > 30) {background(0, 30);}
  else {background(242, 233, 228, 3);}

  var face1 = new skepticalFace(mouseX, mouseY-20, 50);
  face1.show();

  s1.update(mouseX, mouseY);
  s1.display(mouseX, mouseY);
  s2.update(s1.x, s1.y);
  s2.display(s1.x, s1.y);
  s3.update(s2.x, s2.y);
  s3.display(s2.x, s2.y);
  s4.update(s3.x, s3.y);
  s4.display(s3.x, s3.y);
  s5.update(s4.x, s4.y);
  s5.display(s4.x, s4.y);
  s6.update(s5.x, s5.y);
  s6.display(s5.x, s5.y);


}

function skepticalFace(x, y, dia) {
  this.posX = x;
  this.posY = y;
  this.diameter = dia;

  this.show = function() {
    strokeWeight(20);
    //line(this.posX, this.posY+20, windowWidth, this.posX-40);
    fill(0);
  }
}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 0; // The x- and y-axis velocities
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 30;
  this.stiffness = 0.2;
  this.damping = 0.7;

  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    //stroke(255);
    line(this.x, this.y, nx, ny);
  }
}

function mouseClicked(){
  background(210, 250, 252);
  text("D U S T   S T O R M", 50, 30)

}


function windowResized() {
  resizeCanvas(window.windowWidth, window.windowHeight);
  resetCanvas();
}
