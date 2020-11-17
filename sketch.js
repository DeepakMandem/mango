var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	bobObject1 = new Bob(500,600,50,50);
	bobObject2 = new Bob(550,600,50,50);
	bobObject3 = new Bob(600,600,50,50);
	bobObject4 = new Bob(650,600,50,50);
	bobObject5 = new Bob(700,600,50,50);
	
	rope1 = new Rope(bobObject1.body,roof.body);
	rope2 = new Rope(bobObject2.body,roof.body);
	rope3 = new Rope(bobObject3.body,roof.body);
	rope4 = new Rope(bobObject4.body,roof.body);
	rope5 = new Rope(bobObject5.body,roof.body);

	roof = new Roof(500,900,200,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Jump();
  drawSprites();
 
}

function Jump(){
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85});
	
	}
	}

