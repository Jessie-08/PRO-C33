const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
  
var engine,world;
  var snow = [];

 var audio = new Audio('jingle-bells-11295.mp3');
 audio.play();
 audio.loop = true;

function preload(){
bg = loadImage("bg.jpeg");
goof = loadImage("gf.png");
jumping_mickey = loadAnimation("m1.png","m2.png");
sman = loadImage("snowman.png");
}

function setup() {
  createCanvas(1365,655);
  engine = Engine.create();
  world = engine.world;
  
 snowman = createSprite(850,400,10,10);
 snowman.addImage(sman);
 snowman.scale = 0.35;

mic = createSprite(0,400,10,10);
mic.addAnimation("jumping",jumping_mickey);
mic.scale = 0.85;
mic.velocityX = 7;

boy = createSprite(1365,500,5,5);
 boy.addImage(goof);
 boy.scale = 0.5;
 boy.velocityX = -7;
}

function draw() {
background(bg);  

if(frameCount%10===0){
    snow.push(new Snowf(random(0,1365),0,random(20,80)));
  }
  for (var s = 1; s < snow.length; s++) {
  snow[s].display();
  }

  if(boy.x===0)
  {
    boy.x = 1365;
  }

  if(mic.x===1365)
  {
    mic.x = 0;
  }

  snowman.display();
boy.display();
mic.display();
Engine.update(engine);

drawSprites();
}