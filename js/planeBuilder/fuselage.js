function Fuselage(sketch, fuselageImg, airplaneCompImg, cockpitImg, fuselageCImg, fuselageTImg, fuselageWImg, fuselageCTImg, fuselageCWImg, fuselageWTImg, wingsImg)
{
  this.posX = -55;
  this.posY = sketch.height/2 + sketch.height/5 - 35;
  
  this.hasTail = false;
  this.hasWings = false;
  this.hasCockpit = false;
  
  this.update = function(velocity)
  {
    if(this.posX < sketch.width)
    {
      this.posX = this.posX + velocity;
          
      //sketch.rect(this.posX, this.posY - 10, 60, 55);
      //sketch.text(this.fuselageText, this.posX + 5, this.posY);
      
      if(this.hasTail && !this.hasWings && !this.hasCockpit)
      {
        sketch.image(fuselageTImg, this.posX, this.posY + 20, 100, 30);
      }
      else if(!this.hasTail && this.hasWings && !this.hasCockpit)
      {
        sketch.image(fuselageWImg, this.posX, this.posY + 30, 100, 30);
      }
      else if(!this.hasTail && !this.hasWings && this.hasCockpit)
      {
        sketch.image(fuselageCImg, this.posX, this.posY + 30, 100, 30);
      }
      else if(this.hasTail && !this.hasWings && !this.hasCockpit)
      {
        sketch.image(fuselageTImg, this.posX, this.posY + 30, 100, 30);
      }
      else if(this.hasTail && this.hasWings && !this.hasCockpit)
      {
        sketch.image(fuselageWTImg, this.posX, this.posY + 30, 100, 30);
      }
      else if(this.hasTail && !this.hasWings && this.hasCockpit)
      {
        sketch.image(fuselageCTImg, this.posX, this.posY + 30, 100, 30);
      }
      else if(!this.hasTail && this.hasWings && this.hasCockpit)
      {
        sketch.image(fuselageWTImg, this.posX, this.posY + 30, 100, 30);
      }
      
      else if(this.hasTail && this.hasWings && this.hasCockpit)
      {
        //Plane is completed
        //this.fuselageText = "Plane";
        sketch.image(airplaneCompImg, this.posX, this.posY + 30, 100, 30);
      }
      else {
        sketch.image(fuselageImg, this.posX, this.posY + 30, 90, 20);

      }
  
    }
  }
}