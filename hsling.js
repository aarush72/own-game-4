class HSling{
    constructor(bodyA,pB){
        var options = {
            bodyA: bodyA,
            pointB: pB,
            stiffness: 0.0024,
            length: 20
        }
        this.sling = Constraint.create(options);
        this.pB = pB;
        World.add(world, this.sling);

    }
     
    

   display(){
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pB;  
        stroke("orange")
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
      
}


}