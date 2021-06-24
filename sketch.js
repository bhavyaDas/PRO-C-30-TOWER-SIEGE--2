///////////////////////////////////Code Started///////////////////////////

//Created const and set the value
const Engine = Matter.Engine;

//Created const and set the value
const World = Matter.World;

//Created const and set the value
const Bodies = Matter.Bodies;

//Created const and set the value
const Constraint = Matter.Constraint;

//Created variables
var engine, world;

//Created variables
var holder, ball, ground;

//Created variables
var stand1, stand2;

//Created variable
var ball;

//Created variable
var slingShot;

//Created variable
var polygon_img;

//Image-storage function
function preload() {

  //Loaded img inside the variable
  polygon_img = loadImage("polygon.png");

}

//Pre-defined function:- function setup
function setup() {

  //Created canvas
  createCanvas(900, 400);

  //Created Engine inside engine
  engine = Engine.create();

  //Added world to engine
  world = engine.world;

  //Run the engine
  Engine.run(engine);

  //Created an object from class
  ground = new Ground();

  //Created an object from class
  stand1 = new Stand(390, 300, 250, 10);

  //Created an object from class
  stand2 = new Stand(700, 200, 200, 10);

  //Created an object from class
  block1 = new Block(300, 275, 30, 40);

  //Created an object from class
  block2 = new Block(330, 275, 30, 40);

  //Created an object from class
  block3 = new Block(360, 275, 30, 40);

  //Created an object from class
  block4 = new Block(390, 275, 30, 40);

  //Created an object from class
  block5 = new Block(420, 275, 30, 40);

  //Created an object from class
  block6 = new Block(450, 275, 30, 40);

  //Created an object from class
  block7 = new Block(480, 275, 30, 40);

  //Created an object from class
  block8 = new Block(330, 235, 30, 40);

  //Created an object from class
  block9 = new Block(360, 235, 30, 40);

  //Created an object from class
  block10 = new Block(390, 235, 30, 40);

  //Created an object from class
  block11 = new Block(420, 235, 30, 40);

  //Created an object from class
  block12 = new Block(450, 235, 30, 40);

  //Created an object from class
  block13 = new Block(360, 195, 30, 40);

  //Created an object from class
  block14 = new Block(390, 195, 30, 40);

  //Created an object from class
  block15 = new Block(420, 195, 30, 40);

  //Created an object from class
  block16 = new Block(390, 155, 30, 40);

  //Created an object from class
  blocks1 = new Block(640, 175, 30, 40);

  //Created an object from class
  blocks2 = new Block(670, 175, 30, 40);

  //Created an object from class
  blocks3 = new Block(700, 175, 30, 40);

  //Created an object from class
  blocks4 = new Block(730, 175, 30, 40);

  //Created an object from class
  blocks5 = new Block(760, 175, 30, 40);

  //Created an object from class
  blocks6 = new Block(670, 135, 30, 40);

  //Created an object from class
  blocks7 = new Block(700, 135, 30, 40);

  //Created an object from class
  blocks8 = new Block(730, 135, 30, 40);

  //Created an object from class
  blocks9 = new Block(700, 95, 30, 40);

  //Polygon holder with slings
  polygon = Bodies.circle(50, 200, 20);

  //Added polygon to World
  World.add(world, polygon);

  //Created an object from class
  slingShot = new Slingshot(this.polygon, { x: 100, y: 200 });

}

//Pre-defined function:- draw function (repeat)
function draw() {

  //Added background color through rgb
  background(56, 44, 44);

  //Set text size to 20 pixels
  textSize(20);

  //Fill the text  with "pink"
  fill("pink");

  //Set text with coordinates
  text("Drag the polygon to destroy the blocks", 300, 30);

  //Set text size to 10 pixels
  textSize(10);

  //Set text with coordinates
  text("Press Space to get a second Chance to Play!!", 650, 350);

  //Displayed the object
  ground.display();

  //Displayed the object
  stand1.display();

  //Displayed the object
  stand2.display();

  //Displayed the object
  block1.display();

  //Displayed the object
  block2.display();

  //Displayed the object
  block3.display();

  //Displayed the object
  block4.display();

  //Displayed the object
  block5.display();

  //Displayed the object
  block6.display();

  //Displayed the object
  block7.display();

  //Displayed the object
  block8.display();

  //Displayed the object
  block9.display();

  //Displayed the object
  block10.display();

  //Displayed the object
  block11.display();

  //Displayed the object
  block12.display();

  //Displayed the object
  block13.display();

  //Displayed the object
  block14.display();

  //Displayed the object
  block15.display();

  //Displayed the object
  block16.display();

  //Displayed the object
  blocks1.display();

  //Displayed the object
  blocks2.display();

  //Displayed the object
  blocks3.display();

  //Displayed the object
  blocks4.display();

  //Displayed the object
  blocks5.display();

  //Displayed the object
  blocks6.display();

  //Displayed the object
  blocks7.display();

  //Displayed the object
  blocks8.display();

  //Displayed the object
  blocks9.display();

  //Set image Mode as CENTER
  imageMode(CENTER)

  //Displayed object polygon with image function
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  //Displayed the object
  slingShot.display();

}

//Pre-defined function :- mouseDragged
function mouseDragged() {

  //Set the position of matter body as dragged the body mentioned
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });

}

//Pre-defined function :- mouseReleased
function mouseReleased() {

  //Added function fly of slingshot object
  slingShot.fly();

}

//Pre-defined function :- keyPressed
function keyPressed() {

  //Put a condition if keyCode === 32 (space)
  if (keyCode === 32) {

    //Attached polygon with slingShot
    slingShot.attach(this.polygon);

  }

}

///////////////////////////////////Code Ended///////////////////////////