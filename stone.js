class Stone {
    constructor(x,y,width,height) {
    var options={
      isStatic:false,
      restitution:0,
      friction:1,
      density:1.2
     }
    
      this.body = Bodies.circle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image= loadImage("stone.png");
    }
    display(){
     
      ellipseMode(CENTER);
      fill("brown");
     ellipse(56,45,55,55);
    }
  };