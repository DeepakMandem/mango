var stone;
var boy;
var mango;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constriant;

function preload()
{
	boy = loadImage(boy.png);
}

function setup() {
	createCanvas(800, 700);
	boy = createSprite(170,305,50,50);
	stone = new Stone(150, 305, 40, 40);
	tree = new Tree(150, 305, 40, 40);
	ground = new Ground(600,height,800,20);
	
	mango1 = new Mango(160,250,40,40);
	mango2 = new Mango(140,290,40,40);
	mango3 = new Mango(170,270,40,40);
	mango4 = new Mango(165,290,40,40);
	mango5 = new Mango(155,290,40,40);
	mango6 = new Mango(150,290,40,40);
	
	sling = new Sling(stone.body,{x:150,y:305});

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  detectcollision();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){

    if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body, {x:150,y:305})
		slingObject.attach(stoneObj.body);

    }

}
function detectcollision(stone,mango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position


var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if(distance<-lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false);
}
}

