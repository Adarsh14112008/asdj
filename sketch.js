var backgroundI,superheroI,monsterI,superhero,ground,Rope;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload() {
//preload the images here
backgroundI=loadImage("GamingBackground.png");

monsterI=loadImage("Monster-01.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
	world = engine.world;
  superhero=new Superhero(200,200,200,100);
  ground=new Ground(400,600,1000,10)
  Rope=new rope(superhero.body,{x:200,y:100})
}

function draw() {
  background(backgroundI);
  superhero.display()
  ground.display()

}
function mouseDragged(){
  
      Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
  
}

