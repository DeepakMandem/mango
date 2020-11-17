class Mango {

    constructor(x,y,width,height) {
  
    var options = {
        isStatic:true,
        restisution:0,
        friction:1
    }
  
    
  
     this.body = Bodies.circle(x,y,width,height,options);
  
     this.width = width;
  
     this.height = height;
  
     World.add(world, this.body);
  
     this.image= loadImage("mango.png");
  
    }
  
    display(){
  
     var pos =this.body.position;
  
     ellipseMode(CENTER);
  
     fill("brown");
  
     ellipse(56,45,55,55);
  
    }
  
   };
