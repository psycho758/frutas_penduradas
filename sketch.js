const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var chao;
var corda;
var melancia;
var juntar;
var coelho;
var coelho_img;
var mutebutton;
var melancia_img;
var background_img;
var cortar;


function preload(){
  coelho_img = loadImage("Rabbit-01.png");
  mutebutton = loadImage("mute.png");
  melancia_img = loadImage("melon.png");
  background_img = loadImage("background.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  coelho = createSprite(250,600,100,100);
  coelho.addImage(coelho_img);
  coelho.scale = 0.3;
  cortar = createImg("cut_btn.png");
  cortar.position(220,30);
  cortar.size(50,50);
  cortar.mouseClicked(drop);
 
  // Criar o chao
  chao = new Ground(250,690,600,15);
  corda = new Rope(6,{x:250,y:50});

  var optionsM = {
    density:0.001
  };

  melancia = Bodies.circle(250,50,20,optionsM);
  Composite.add(corda.body,melancia);

  juntar = new Link(corda,melancia);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);

}

function draw() 
{
  image(background_img,width/2,height/2,500,700);
  Engine.update(engine);

  fill("green");

  image(melancia_img,melancia.position.x,melancia.position.y,60,60);
  
  //chao.show();
  corda.show();
  drawSprites();
}

function drop(){
  juntar.dettach();
  juntar = null;
  corda.break();
}


