const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, back;
var box1;

function preload() {

    back = loadImage("bg.png")

}

function setup() {
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600, 780, 50, 50);
    box2 = new Box(800, 780, 50, 50);
    ground = new Ground(600, height, 1200, 20)
    pig = new Pig(700, 780)
    pig2 = new Pig(700, 680)
    log = new Log(700, 730, 245, PI)
    box3 = new Box(600, 680, 50, 50);
    box4 = new Box(800, 680, 50, 50);
    box5 = new Box(700, 580, 50, 50)
    log2 = new Log(700, 630, 245, PI)
    log3 = new Log(750, 580, 100, PI / 3)
    log4 = new Log(650, 570, 100, PI / -3)
    bird = new Bird(100, 100)
}

function draw() {
    background(back);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    bird.body.position.x = mouseX
    bird.body.position.y = mouseY

    console.log(log3.body.friction);


}