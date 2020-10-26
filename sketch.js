const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine,world, ground

var object, ball

function setup() {
  createCanvas(400,400);

  engine=Engine.create()
  world=engine.world

  var object_options={
    isStatic:true
  }
var ball_options = {
  restitution:1
}

  ground=Bodies.rectangle(200,390,400,20,object_options)
  World.add(world,ground)

  ball = Bodies.circle(200,200,20,ball_options)
  World.add(world,ball)

  //console.log(object.position.x)
  //console.log(object.position.y)
  
}

function draw() {
  background(0);  
  Engine.update(engine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
}