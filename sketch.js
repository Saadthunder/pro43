var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,290);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130,20,20);
  iss.addImage(issimg);
  iss.scale = 0.25;
  
}

function draw() {
  background(bg);
 // iss.debug=true;
  iss.setCollider("circle",0,0,50);

  //spacecraft.debug=true;

  if(!hasDocked){

     spacecraft.x = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
    spacecraft.addImage(scimg1);
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg);
      spacecraft.y = spacecraft.y +2;
  }
}

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= iss.x){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }

  

   if(spacecraft.x <= (iss.x-200)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking UnSuccessful!", 200, 300);
   }

 
  drawSprites();
}

