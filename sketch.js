
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	tree = new Tree(1200,400,800,800)
	

	ground = new Ground(800,780,1600,20)


	boy = new Boy(300,695,200,300)


	mango1 = new Mango(1400,300,50,50)

	mango2 = new Mango(1300,200,50,50)

	mango3 = new Mango(1000,250,50,50)

	mango4 = new Mango(1100,150,50,50)

	mango5 = new Mango(1200,200,50,50)

	mango6 = new Mango(1400,200,50,50)

	mango7 = new Mango(1250,100,50,50)	

	mango8 = new Mango(1150,250,50,50)

	mango9 = new Mango(1050,350,50,50)

	mango10 = new Mango(1500,250,50,50)

	mango11 = new Mango(1250,280,50,50)

	mango12 = new Mango(900,250,50,50)


	stoneObj = new Rock(245,630,50,50)

	launcher = new Launcher(stoneObj.body,{x: 245,y: 630})
	

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(225);

	textSize(20)
	text("Press Space to get a second chance to play!!",25,75)
	
	launcher.display();

	tree.display();

	boy.display();

	stoneObj.display();

	ground.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();

	detctcolision(mango1,stoneObj)
	detctcolision(mango2,stoneObj)
	detctcolision(mango3,stoneObj)
	detctcolision(mango4,stoneObj)
	detctcolision(mango5,stoneObj)
	detctcolision(mango6,stoneObj)
	detctcolision(mango7,stoneObj)
	detctcolision(mango8,stoneObj)
	detctcolision(mango9,stoneObj)
	detctcolision(mango10,stoneObj)
	detctcolision(mango11,stoneObj)
	detctcolision(mango12,stoneObj)

	drawSprites();

 
}

function mouseDragged()  {
	Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY})


}

function mouseReleased()  {
	launcher.fly()

}

function detctcolision(lmango,lstone)  {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.radius+lstone.radius)  {
		Matter.Body.setStatic(lmango.body,false)


	}

}

function keyPressed()  {
	if(keyCode===32)
		Matter.Body.setPosition(stoneObj.body,{x:245, y:630})
		launcher.attach(stoneObj.body)

}