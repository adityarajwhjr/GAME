var gameState = "play"
var aircraft, aircraftImage, ufo,ufoImage,bground,bgroundImage,ufoGroup,fire,fireImage,survivalTime,missile,missileImage;
var score=0;

function preload()
{
 bgroundImage = loadImage("space.png");
  aircraftImage = loadImage("ship05.png");
  ufoImage = loadImage("download (1).png");
  fireImage = loadImage("f.png");
  missileImage=loadImage("jg.png");
  expeImage=loadImage("expe.png");
  
}

function setup() 
{
  createCanvas(600,600);
  bground = createSprite(200,200);
  bground.addImage(bgroundImage);
  bground.velocityX = -5;
  bground.scale = 2.3;
  
  aircraft = createSprite(50,200,10,10);
  aircraft.addImage(aircraftImage);
  aircraft.scale=0.3;
  
  ufoGroup = new Group () ;
}

  function draw() 
  {
     if(gameState==="play")
       {
         createUfo ();

    if(keyWentDown("space"))
           {
             createMissile ();
           }
if(keyWentDown("left"))
  {
    createMissile ();
  }
         
         if(keyWentDown("right"))
  {
    createMissile ();
  }

    if(keyDown("up"))
      {
        aircraft.y = aircraft.y-3;
      }

    if(keyDown("down"))
      {
        aircraft.y = aircraft.y+3;
      }
          survivalTime =        Math.ceil(frameCount/frameRate())

              if(ufoGroup.isTouching(missile))
           {
            score=score+1;
             ufoGroup.destroyEach();
                     //ufoGroup.addImage("collided",expeImage);

           }
           drawSprites();
         
       }
 if(aircraft.isTouching(ufoGroup))
      {
        aircraft.addImage(fireImage);
        gameState="end";

      }
 else if(gameState==="end")
       {
         bground.velocityX = 0;
         textSize(25);
         stroke("red");
         text("GAME OVER",200,200);
       }

 if(bground.x<0)
     {
       bground.x = bground.width/2;
     }


    textSize(25); 
    text("Survival Time:"+survivalTime,100,50);
text("KILLS : "+score,100,80);


  }

  function createUfo ()
  {
    if(World.frameCount%200===0)
      {

        ufo = createSprite(500,Math.round(random(120,400)),10,10);
        ufo.addImage(ufoImage);
        ufo.velocityX = -7;
        ufo.lifetime = 800;
        ufoGroup.add(ufo);
        ufo.scale=0.2;
      }
  }

  function createMissile ()
  {
    missile=createSprite(20,20,10,10);
    missile.velocityX=5;
    missile.x=aircraft.x+20;
    missile.y=aircraft.y+17;
    missile.addImage("gg",missileImage);
    missile.scale=0.1;
  }

