class Snowf{
    constructor(x,y,r) {
      var options = {
        'restitution': 0.4,
        // 'friction': 5,
         'density':1
      }

      this.r=r
      this.body = Bodies.circle(x,y,this.r,options);
      this.image = loadImage("wsnow.png");  
      // this.image.scale = 1.5;   
      // this.snow = [];
      World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       // this.color = color (random(0,255), random(0,255), random(0,255);
        //noStroke();
        //fill(this.color);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
       }
    }
  ;