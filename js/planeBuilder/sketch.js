var planeBuilderSim = function(sketch) {
  
  var fuselageImg;
  var tailImg;
  var wingsImg;
  var cockpitImg;
  var fuselageCImg;
  var fuselageTImg;
  var fuselageWImg;
  var fuselageCTImg;
  var fuselageCWImg;
  var fuselageWTImg;
  var airplaneCompImg;
  
  var fuselageTimeout;
  
  var statsDisplay;
  var wings;
  var tail;
  var cockpit;
  var converyerBelt1;
  var converyerBelt2;
  var converyerBelt3;
  var converyerBelt4;
  var fuselage;
  var velocity = 2;
  
  var gameRunning = true;
  var winCount = 0;
  
  var attachSnd;
  var successSnd;
  var gameOverSnd;
  
  var numberForWin = 2;
  
  this.fuselageList = [];
  
  this.bgImg = sketch.loadImage("images/game/planeBuilder/factoryBackground.png");

  
  startFactory = function(level) {
      removeAllFuselage();
      closeModal();
      this.level = level;
      winCount = 0;
      gameRunning = true;
      addFuselage();
  }
  
  sketch.setup = function() {
    
    loadImages();

    attachSnd = sketch.loadSound('sounds/attach.wav');
    successSnd = sketch.loadSound('sounds/success.wav');
    gameOverSnd = sketch.loadSound('sounds/gameOver.mp3');
    levelWinSnd = sketch.loadSound('sounds/levelWin.mp3');
    
    sketch.frameRate(40);
    can = sketch.createCanvas(700, 350);
    const canvasElt = can.elt;
    canvasElt.style.width = '100%', canvasElt.style.height="100%";
    
    
    let defaultToolsLocationX = sketch.width/2 -32;
    let defaultToolsLocationY = sketch.height - sketch.height/6;
    
    wings = new Wings(sketch, defaultToolsLocationX, defaultToolsLocationY, wingsImg);
    tail = new Tail(sketch, defaultToolsLocationX - 100, defaultToolsLocationY, tailImg);
    cockpit = new Cockpit(sketch, defaultToolsLocationX + 100, defaultToolsLocationY, cockpitImg );
    conveyerBelt0 = new ConveyerBelt(sketch, -60);
    conveyerBelt1 = new ConveyerBelt(sketch, 50);
    conveyerBelt2 = new ConveyerBelt(sketch, 160);
    conveyerBelt3 = new ConveyerBelt(sketch, 270);
    conveyerBelt4 = new ConveyerBelt(sketch, 380);
    conveyerBelt5 = new ConveyerBelt(sketch, 490);
    conveyerBelt6 = new ConveyerBelt(sketch, 600);

    statsDisplay = new StatsDisplay(sketch);
    
  }

  sketch.draw = function() {
        
    if(gameRunning)
    {
      sketch.background(this.bgImg);
      
      statsDisplay.update(winCount);
      
      sketch.textSize(28);
      //sketch.text("Completed: " + winCount, sketch.width/2 - 75, sketch.height/4);
      conveyerBelt0.update();
      conveyerBelt1.update();
      conveyerBelt2.update();
      conveyerBelt3.update();
      conveyerBelt4.update();
      conveyerBelt5.update();
      conveyerBelt6.update();


      for(let i = 0; i < fuselageList.length; i++)
      {
        this.fuselageList[i].update(velocity);
      }
      
      wings.update();
      tail.update();
      cockpit.update();
      
      //Remove non displayed fuselages
      if(fuselageList[0] != null && this.fuselageList[0].posX >= sketch.width)
      {
        if(this.fuselageList[0].hasTail && this.fuselageList[0].hasWings && this.fuselageList[0].hasCockpit)
        {
          successSnd.play();
          winCount++;
          
          if(winCount >= numberForWin)
          {
            levelWinSnd.play();
            gameRunning = false;
            
            if(this.level == 1)
            {
              displayWinLevel1();
            }
            else if(this.level == 2)
            {
              displayWinLevel2();
            }
            else if(this.level == 3)
            {
              displayWinLevel3();
            }
          }
        }
        else {
          //You lose game stops
          gameRunning = false;
          gameOverSnd.play();
          
          if(this.level == 1)
          {
            displayLoseLevel1();
          }
          else if(this.level == 2)
          {
            displayLoseLevel2();
          }
          else if(this.level == 3)
          {
            displayLoseLevel3();
          }
          
        }
        
        this.fuselageList.shift(); 
      }
    }
    
  }
  sketch.touchStarted = function()
  {
    wings.touchStarted(wings.xPos, wings.yPos);
    tail.touchStarted(tail.xPos, tail.yPos);
    cockpit.touchStarted(cockpit.xPos, cockpit.yPos);

  }
  
  sketch.touchEnded = function()
  {
    wings.touchEnded(attachSnd);
    tail.touchEnded(attachSnd);
    cockpit.touchEnded(attachSnd);
  }
  
  sketch.touchMoved = function()
  {
    wings.touchMoved();
    tail.touchMoved();
    cockpit.touchMoved();
  }
  
  function addFuselage()
  {
    this.fuselageList.push(new Fuselage(sketch, fuselageImg, 
      airplaneCompImg, cockpitImg, fuselageCImg, fuselageTImg, 
      fuselageWImg, fuselageCTImg, fuselageCWImg, fuselageWTImg, wingsImg));
      
    if(this.level == 1)
    {
      velocity = 2;
      fuselageTimeout = setTimeout(addFuselage, 3000);
    }
    else if(this.level == 2)
    {
      velocity = 3;
      fuselageTimeout = setTimeout(addFuselage, 2000);
    }
    else if(this.level == 3)
    {
      velocity = 4;
      fuselageTimeout = setTimeout(addFuselage, 1000);
    }
      
  }
  
  function removeAllFuselage()
  {
    fuselageList = [];
    clearTimeout(fuselageTimeout);
  }
  
  function loadImages()
  {
    fuselageImg = sketch.loadImage("images/game/planeBuilder/fuselage.png");
    tailImg = sketch.loadImage("images/game/planeBuilder/tail.png");
    wingsImg = sketch.loadImage("images/game/planeBuilder/wings.png");
    cockpitImg = sketch.loadImage("images/game/planeBuilder/cockpit.png");
    fuselageCImg = sketch.loadImage("images/game/planeBuilder/fuselageC.png");
    fuselageTImg = sketch.loadImage("images/game/planeBuilder/fuselageT.png");
    fuselageWImg = sketch.loadImage("images/game/planeBuilder/fuselageW.png");
    fuselageCTImg = sketch.loadImage("images/game/planeBuilder/fuselageCT.png");
    fuselageCWImg = sketch.loadImage("images/game/planeBuilder/fuselageCW.png");
    fuselageWTImg = sketch.loadImage("images/game/planeBuilder/fuselageWT.png");
    airplaneCompImg = sketch.loadImage("images/game/planeBuilder/airplaneComp.png");
  }
}
