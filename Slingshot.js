class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    
    attach(bodyA){
        this.sling.bodyA = bodyA;
    }
    display(){
      if(this.sling.bodyA != null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
            
          stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            
        pop();
    }}
}