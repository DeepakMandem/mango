class Bob {

    constructor(x,y,width,height) {
  
    
  
    
  
     this.body = Bodies.circle(x,y,width,height);
  
     this.width = width;
  
     this.height = height;
  
     World.add(world, this.body);
  
     this.image= loadImage("paper.png");
  
    }
  
    display(){
  
     var pos =this.body.position;
  
     ellipseMode(CENTER);
  
     fill("brown");
  
     ellipse(56,45,55,55);
  
    }
  
   };
