
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1, paper1,ground1;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paper1=new paper(200,450,70);
	ground1=new ground(width/2,670,width,20);
	dustbin1=new dustbin(1200,650);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background(230);
 
  paper1.display();
  ground1.display();
  dustbin1.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});
  	}
}