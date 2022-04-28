class BoxClass {
   
    constructor(x,y,w,h){
        this.box = Bodies.rectangle(x,y,w,h);
        this.width = w;
        this.height = h;
        World.add(world,this.box);
      

    }

    displayBox(){
    var pos = this.box.position
    var angle = this.box.angle;

    push()
    translate(pos.x,pos.y)
    rotate(angle)    
    fill ("yellow")

    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
    }
}
