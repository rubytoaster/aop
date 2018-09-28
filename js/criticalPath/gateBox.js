function GateBox(sketch, posX, posY, description, flow, afterBoxList)
{
  this.hasPower = false;
    
  this.posX = posX;
  this.posY = posY;

  this.description = description;
  this.flow = flow;

  this.h = 60;
  this.w = 60;
  var roundedCorner = 10;
  this.beakerImgOff = sketch.loadImage("images/game/criticalPath/beakerOff.png");
  this.beakerImg1 = sketch.loadImage("images/game/criticalPath/beaker1.png");
  this.beakerImg2 = sketch.loadImage("images/game/criticalPath/beaker2.png");
  this.beakerImg3 = sketch.loadImage("images/game/criticalPath/beaker3.png");
  this.beakerList = [];
  this.beakerList.push(this.beakerImg1);
  this.beakerList.push(this.beakerImg2);
  this.beakerList.push(this.beakerImg3);
  
  this.animIndex = 0;

  this.update = function()
  {
    sketch.textSize(12);
    sketch.text("Flow: " + this.flow, this.posX + 5, this.posY + this.h-4);
    //sketch.rect(this.posX, this.posY, this.w, this.h, roundedCorner);
    
    if(sketch.frameCount % 5 == 0)
    {
      this.animIndex++;
      
      if(this.animIndex > 2)
        this.animIndex = 0;
    }
    
    if(this.hasPower)
    {
      sketch.image(this.beakerList[this.animIndex], this.posX + 14, this.posY, 25, 45);
    }
    else
      sketch.image(this.beakerImgOff, this.posX + 14, this.posY, 25, 45);

    if(typeof afterBoxList != 'undefined')
    if($.isArray(afterBoxList))
    {
      for(let i = 0; i < afterBoxList.length; i++)
      {
        if(afterBoxList[i] != this)
          this.drawLines(afterBoxList[i]);
      }
    }
    else {
      this.drawLines(afterBoxList);
    }
  }
  
  this.powerOn = function()
  {
    this.hasPower = true;
  }
  
  this.powerOff = function()
  {
    this.hasPower = false;
  }

  this.drawLines = function(afterBox)
  {
    sketch.line(this.posX+this.w/2, this.posY+this.h, afterBox.posX+this.w/2, afterBox.posY);
  }
}
