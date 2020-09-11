var a,b;
var go1,go2,go3,go4;

function setup(){
 createCanvas(600,600) 
 
 a=createSprite(200,395,70,100);
 b=createSprite(300,200,130,50);  
  
 go1=createSprite(100,100,50,50);
 go2=createSprite(200,100,50,50);
 go3=createSprite(300,100,50,50);
 go4=createSprite(400,100,50,50);
}


function draw(){
  background("white")
  if (isTouching(a,go1)){
    a.shapeColor="blue"
    go1.shapeColor="blue"
}
else{
    a.shapeColor="green"
    go1.shapeColor="green"
}
  
  a.x=mouseX
  a.y=mouseY  
  /*if (b.x-a.x===b.width/2+a.width/2){
      a.shapeColor="red"
      b.shapeColor="red"
  }*/
 
  /*console.log(b.x-a.x)
  console.log(b.width/2+a.width/2)*/
  console.log(b.y-a.y)
  console.log(b.height/2+a.height/2)
  drawSprites();
}

function isTouching(object1,object2){
    if (object1.y-object2.y<=object1.height/2+object2.height/2&&object1.x-object2.x<=object1.width/2+object2.width/2&&object2.x-object1.x<=object1.width/2+object2.width/2&&object2.y-object1.y<=object1.height/2+object2.height/2){
     return true;
    }else{false;}   

}



