var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
    world = engine.world;

	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	
	block1 = Bodies.rectangle(300,620,20,20, {isStatic:true});
	World.add(world, block1);

	block2 = Bodies.rectangle(500,620,20,20, {isStatic:true});
	World.add(world, block2);

	block3 = Bodies.rectangle(390,650,50,20, {isStatic:true});
	World.add(world, block3);

	//Create a Ground
 	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	
	console.log(packageBody,block1);
}


function draw() {
  rectMode(CENTER);
  //Engine.update(engine);
  background(0);

  fill("red");
  stroke("red");
  rect(block1.position.x,block1.position.y,20,100);
  rect(block2.position.x,block2.position.y,20,100);
  rect(block3.position.x,block3.position.y,200,20);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);

  }
}



