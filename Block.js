class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 255;
  }
  display(){
    if(this.body.speed< 3){
      super.display();
    }
    else{
     push();
     this.visibility = this.visibility - 200;
     tint(255,this.visibility);
     World.remove(world,this.body);
     pop();
    }
   }
  score(){
    if(this.visibility>0 && this.visibility<255){
      score = score + 1;
    }
  }
};
