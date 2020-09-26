var helicopterIMG, helicopterSprite, packageSprite, packageIMG, wall1, wall_1, wall2, wall_2, wall3, wall_3;
var packageBody, ground;
var boxIsMoving;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    helicopterIMG = loadImage("helicopter.png")
    packageIMG = loadImage("package.png")
}

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);


    packageSprite = createSprite(width / 2, 80, 10, 10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale = 0.2

    helicopterSprite = createSprite(width / 2, 200, 10, 10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale = 0.6

    groundSprite = createSprite(width / 2, height - 35, width, 10);
    groundSprite.shapeColor = color(255)


    engine = Engine.create();
    world = engine.world;
    packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0, isStatic: true });
    World.add(world, packageBody);

    //red walls
    wall1 = createSprite(290, groundSprite.y - groundSprite.height / 2 - 50, 20, 100);
    wall1.shapeColor = "red";
    wall_1 = Bodies.rectangle(290, groundSprite.y - groundSprite.height / 2 - 50, 20, 100, { isStatic: true });
    World.add(world, wall_1);

    wall2 = createSprite(400, groundSprite.y + groundSprite.height / 2 - 10, 200, 20);
    wall2.shapeColor = "red";
    wall_2 = Bodies.rectangle(400, groundSprite.y - groundSprite.height / 2 - 10, 200, 20, { isStatic: true });
    World.add(world, wall_2);

    wall3 = createSprite(510, groundSprite.y - groundSprite.height / 2 - 50, 20, 100);
    wall3.shapeColor = "red";
    wall_3 = Bodies.rectangle(510, groundSprite.y - groundSprite.height / 2 - 50, 20, 100, { isStatic: true });
    World.add(world, wall_3);


    //Create a Ground
    ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
    World.add(world, ground);


    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);
    packageSprite.x = packageBody.position.x
    packageSprite.y = packageBody.position.y

    wall1.x = wall_1.position.x;
    wall1.y = wall_1.position.y;

    wall2.x = wall_2.position.x;
    wall2.y = wall_2.position.y;

    wall3.x = wall_3.position.x;
    wall3.y = wall_3.position.y;
    /*packageSprite.debug = true;
    wall1.debug = true;
    wall2.debug = true;
    wall3.debug = true;*/

    packageSprite.collide(wall1);
    packageSprite.collide(wall2)
    drawSprites();
    keyPressed();

}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody, false);

    }
}