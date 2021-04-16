class Stone{
    constructor(x,y,radius){
     var options={
        isStatic:false,
        restitution:0,
        friction:1,
        desity:1.2
     }
     this.body = Bodies.circle(x,y,radius)
     this.radius = radius
     this.image = loadImage("image/stone.png")
     World.add(world,this.body);

    } 
    display()
    {
     var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}