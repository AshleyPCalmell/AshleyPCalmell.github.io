var ballx= 300;
var bally= 300;
var ballSize= 70;
var score=0;
var gameState= "L1";

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('https://ashleypcalmell.github.io/images/1stfairy.png');
   img2= loadImage('https://ashleypcalmell.github.io/images/second2fairy.png');
   img3= loadImage('https://ashleypcalmell.github.io/images/3rdfairy.png');
    img4= loadImage('https://ashleypcalmell.github.io/images/yellow.png');
    bg2 = loadImage('https://ashleypcalmell.github.io/images/background.jpg');
}


function setup() {
  bg = loadImage('https://ashleypcalmell.github.io/images/fairybackground1.jpg');
createCanvas(600,600);
 textAlign(CENTER);
 textSize(20);
 
}//end setup


function draw() {
   background(bg);

if(gameState== "L1"){
levelOne();
}
if(gameState=="L2"){
  levelTwo();
}

if(gameState=="L3"){
  levelThree();
}
if(gameState=="L4"){
  levelFour();
}
fill('rgb(255,191,246)');
text(("Fairies caught: " + score), width/2, 40);
}//end draw



//START LEVEL ONE
function levelOne(){
  text("level 1", width/2, height-20);  
  var distToBall= dist(ballx,bally,mouseX,mouseY);
  if (distToBall<ballSize/2){
  
 ballx=random(width);
 bally= random(height);
 score =score +1;
  }//if distToBall
  
 if(score>=8) {
 gameState= "L2";
 }
  
  image(img, ballx, bally,ballSize,ballSize);
    line(ballx+ballSize/2,bally+ballSize/2,mouseX,mouseY);
}//END LEVEL ONE


//START LEVEL TWO 
function levelTwo(){
  text("level 2", width/2, height-20);
  
  var distToBall= dist(ballx,bally,mouseX,mouseY);
  if (distToBall<ballSize){
 ballx=random(width);
 bally= random(height);
 score =score +1;
  }//if distToBall
  
 if(score>=20) {
   gameState="L3";
 }
   image(img2, ballx, bally,ballSize,ballSize);
}//END LEVEL TWO

//START LEVEL THREE
function levelThree(){
  // background(bg2);
  text("level 3", width/2, height-20);
  
  var distToBall= dist(ballx,bally,mouseX,mouseY);
  if (distToBall<ballSize/2){
 ballx=random(width);
 bally= random(height);
 score =score +1;
 ballSize=ballSize-1;
  }//if distToBall
  
  if(score>=25) {
  gameState="L4";
 }
    image(img3, ballx, bally,ballSize,ballSize);
  
}//END LEVEL THREE

//LAST LEVEL
 function levelFour(){
   background(bg2);
   text("CATCH YELLOW BEFORE IT DISAPPEARS ", width/2, height-20);
   
   var distToBall= dist(ballx,bally,mouseX,mouseY);
  if (distToBall<ballSize/2){
 ballx=random(width);
 bally= random(height);
 score =score +1;
 ballSize=ballSize-1;
  }//if distToBall
  
   if(score>=25) {
  gameState="L4";
 }
  image(img4, ballx, bally,ballSize,ballSize);
 }
 
 //FINISHED LEVEL 4
