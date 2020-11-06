class Dustbin {
        constructor(x,y,width,height) {
          var options = {
              isStatic: true
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
          this.image = loadImage("dustbingreen.png");
        }
        display(){}
        var pos =this.body.position;
          rectMode(CENTER);
          fill("brown");
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          rect(pos.x, pos.y, this.width, this.height);
        }
      };