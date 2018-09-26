var convSim = function(sketch) {

  let sliderMax = 7;
  var tSlider, fSlider;
  let defaultTPTimeSec = 0.4;
  let can;
  this.widgetList = [];
  this.conveyer = null;
  this.bgImg = sketch.loadImage("images/game/conveyerImgs/bakground.jpg");
  this.buildingBack = sketch.loadImage("images/game/conveyerImgs/hangar2.svg");
  this.building = sketch.loadImage("images/game/conveyerImgs/hangar.svg");
  let proFontWindows = sketch.loadFont("../font/ProFontWindows.ttf");
  let crateTimeout = setTimeout(addWidget, defaultTPTimeSec * 1000);

  let sliderPosX;
  let sliderPosY;

  let sliderSize;

  let xFactor;
  let yFactor;

  let spacing;
  let textSpacing;

  let pointer;

  let headerOffset = $("#topNav").outerHeight();

  sketch.setup = function() {
    sketch.frameRate(30);
    can = sketch.createCanvas(400, 500);
    const canvasElt = can.elt;
    canvasElt.style.width = '100%', canvasElt.style.height="100%";

    xFactor = canvasElt.clientWidth/sketch.width;
    yFactor = canvasElt.clientHeight/sketch.height;

    sliderPosX  = ((sketch.width/4) + 25) * xFactor;
    sliderPosY = (sketch.height/2) * yFactor - 25;

    sliderSize = (sketch.width/8) * xFactor * 3;
    spacing = (sketch.height/18) * yFactor;

    tSlider = sketch.createSlider(0.1, 1, defaultTPTimeSec, 0.1);
    tSlider.position(sliderPosX, sliderPosY);
    tSlider.size(sliderSize);
    fSlider = sketch.createSlider(3, sliderMax, 5, 0.1);
    fSlider.position(((sketch.width/4) + 25) * xFactor, (425 * yFactor) + headerOffset);
    fSlider.size(sliderSize);

    let pointerList = [];
    pointerList.push({posX : (sketch.width/10), posY : 40, text : "Welcome to the Littles Law Simulator. This demonstration is intended to explain the basic concepts of Littles Law", textPos: "right"}); //Littles Law Intro
    pointerList.push({posX : (sketch.width/10), posY : 40, text : "Little’s law is an equation showing that the average number of items in a queueing system is equal to their average throughput multiplied by the average amount of time they spend in the system", textPos: "right"}); //Littles Law Intro
    pointerList.push({posX : (sketch.width/10), posY : 40, text : "To begin using Littles Law lets first identify our process machine...", textPos: "right"}); //Littles Law Intro
    pointerList.push({posX : (sketch.width/10), posY : 40, text : "We can assume that our process machine is this hangar right here...", textPos: "right"}); //Littles Law Intro
    pointerList.push({posX : (sketch.width/10), posY : 40, text : "Its input is boxes of parts  ", textPos: "right"}); //Littles Law Intro
    pointerList.push({posX : (sketch.width/10), posY : 40, text : "Its output is airplanes", textPos: "right"}); //Littles Law Intro

    pointerList.push({posX : 100, posY : 140, text : "The time that it takes for our machine (hangar) to turn a box of parts into an airplane is our Flowtime", textPos: "right"}); //Flowtime
    pointerList.push({posX : 100, posY : 80, text : "The rate at which airplaines come out of our machine (hangar) is known as the Throughput"}); //Throughput
    pointerList.push({posX : 100, posY : 80, text : "The number of units being worked on (boxes being turned into airplanes) that are inside our machine (hangar) is known as our Work in Process (WIP)"}); //WIP

    pointerList.push({posX : 50, posY : 80, text : "How do we improve the speed of our process?"}); //Speed
    pointerList.push({posX : 50, posY : 80, text : "There are two ways to do this"});
    pointerList.push({posX : 50, posY : 80, text : "One way is to reduce the WIP"});

    pointerList.push({posX : 50, posY : 80, text : "To do this we can reduce our Flowtime"}); //Reduce Flowtime
    //add Flowtime check
    pointerList.push({posX : 50, posY : 80, text : "Notice that the WIP is reduced"}); //Reduce Flowtime

    pointerList.push({posX : 50, posY : 80, text : "The other way is to increase our throughput"});
    //add Throughput check
    pointerList.push({posX : 50, posY : 80, text : "Notice that the rate at which the maching is producing airplanes has increased"}); //Increase throughput




    pointer = new Pointer(sketch, pointerList);
  }

  sketch.draw = function() {
    sketch.background(this.bgImg);

    sketch.textFont(proFontWindows);
    sketch.textSize(12);


    sketch.text("Throughput(T): " + tSlider.value() + " per sec", sliderPosX / xFactor, (sliderPosY / yFactor) - (spacing/yFactor) - 5);

    sketch.textSize(18);

    sketch.text("Littles Law: T * F = WIP", (sketch.width/10), 100 );
    sketch.text(tSlider.value() + " * " + fSlider.value() + " = " + (tSlider.value() * fSlider.value()).toFixed(2), (sketch.width/8) + 112, 120);

    let buildingShift = this.buildingBack.width - this.buildingBack.width * (1/5 * fSlider.value())
    sketch.image(this.buildingBack, sketch.width/2 - this.buildingBack.width/2 + (buildingShift/2), sketch.height/2 + sketch.height/5 - this.building.height + 30, this.buildingBack.width * (1/5 * fSlider.value()), this.buildingBack.height);


    if(this.conveyer1 == null && typeof sketch.width != 'undefined')
    {
      this.conveyer1  = new ConveyerBelt(sketch, 0);
      this.conveyer2  = new ConveyerBelt(sketch, (sketch.width/4) * 1);
      this.conveyer3  = new ConveyerBelt(sketch, (sketch.width/4) * 2);
      this.conveyer4  = new ConveyerBelt(sketch, (sketch.width/4) * 3);
    }

    if(typeof this.widgetList != 'undefined')
    {

      this.conveyer1.update();
      this.conveyer2.update();
      this.conveyer3.update();
      this.conveyer4.update();


      for(let i = 0; i < this.widgetList.length; i ++)
      {

        let velocity = 1;

        this.widgetList[i].update(velocity);

      }
    }



    buildingShift = this.building.width - this.building.width * (1/5 * fSlider.value())
    sketch.image(this.building, sketch.width/2 - this.building.width/2 + (buildingShift/2), sketch.height/2 + sketch.height/5 - this.building.height + 30, this.building.width * (1/5 * fSlider.value()), this.building.height);
    sketch.textSize(20);
    sketch.text("WIP: ", sketch.width/2 - 25, sketch.height/2 + sketch.height/5+10)
    sketch.text((tSlider.value() * fSlider.value()).toFixed(2), sketch.width/2 - 25, sketch.height/2 + sketch.height/5 + 28)

    sketch.textSize(12);
    sketch.text(fSlider.value() + " sec", sketch.width/2 - 20, (this.conveyer2.posY + 50));
    //sketch.text(tSlider.value() + " sec", sketch.width/2 - this.buildingBack.width/2 + (buildingShift/2) + this.buildingBack.width * (1/5 * fSlider.value())+15, sketch.height/2 + sketch.height/5 - this.building.height + 100);

    sketch.text("Flowtime(F)", sketch.width/2 - 35, (this.conveyer2.posY + 70));
    sketch.line(sketch.width/2 - this.building.width/2 + (buildingShift/2), sketch.height/2 + sketch.height/5 - this.building.height + 200, sketch.width/2 - this.building.width/2 + (buildingShift/2), sketch.height/2 + sketch.height/5 - this.building.height + 185);
    sketch.line(this.building.width + 105 * (1/5 * fSlider.value()), sketch.height/2 + sketch.height/5 - this.building.height + 200, this.building.width + 105 * (1/5 * fSlider.value()), sketch.height/2 + sketch.height/5 - this.building.height + 185);
    sketch.line(sketch.width/2 - this.building.width/2 + (buildingShift/2), sketch.height/2 + sketch.height/5 - this.building.height + 200, this.building.width + 105 * (1/5 * fSlider.value()), sketch.height/2 + sketch.height/5 - this.building.height + 200);


    if(typeof pointer != 'undefined')
    {
      pointer.update();
    }
  }

  function addWidget()
  {
    this.widgetList.push(new Widget(sketch));

    crateTimeout = setTimeout(addWidget, 1000/tSlider.value() );
  }

  sketch.mouseClicked = function()
  {
    pointer.advance();
  }

}
