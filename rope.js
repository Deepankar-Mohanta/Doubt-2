class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX, y:this.offsetY},
        
        //stiffness:0.7,
      
        }
    this.chain1=Constraint.create(options);
    World.add(world, this.chain1);
    }
    display(){
        var pointa =this.chain1.bodyA.position;
        var pointb= this.chain1.bodyB.position;

        strokeWeight(10);
        line(pointa.x, pointa.y, pointb.x, pointb.y);

    }
}