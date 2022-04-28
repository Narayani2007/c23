//to create a class called 'BallClass'--> class ClassName
class BallClass {

    //construct the object
    constructor(x,y,r){      //function setup
        this.ball = Bodies.circle(x,y,r);
        World.add(world,this.ball)
        this.width = r
        this.height = r 
    }


    //display the object        //function draw()
    displayBall(){
        var pos = this.ball.position
        fill ("pink")
    ellipseMode(RADIUS)
  ellipse(pos.x,pos.y,this.width,this.height) //ellipse(ball's x position, ball's y position, width, height)
    }
}