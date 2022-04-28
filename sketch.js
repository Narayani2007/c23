//TO CREATE A PHYSICS ENGINE --> ENGINE, WORLD, BODIES
const Engine = Matter.Engine //name spacing // Matter.Engine.create() --> Engine.create()
const World = Matter.World 
const Bodies = Matter.Bodies 
var engine 
var world
var ball 
var box 
var ground, groundOptions
var ball1
var ball2

var box1
var box2

/*to display the object from a class outside the setup
1) create a variable for the object --> ball1

2) to mention that ball1 belongs to BallClass inside the setup--> objectName = new ClassName()
ball1 = new BallClass

3) call the display function inside the function draw

*/

function setup() {
  createCanvas(500,500);
 

  //To create a physics engine inside a variable called 'engine' --> Engine.create()
  engine = Engine.create()

  //to create a world for the engine inside a variable called 'world' --> engine.world
  world = engine.world

  //to create a body, --> Bodies.rectangle(x,y,w,h) / Bodies.circle(x,y,r) inside a variable
  ball = Bodies.circle(300,50,25)
  //console.log(ball.constraintImpulse.angle)
  //position of a physics engine body --> var.position.x
World.add(world,ball)

//to create a rectangular body for the ground and add it to the world
groundOptions = {isStatic:true}
ground = Bodies.rectangle(250,350,600,20,groundOptions)
World.add(world,ground)

//ball1 = new BallClass(250,100,25)
//ball2 = new BallClass(400,100,30)

box1 = new BoxClass(250,50,50,50)
box2 = new BoxClass(260,10,50,100)
}

function draw() {

    //update the physics engine
  Engine.update(engine)
  background(0);
// textSize(20)
// fill("yellow")
//   text("Hello", 180,200)
  
//ball1.displayBall()
//ball2.displayBall()

box1.displayBox()
box2.displayBox()

  fill("blue")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,500,20) 


  ellipseMode(RADIUS)
  //ellipse(ball.position.x,ball.position.y,25,25) //ellipse(ball's x position, ball's y position, width, height)


  drawSprites();
}