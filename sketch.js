// Declaring Variables
var gameState = 0;
var form,home,game;
var firstName,lastName,weight,age;
var ageGroup,waterPerDay,cupPerDay;
var waterImg,bg;

function preload(){
waterImg = loadImage("water.png");
bg = loadImage("bg.jpg");
}
function setup(){
createCanvas(windowWidth,windowHeight);

form = new Form();
}
function draw(){
background(255);

if(gameState === 0){
  form.display();
}
if(gameState === 1){
  background(bg);
  form.hide();
          //check the age group
          if(age >= 1 && age <= 8){
            ageGroup = 1;
        }
        if(age >= 9 && age <= 15){
            ageGroup = 2;
        }
        if(age >= 16 && age <= 24){
            ageGroup = 3;
        }
        if(age >= 25 && age <= 35){
            ageGroup = 4;
        }
        if(age >= 36){
            ageGroup = 5;
        }

 

        if(ageGroup===1){
          waterPerDay = 1;
          cupPerDay = 4;
          image(waterImg,width/2,height/2-50,50,50);
          image(waterImg,width/2+100,height/2-50,50,50);
          image(waterImg,width/2+200,height/2-50,50,50);
          image(waterImg,width/2+300,height/2-50,50,50);
        }
        if(ageGroup===2){
          waterPerDay = 2.25;
          cupPerDay = 9;
        }
        if(ageGroup===3){
          waterPerDay = 3;
          cupPerDay = 12;
        }
        if(ageGroup===4){
          waterPerDay = 4;
          cupPerDay = 16;
        }
        if(ageGroup===5){
          waterPerDay = 4.5;
          cupPerDay = 18;
        }
        console.log(waterPerDay + " Litres" , cupPerDay);

        push();
        fill(255);
        textAlign(CENTER);
        textSize(100);
        text("Waterly", width/2, 75);
        pop();

        fill(255);
        textSize(25);
        text("Name : " + firstName + " " + lastName , 67,165);
        text("Age : " + age , 67,225);
        text("Water Per Day : " + waterPerDay+ " Litres", 67 , 300);

        writeTime();
}

drawSprites();
}

function writeTime(){
  push();
  var h = hour();
  var m = minute();
  var s = second();
  var time = h + " : " + m + " : " + s;

  fill(0);
  textSize(50);
  text(time,width/2,200);
  pop();
}

