var moving_rect, fixed_rect, car, wall, yeet, edges

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  moving_rect = createSprite(400, 200, 80, 30)
  moving_rect.shapeColor = 'green'
  fixed_rect = createSprite(200, 200, 50, 80)
  fixed_rect.shapeColor = 'lightblue'
  car = createSprite(100, 100, 50, 30)
  car.shapeColor = 'brown'
  wall = createSprite(150, 250, 60, 70)
  wall.shapeColor = 'blue'
  yeet = createSprite(320, 300, 80, 80)
  yeet.shapeColor = 'red'
  
  edges = createEdgeSprites()

//  y.debug = true
  
car.velocityX = 3
car.velocityY = 9


wall.velocityX = 3
wall.velocityY = -3

yeet.velocityX = -2
yeet.velocityY = 6


//  x.debug = true

}


function draw() {
  background(0,0,0);  
  
  moving_rect.x = World.mouseX
  moving_rect.y = World.mouseY

  car.bounceOff(edges[1])
  
 // wall.bounceOff(edges[4])
  
  //yeet.bounceOff(edges[1])
 
  if(isTouching(moving_rect, fixed_rect)){
   
    console.log('collided')
    fixed_rect.shapeColor = 'red'
    moving_rect.shapeColor = 'red'   

  }
  else{
    
    moving_rect.shapeColor = 'green'
    fixed_rect.shapeColor = 'lightblue'
    
  }

  if(isTouching(moving_rect, car)){
   
    console.log('collided')
    car.shapeColor = 'red'
    moving_rect.shapeColor = 'red'   

  }
  else{
    
    moving_rect.shapeColor = 'green'
    car.shapeColor = 'brown'
    
  }

  if(isTouching(moving_rect, yeet)){
   
    console.log('collided')
    yeet.shapeColor = 'red'
    moving_rect.shapeColor = 'red'   

  }
  else{
    
    moving_rect.shapeColor = 'green'
    yeet.shapeColor = 'purple'
    
  }

  if(isTouching(moving_rect, wall)){
   
    console.log('collided')
    wall.shapeColor = 'red'
    moving_rect.shapeColor = 'red'   

  }
  else{
    
    moving_rect.shapeColor = 'green'
    wall.shapeColor = 'blue'
    
  }


  drawSprites();
}
