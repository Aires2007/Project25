const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj; 

function preload(){
backImg = loadImage("Back.jpg")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	paperObj=new paper(300,600,30);
	dustbinObj=new dustbin(1200,650);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
 

  groundObject.display();
  paperObj.display(); 
  dustbinObj.display();
  
}

function keyPressed(){

if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:50, y:-50}); 
}

}
// Ask:
//1) How to display the image