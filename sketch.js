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

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
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
}

function draw() 
{
  background(200);
  Engine.update(engine);

  fill("green");

  ellipse(melancia.position.x,melancia.position.y,20);
   
  chao.show();
  corda.show();
}




