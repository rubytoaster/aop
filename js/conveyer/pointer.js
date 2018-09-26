//this file holds the logic and draws the pointer handDown
function Pointer(sketch, positionList)
{
  this.ctr = 0;
  this.posX = positionList[this.ctr].posX;
  this.posY = positionList[this.ctr].posY;
  this.textPosition = positionList[this.ctr].textPosition;
  this.text = positionList[this.ctr].text;
  this.textVisible = positionList[this.ctr].textVisible;

  this.handDownImg = sketch.loadImage("images/game/conveyerImgs/handDown.png");
  this.textBubble = new TextBubble(sketch);

  this.update = function()
  {
    sketch.image(this.handDownImg, this.posX, this.posY, 50, 50);

    if(typeof this.text != 'undefined')
    {
      this.textBubble.update(this.posX, this.posY, this.text, this.textPosition);
    }
  }

  this.advance = function()
  {
    this.ctr++;
    if(this.ctr <= positionList.length)
    {
      this.posX = positionList[this.ctr].posX;
      this.posY = positionList[this.ctr].posY;
      this.textPosition = positionList[this.ctr].textPosition;
      this.text = positionList[this.ctr].text;
    }
  }


}
