// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

// creation of a particle.
  createParticle() {
    noStroke();
    fill(255, 255, 255);
    circle(this.x,this.y,this.r);
  }
// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function setup() {
createCanvas(600, 600);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}

function draw() {
 background(171, 84, 161);
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
  
  //hair long
fill(54, 41, 28)
rect(200, 120, 200, 300, 20, 20, 5);
  //skin
fill(252, 205, 167) 
rect(275, 320, 50, 70, 20);
rect(228, 370, 150, 230, 20);
ellipse(300, 240, 170, 200);
rect(162, 265, 35, 120, 20);
rect(160, 370, 150, 40, 20);
rect(345, 370, 70, 214, 20);
  //hands
rect(180, 205, 10, 40, 20);
rect(193, 205, 10, 40, 20);
rect(150, 237, 60, 40, 20);
  //shirt
  fill(34, 77, 42)
square( 227, 390, 153);
rect(250, 365, 10, 30, 20);
rect(350, 365, 10, 30, 20);
  //jeans
   fill(0,0,0)  
rect(218, 550, 170, 310, 5);
  //eyebrows
  fill(28, 16, 8)
rect(230, 200, 50, 10);
rect(315, 200, 60, 10);
  //bangs
  fill(54, 41, 28)
triangle(210, 240, 320, 120, 206, 125);
triangle(400, 240, 380, 120, 286, 125);
  //eyelashes
  fill(10, 9, 8)
triangle(220, 240, 260, 240, 200, 223);
triangle(400, 225, 360, 240, 356, 265);
  //eyes
  fill(255, 255, 255)
ellipse(250, 246, 65, 50);
ellipse(346, 246, 65, 50);
  fill(41, 99, 30)
circle(250, 240, 40);
circle(346, 240, 40);

}
