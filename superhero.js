  
        
  class Superhero {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("superhero-01.png")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      imageMode(CENTER);
      fill(133,209,242);
      
      rect(pos.x, pos.y, this.width, this.height);
      image(this.image, pos.x, pos.y, this.width, this.height);
     
    }
  }