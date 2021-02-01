var bottom, side1, side2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);

	bottomSprite = createSprite(1200, height-70, 200, 20);
	bottomSprite.shapeColor = "yellow"

	side1Sprite = createSprite(width-190, height-110, 20, 100);
	side1Sprite.shapeColor = "yellow"

	side2Sprite = createSprite(width-410, height-110, 20, 100);
	side2Sprite.shapeColor = "yellow"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 400, 25);

	ground = new Ground(1500/2, 450, 1500, 20);

	bottom = Bodies.rectangle(1200, 610, 200, 20, {isStatic:true});
	World.add(world, bottom);

	side1 = Bodies.rectangle(width-190, height-110, 20, 100, {isStatic:true});
	World.add(world, side1);

	side2 = Bodies.rectangle(width-410, height-110, 20, 100, {isStatic:true});
	World.add(world, side2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:170, y:-100});
	}
}

