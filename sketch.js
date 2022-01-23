
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var form;


function preload()
{
	
}

function setup() {
	createCanvas(2000,1125);


	form = new Form()


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  form.display()

 

  
  drawSprites();
 
}



