class Tree{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.tree = loadImage('tree.png');
        
    }

    

       

    

    

    display(){
        image(this.tree,600,350);
    }
}          
        