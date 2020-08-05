const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrella,drops;
var matter,bg;


function preload(){
    umbrella=loadImage("sprites/boy.jpeg");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
  
    drops = newDrops();
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    
        noStroke();
       // textSize(35)
        fill("black")
        //text("Score  " + score, width-300, 50)
       
    }
    Engine.update(engine);
    drops.display();
    umbrella.display();


    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=0600 && hour<=1900){
            bg = "sprites/bg1.png";
        }
        else{
            bg = "sprites/bg2.jpg";
        }
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    }
    }   

