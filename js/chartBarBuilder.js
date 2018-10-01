var barchartNameFilled = false;
var numGatesFilled = false
var numReqsFilled = false;
var gateTitleFilled = false;
var gateRemainingFilled = false;
var gateActualFilled = false;
var gateAvgDaysFilled = false;

var numOfGates;
var currGateNum = 1;

var chartProperties = [];
var gates = [];

function resetGlobalValues(){
  currGateNum = 1;
  chartProperties = [];
  gates = [];
}

/**
* Displays a list of saved charts and a New Chart
* and
*/
function defineChart() {
  resetGlobalValues();
  $("#chart_choice").addClass("hidden_toggle");
  $("#chart_define").removeClass("hidden_toggle");
  resetInputBooleanValues();
  setupKeyEvents();
}

function gateValues() {
  numOfGates = parseInt($("#num_gates_id").val());
  chartProperties = [$("#barchart_name_id").val(), $("#num_gates_id").val(), $("#num_req_id").val()];
  $("#chart_define").addClass("hidden_toggle");
  $("#gate_values").removeClass("hidden_toggle");
}

function showBarChart() {
  var chartObj = buildChartObject();
  sendChartToDB(chartObj);
  $("#gate_values").addClass("hidden_toggle");
  $("#gate_chart").removeClass("hidden_toggle");
  showGateBarChart(chartObj);
}

function addChartGate() {
  let oneGateObj = {
    "title" : $("#gate_title_id").val(),
    "remDays" : $("#gate_remaining_id").val(),
    "actDays" : $("#gate_actual_id").val(),
    "avgDays" : $("#gate_avg_days_id").val()
  }
  gates.push(oneGateObj);
  if(numOfGates === currGateNum){
    document.getElementById("next_gate_btn").style.display = 'none';
    document.getElementById("create_chart_btn").style.display = 'inline-block';
  }
  else{
    currGateNum++;
  }
  clearAllInputTextFields();
  resetInputBooleanValues();
  checkForAllGateChartInputs();
}

function setupKeyEvents(){
  document.getElementById('barchart_name_id').onkeyup = function(event) {
    if (this.value.length === 0) {
      barchartNameFilled = false;
    }
    else{
      barchartNameFilled = true;
    }
    checkForAllBarChartInputs();
  }

  document.getElementById('num_gates_id').onkeyup = function(event) {
    if (this.value.length === 0) {
      numGatesFilled = false;
    }
    else{
      numGatesFilled = true;
    }
    checkForAllBarChartInputs();
  }

  document.getElementById('num_req_id').onkeyup = function(event) {
    if (this.value.length === 0) {
      numReqsFilled = false;
    }
    else{
      numReqsFilled = true;
    }
    checkForAllBarChartInputs();
  }

  document.getElementById('gate_title_id').onkeyup = function(event) {
    if (this.value.length === 0) {
      gateTitleFilled = false;
    }
    else{
      gateTitleFilled = true;
    }
    checkForAllGateChartInputs();
  }

  document.getElementById('gate_remaining_id').onkeyup = function(event) {
    if (this.value.length === 0) {
      gateRemainingFilled = false;
    }
    else{
      gateRemainingFilled = true;
    }
    checkForAllGateChartInputs();
  }

  document.getElementById('gate_actual_id').onkeyup = function(event) {
    if (this.value.length === 0) {
      gateActualFilled = false;
    }
    else{
      gateActualFilled = true;
    }
    checkForAllGateChartInputs();
  }

  document.getElementById('gate_avg_days_id').onkeyup = function(event) {
    if (this.value.length === 0) {
      gateAvgDaysFilled = false;
    }
    else{
      gateAvgDaysFilled = true;
    }
    checkForAllGateChartInputs();
  }
}

function resetInputBooleanValues(){
  barchartNameFilled = false;
  numGatesFilled = false
  numReqsFilled = false;
  gateTitleFilled = false;
  gateRemainingFilled = false;
  gateActualFilled = false;
  gateAvgDaysFilled = false;
  $('#next_gate_btn').attr('disabled', 'disabled');
}

function clearAllInputTextFields(){
  $("#gate_title_id").val("");
  $("#gate_remaining_id").val("");
  $("#gate_actual_id").val("");
  $("#gate_avg_days_id").val("");
}

function checkForAllBarChartInputs(){
  if(barchartNameFilled && numGatesFilled && numReqsFilled){
    $('#save_chart_properties_btn').removeAttr('disabled');
    //$('#save_chart_properties_btn').addClass('col s6 m6 mouse_point waves-effect waves-light btn');
  }
  else{
    $('#save_chart_properties_btn').attr('disabled', 'disabled');
    //$('#save_chart_properties_btn').removeClass('col s6 m6 mouse_point waves-effect waves-light btn');
  }
}

function checkForAllGateChartInputs(){
  if(gateTitleFilled && gateRemainingFilled && gateActualFilled && gateAvgDaysFilled){
    $('#next_gate_btn').removeAttr('disabled');
    //$('#save_chart_properties_btn').addClass('col s6 m6 mouse_point waves-effect waves-light btn');
  }
  else{
    $('#next_gate_btn').attr('disabled', 'disabled');
    //$('#save_chart_properties_btn').removeClass('col s6 m6 mouse_point waves-effect waves-light btn');
  }
}

function buildChartObject(){
  let chartDBObject = {
    "name" : chartProperties[0],
    "numGates" : chartProperties[1],
    "numReq" : chartProperties[2],
    "gates" : gates
  };

  return chartDBObject;

}

function sendChartToDB(chartDBObject){
  chartIndexes = ["name", "numGates", "numReq"];
  itemDB.open("BarChartDatabase", 1, "barchartDatastore", "", chartIndexes, true, function(){
    itemDB.createItem("barchartDatastore", chartDBObject, function(){});
  });
}
