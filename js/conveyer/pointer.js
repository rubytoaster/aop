//this file holds the logic and draws the pointer handDown
function Pointer(sketch, positionList, tSlider, fSlider)
{
  this.ctr = 0;
  this.posX = positionList[this.ctr].posX;
  this.posY = positionList[this.ctr].posY;
  this.pointerPosition = positionList[this.ctr].pointerPos;
  this.text = positionList[this.ctr].text;
  this.textVisible = positionList[this.ctr].textVisible;
  this.pointerRotation = positionList[this.ctr].pointerRotation;
  this.onCheckStep = false;

  this.handDownImg = sketch.loadImage("images/game/conveyerImgs/handDown.png");
  this.handUpImg = sketch.loadImage("images/game/conveyerImgs/handUp.png");
  this.handLeftImg = sketch.loadImage("images/game/conveyerImgs/handLeft.png");
  this.handRightImg = sketch.loadImage("images/game/conveyerImgs/handRight.png");

  this.textBubble = new TextBubble(sketch);

  this.update = function()
  {
    if(typeof positionList != "undefined")
    {
      let handPosX = this.posX;
      let handPosY = this.posY;

      if(this.pointerPosition == "left")
      {
        handPosX = this.posX;
      }
      else if(this.pointerPosition === "center")
      {
        handPosX += 147;
      }
      else if(this.pointerPosition === "right")
      {
        handPosX += 220;
      }

      if(typeof this.pointerYOffset === "undefined")
        this.pointerYOffset = 0;
      if(typeof this.pointerXOffset === "undefined")
        this.pointerXOffset = 0;

      if(this.pointerRotation === "down")
        sketch.image(this.handDownImg, handPosX + this.pointerXOffset, this.posY + this.pointerYOffset, 50, 50);
      else if(this.pointerRotation === "up")
        sketch.image(this.handUpImg, handPosX + this.pointerXOffset, this.posY + this.pointerYOffset, 50, 50);
      else if(this.pointerRotation === "left")
        sketch.image(this.handLeftImg, handPosX + this.pointerXOffset, this.posY + this.pointerYOffset, 50, 50);
      else if(this.pointerRotation === "right")
        sketch.image(this.handRightImg, handPosX + this.pointerXOffset, this.posY + this.pointerYOffset, 50, 50);

      if(this.onCheckStep == true)
      {
        if(this.checkFor === "flowtime")
        {
          this.isFlowBelow();
        }
        if(this.checkFor === "throughput")
        {
          this.isThroughputAbove();
        }
      }

      if(typeof this.text != 'undefined')
      {
        this.textBubble.update(this.posX, this.posY, this.text, this.pointerPosition);
      }
    }
  }

  this.isFlowBelow = function()
  {
    if(fSlider.value() <= 3.4)
    {
      this.onCheckStep = false;
      this.advance();
    }
  }

  this.isThroughputAbove = function()
  {
    if(tSlider.value() >= 0.7)
    {
      this.onCheckStep = false;
      this.advance();
    }
  }

  this.advance = function()
  {
    this.ctr++;
    this.textBubble.textAnimIndex = 0;
    if(this.ctr < positionList.length)
    {
      this.posX = positionList[this.ctr].posX;
      this.posY = positionList[this.ctr].posY;
      this.pointerPosition = positionList[this.ctr].pointerPos;
      this.text = positionList[this.ctr].text;
      this.pointerRotation = positionList[this.ctr].pointerRotation;
      this.pointerYOffset = positionList[this.ctr].pointerYOffset;
      this.pointerXOffset = positionList[this.ctr].pointerXOffset;
      this.onCheckStep = positionList[this.ctr].onCheckStep;
      this.checkFor = positionList[this.ctr].checkFor;
    }
  }


}
