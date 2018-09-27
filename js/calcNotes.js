function notesFetchAllGroups(){
  itemDB.simpleOpen("Calculations", 1, "calculations", function() {
    itemDB.fetchAll("calculations", function(myRecords){
      buildGroups(myRecords, "group");
    });
  });
}

function buildGroups(collection, property){
  var i = 0, val, index,
  values = [], result = [];
  for (; i < collection.length; i++) {
    val = collection[i][property];
    index = values.indexOf(val);
    if (index > -1)
    result[index].push(collection[i]);
    else {
      values.push(val);
      result.push([collection[i]]);
    }
  }
  displayGroups(result);
}

function buildFormula(record){
  var str = "";
  switch(record.cType){
    case("wip_w_thruput"):
    str = record.wip + " (W) = " + record.throughput + " (Thr) X " + record.flowtime + " (Flow)";
    break;
    case("wip_w_takt"):
    str = record.wip + " (W) = " + record.takt + " (Takt) X " + record.flowtime + " (Flow)";
    break;
    case("throughput"):
    str = record.flowtime + " (Flow) = " + record.wip + " (W) / " + record.throughput + " (Thr)";
    break;
    case("flowtime_w_thruput"):
    str = record.flowtime + " (Flow) = " + record.wip + " (W) / " + record.throughput + " (Thr)";
    break;
    case("flowtime_w_takt"):
    str = record.flowtime + " (Flow) = " + record.wip + " (W) X " + record.takt + " (Takt)";
    break;
    case("takt"):
    str = record.takt + " (Takt) = " + record.flowtime + " (Flow) / " + record.wip + " (W)";
    break;
  }
  return str;
}

function displayGroups(records){
  if(records[0] != null){
    document.getElementById("calculationsBlurb").style.display = "none";
  }
  else{
    document.getElementById("calculationsBlurb").style.display = "block";
  }
  console.log(JSON.stringify(records));
  var rowCount = 0;
  var colCount = 0;
  var groupID = "";
  for(var i = 0; i < records.length; i++){
    if(records[i][0].group === ""){
      groupID = "No Group"
    }
    else{
      groupID = records[i][0].group;
    }

    $('<div>', {							//<div class="row collapseGroup">
    class: "row collapseGroup"
}).append( $('<ul>', {				//<ul class="collapsible " style="background-color:#eeeeee;">
    class: "collapsible ",
    style: "background-color:#eeeeee;"
}).append( $('<li>', {				//<li>
}).append( $('<div>', {				//<div id="groupA" class="col s10 collapsible-header"><b>All</b></div>
    id: "group" + i,
    class: "col s10 collapsible-header",
    text: groupID
})).append( $('<div>', {			//<div class="col s1 headerCollapsible" style="padding:0">				</div>
    class: "col s1 headerCollapsible",
    style: "padding:0"
}).append( $('<img>', {				//<img src="css/svg/mail.svg" height="20px" width="20px" style="vertical-align:middle;">
    src: "css/svg/mail.svg",
    id: "mailImg",
    style: "vertical-align:middle; width: 20px; height: 20px;",
    onclick: "displayAlert();"
}))).append( $('<div>', {			//<div class="col s1 headerCollapsible" style="padding:0">			</div>
    class: "col s1 headerCollapsible",
    style: "padding:0"
}).append( $('<img>', {				//<img src="css/svg/trash.svg" height="20px" width="20px" style="vertical-align:middle;">
    src: "css/svg/trash.svg",
    id: "trashImg",
    style: "vertical-align:middle; width: 20px; height: 20px;",
    onclick: "displayAlert();"
}))).append( $('<div>', {			//<div class="col 12 collapsible-body collapseBody">
    class: "col 12 collapsible-body collapseBody"
}).append( $('<ul>', {				//<ul id="groupName"></ul>
    id: groupID
}))))).appendTo('#calculations');
    $('.collapsible').collapsible();
    for(var j = 0; j < records[i].length; j++){
      createListElement(records[i][j], groupID);
    }
  }

}

// document.getElementById("calculations").addEventListener("click",function(e) {
//   if(e.target && e.target.nodeName == "LI") {
//     console.log(e.target.innerText + " was clicked");
//   }
// });

function createListElement(record, ulID){
  var ul = document.getElementById(ulID);
  //var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  //li.setAttribute('id',candidate.value);
  var formula = buildFormula(record);
  var innerDiv = document.createElement("div");
  li.appendChil
  li.appendChild(document.createTextNode(record.name+ "     " + formula));
  ul.appendChild(li);
}

function displayAlert(){
  alert("We've have clickoff");
}
