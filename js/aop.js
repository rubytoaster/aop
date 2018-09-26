var slideIndex = 1;
var total = 146;

let script = document.createElement("script");
script.src = "js/searchDomain.js";
document.head.appendChild(script);

var searchDomain = [];

function initalLoad(){

  $(".drag-target").on("swipeleft", function () {
    $("#sidenav-overlay").trigger("click");
  });

   $("#backButton").hide();
    $("#menuButton").hide();

   loadSidenav();
}

function loadActivityPage()
{
  clearColor();
  closeGame();
  closeSidenav();
  $("#app_cont").load("content/activity.html");
  $("#pageTitle").text("Activities");
  $("#menuButton").show();
  $("#backActivityButton").hide();
}

function loadSettings()
{
  clearColor();
  closeGame();
  closeSidenav();
  $("#app_cont").load("content/settings.html");
  $("#pageTitle").text("Settings");
}

function loadSidenav()
{
  /*var sideNavButton = document.getElementById("menuButton");
  sideNavButton.setAttribute('data-activates', 'mobile-demo');
  sideNavButton.setAttribute('class', 'button-collapse');*/

    $('.button-collapse').sideNav({
    draggable:true,
    edge:'left'
  });
}

function closeSidenav()
{
  $('.button-collapse').sideNav('hide');
   $('.button-collapse').sideNav({
  closeOnClick: true
   });
}

function loadHome(){
  clearColor();
  closeGame();
  closeSidenav();
  //loadSidenav();
  $("#menuButton").show();
//  $("#backButton").css('display', 'none');
  $("#app_cont").load("content/home.html");
  $("#pageTitle").text('AoP');
  $("#app_cont").css('background-color', '#e0e0e0');
  $("#app_cont").css('height','100%');
  $('body').css('background-color', '#e0e0e0');
}

function clickNextSlide(){
  $('.slider').slider('next');
}

function clickPrevSlide(){
  $('.slider').slider('prev');
}

function loadSlide(n){
  clearColor();
  closeSidenav();
  $("#pageTitle").text('AOP Slides');
  animateArrow();
  $("#app_cont").load("content/slideScreen.html", function()
  {
    var numberList = document.getElementById("numberList");

    for(var i = slideIndex; i <= total; i++)
    {
      //create new li element
      var newNumberListItem = document.createElement("li");
      var numberListValue = document.createElement("div");
      var pageNumber = document.createElement("div");

      var progressBar = document.createElement("div");
      var myBar = document.createElement("div");
      progressBar.setAttribute("class", "row myProgress");
      myBar.setAttribute("class", "myBar");
      myBar.style.width = ((100/total) * i)  + '%';

      progressBar.appendChild(myBar);
      numberListValue.setAttribute("id", "slide" + i);
      numberListValue.setAttribute("class","imageStyle" );
      numberListValue.setAttribute("style", "background-image: url(/images/IntermediateLevelAoP/Slide"+i+".jpg)");
      pageNumber.setAttribute("id", "pageNumber");
      pageNumber.innerHTML = i + ' of ' + total;
      pageNumber.setAttribute("class", "positionNumber");
      newNumberListItem.appendChild(numberListValue);
      newNumberListItem.appendChild(progressBar);
      numberList.appendChild(newNumberListItem);

    }
    $('.slider').slider({interval:1000000000, indicator:true, });
  });
}

function loadCalculator(){
  clearColor();

  closeSidenav();
  $("#app_cont").load("content/calculator.html");
  $("#pageTitle").text("Little's Law Calculator");
  $("#calcLabel").css('color','#0EABDA');
  $("#app_cont").css('background-color', '#e0e0e0');
  $("#app_cont").css('height','100%');
  $('body').css('background-color', '#e0e0e0');
  //$("#calcsvg").css({ fill: "#ff0000" });

}

function loadCalculatorModal(){
  var defaultColor= "#424242";
  var pageTitle = $("#pageTitle").text();
  if(pageTitle !== "Little's Law Calculator"){
    $("#modal_content").load("content/calculator.html");
    $("#calcContainer").css('padding-top','0px');
    $("#calcLabel").css('color','#0EABDA');
    //$("#calcsvg").attr("fill","#0EABDA");
    $(".calculator").css("fill", "#0EABDA");
    //$("#calcsvg").css({fill: #0eABDA});
    //$("#calcsvg").css('color','#0EABDA');
    //$("#calcsvg").css({ fill: "#ff0000" });
    //$('#calcsvg').css({fill: defaultColor});
    $("#app_cont").css('filter', 'blur(5px) grayscale(50%)');


    $(document).ready(function(){
      $('#modal1').modal();
    });

    $('#modal1').modal({
      dismissible:false
    });
    $('#modal1').modal('open');

  }


}

function loadSearchModal(){

    $("#modal_content").load("content/search.html");
    $("#searchContainer").css('padding-top','0px');
    //$("#calcLabel").css('color','#0EABDA');
    $("#app_cont").css('filter', 'blur(5px) grayscale(50%)');


    $(document).ready(function(){
      $('#modal1').modal();
    });

    $('#modal1').modal({
      dismissible:false
    });
    $('#modal1').modal('open');


}

  function loadEmailModal(){

    $("#modal_content").load("content/email.html");
    $("#app_cont").css('filter', 'blur(5px) grayscale(50%)');
      $(".mailIcon").css("fill", "#0EABDA");
    $("#mailLabel").css('color','#0EABDA');

    $(document).ready(function(){
      $('#modal1').modal();
    });

    $('#modal1').modal({
      dismissible:false
    });
    $('#modal1').modal('open');


  }

 function loadNotesModal(){

    $("#modal_content").load("content/notes.html");
    $("#app_cont").css('filter', 'blur(5px) grayscale(50%)');
    $(".eventNote").css("fill", "#0EABDA");
    $("#notesLabel").css('color','#0EABDA');
    $(document).ready(function(){
      $('#modal1').modal();
    });

    $('#modal1').modal({
      dismissible:false
    });
    $('#modal1').modal('open');


  }

function searchInKey(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].key.includes(nameKey)) {
        area = myArray[i].area;
        if(area === 'gloss')
        {
          firstLetter = nameKey[0].toUpperCase();
        }
        else {
          firstLetter = nameKey[0].toLowerCase();

        }

          return nameKey + " - " + myArray[i].value;
      }
    }
    return "No Result Found";
}

function searchInValue(term, myArray) {
  let results = [];
  for (let i = 0; i < myArray.length; i++) {

    if (myArray[i].value.includes(term)) {
      area = myArray[i].area;
      if (area === "handbook-pdf") {
        let link = term + ' - <a href="../pdf/aop-handbook.pdf#page=' + myArray[i].page + '">' +
        myArray[i].key + '</a></br>'
        results.push(link);
      } else {
        let result = term + " - " + myArray[i].value + "</br>";
        results.push(result);
      }
    }
  }
  if (results.length <= 0) {
    return "No Result Found";
  } else {
    return results;
  }
}

function clearSearchInput()
{
  $("#autocomplete-input").value="";
}

function loadResources(){
  clearColor();
  closeGame();

  closeSidenav();
  $("#app_cont").load("content/resources.html");
  $("#pageTitle").text("Resources");
  $("#menuButton").show();
  $("#backButton").hide();
  //add a transform for the lines.

}

function loadGettingStarted(){
  clearColor();
  closeGame();

  closeSidenav();
  $("#app_cont").load("content/gettingStarted.html");
  $("#pageTitle").text("Getting Started");
}

function loadNewsletter(){
  clearColor();
  closeGame();

  closeSidenav();
  $("#app_cont").load("content/newsletter.html");
  $("#pageTitle").text("Archived Newsletters");
}

function loadAboutUs(){
  clearColor();
  closeGame();

  closeSidenav();
  $("#app_cont").load("content/aboutUs.html");
  $("#pageTitle").text("About Us");
}

function clearColor(){
    var defaultColor= "#424242"
    $("#calcLabel").css('color',defaultColor);
    $('#calcsvg').css({fill: defaultColor});
    $(".calculator").css({fill: defaultColor});
    $(".eventNote").css({fill: defaultColor});
    $("#notesLabel").css('color',defaultColor);
     $(".mailIcon").css({fill: defaultColor});
    $("#mailLabel").css('color',defaultColor);
    $("#app_cont").css('background-color', '#e0e0e0');
    $("#app_cont").css('height','');
    $('body').css('background-color', '#e0e0e0');
    $("#app_cont").css('filter', '');

  }

function closeGame() {
  if(typeof car_S != 'undefined' && car_S !== null) {
    gameCleanup(car_S,'app_cont');
  }

  if(typeof exportRoot != 'undefined' && exportRoot !== null) {
    gameCleanup(exportRoot,'app_cont');
  }
}

function loadGame(){
  closeGame();
  closeSidenav();

  $(function(){
    $("#app_cont").empty();
    car_S = new p5(carSim,'app_cont');
  });
  $("#pageTitle").text("Activity");
}

function loadGame2(){
  closeGame();
  closeSidenav();
   $(function(){
    $("#app_cont").empty();
    car_S = new p5(convSim,'app_cont');
  });
  $("#pageTitle").text("Activity");
}

function loadGame3(){
  closeGame();
  closeSidenav();

  $(function(){
    $("#app_cont").empty();
    car_S = new p5(cPathSim,'app_cont');
  });
  $("#pageTitle").text("Activity");
}


function loadGuidance(){
  clearColor();
  closeGame();

  $("#app_cont").load("content/guidance.html");
  $("#pageTitle").text("Guidance");
  animateArrow();
}

function loadHandbook(page = 1){
  clearColor();
  closeGame();

  $("#app_cont").load("pdf/aop-handbook.pdf#page=" + page);
  $("#pageTitle").text("Handbook");
}

function loadAcronyms(){
  $('#modal1').modal('close');
  clearColor();
  closeGame();

  $("#app_cont").load("content/acronyms.html");
  $("#pageTitle").text("Acronyms");

  animateArrow();
}

function loadWallWalks(){
  clearColor();
  closeGame();

  $("#app_cont").load("content/wallWalks.html");
  $("#pageTitle").text("Wall Walks");

  animateArrow();
}

function animateArrow()
{
  $("#menuButton").hide();
    $("#backButton").show();

  var topPatty = document.getElementById("pat1");
  var bottomPatty = document.getElementById("pat3");
  topPatty.style="height:4px; width:24px; position:absolute; top:45%; left:15%";

  topPatty.style="transform:rotate(-45deg);width:15px; top:28%; left:14%;";
  bottomPatty.style="transform:rotate(45deg);width:15px; top:63%;";
}

function clickBackToResources()
{
  var burger1 = document.getElementById("bur1");
  var burger3 = document.getElementById("bur3");
  burger1.style="transform:rotate(-45deg);width:15px; top:28%; left:14%;"
  burger3.style="transform:rotate(45deg);width:15px; top:63%;";
  loadResources();
  resetArrow();
  burger1.style="tranform:rotate(45deg); width:24px; top:20%; left:15%;";
  burger3.style="tranform:rotate(-45deg); width:24px; top:70%; left:15%;";

}

function resetArrow()
{
  var topPatty = document.getElementById("pat1");
  var bottomPatty = document.getElementById("pat3");
  topPatty.style="transform:rotate(45deg);width:24px; top:45%; left:15%;";
  bottomPatty.style="tranform:rotate(-45deg); width:24px; top:70%; left:15%";
}
function loadTraining(){
  clearColor();
  closeSidenav();
  closeGame();

  $(function(){
    $("#app_cont").empty();

    var anim_container = document.createElement("div");
    anim_container.id = "animation_container";
    anim_container.style = "display: none; background-color:rgba(255, 255, 255, 1.00);";

    var canvas = document.createElement('canvas');
    canvas.id = "canvas";
    canvas.style = "position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);";

    var dom_overlay_container = document.createElement("div");
    dom_overlay_container.id = "dom_overlay_container";
    dom_overlay_container.style = "pointer-events:none; overflow:hidden; position: absolute; left: 0px; top: 0px; display: block;";

    anim_container.appendChild(canvas);
    anim_container.appendChild(dom_overlay_container);

    document.getElementById("app_cont").appendChild(anim_container);

    document.getElementById("animation_container").style.display = "block";

    init();

      var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
  function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("D8119AD668E9D44193ADA1BB18D6EFBE");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
  }
  function handleFileLoad(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
  }
  function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.LittlesLawAnimationWholeSeq();
    stage = new lib.Stage(canvas);
    stage.enableMouseOver();
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      stage.addChild(exportRoot);
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
      var lastW, lastH, lastS=1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
        var w = lib.properties.width, h = lib.properties.height;
        var iw = window.innerWidth, ih=window.innerHeight;
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
        if(isResp) {
          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
            sRatio = lastS;
          }
          else if(!isScale) {
            if(iw<w || ih<h)
              sRatio = Math.min(xRatio, yRatio);
          }
          else if(scaleType==1) {
            sRatio = Math.min(xRatio, yRatio);
          }
          else if(scaleType==2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }
        canvas.width = w*pRatio*sRatio;
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
        canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;
        stage.scaleY = pRatio*sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;
        stage.tickOnUpdate = false;
        stage.update();
        stage.tickOnUpdate = true;
      }
    }
    makeResponsive(true,'both',true,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }
  });
  $("#pageTitle").text("Training");
}

function loadAcrnmIndecies() {
  let checkbox = document.getElementById("acrnm");

  // determine if the checkbox is checked.
  //if (checkbox.checked === true) {
    // put the indecies in the searchDomain.
    acrnmDomain.forEach( (index) => {
      searchDomain.push(index);
    });
  // } else {
  //   // remove the indecies from the searchDomain.
  // }
}

function loadGlossIndecies() {
  let checkbox = document.getElementById("gloss");

  // determine if the checkbox is checked.
  //if (checkbox.checked === true) {
    // put the indecies in the searchDomain.
    glossDomain.forEach( (index) => {
      searchDomain.push(index);
    });
  // } else {
  //   // remove the indecies from the searchDomain.
  // }

}

function loadHandbookIndecies() {
  let checkbox = document.getElementById("aop-handbook");

  // determine if the checkbox is checked.
  //if (checkbox.checked === true) {
    // put the indecies in the searchDomain.
    handbookDomain.forEach( (index) => {
      searchDomain.push(index);
    });
  // } else {
  //   // remove the indecies from the searchDomain.
  // }
}

//load SearchDomain
// loadAcrnmIndecies();
// loadGlossIndecies();
// loadHandbookIndecies();
setTimeout( () => {
  loadAcrnmIndecies();
  loadGlossIndecies();
  loadHandbookIndecies();
}, 1000); //WHY DOES THIS WORK?!?!?!?!?!?!


// finish this function when implementing the remove indecies in the above 3 functions.
function getIndex(type) {
  let acrnms = document.getElementById("acrnm");
  let gloss = document.getElementById("gloss");
  let book = document.getElementById("aop-handbook");
  let index;

  if (type === "Gloss"){

  } else if (type === "Handbook") {

  }

}
