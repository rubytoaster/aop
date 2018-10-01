var finishedChart = false;
var barChartInput= {chartTitle:'',
                    xAxisCategories:[''],
                    yAxisTitle: '',
                    remainingDays:[0],
                    actualDays:[0],
                    requirement:0,
                    last5Avg:[0]};


function showGateBarChart() {
	//alert('show chart button clicked');
	$("#chart_status_msg").removeClass("hidden_toggle");
	getData();
	onReady(function() {
	   show('container', true);
	   show('containerData', true);
	   show('loading', false);
    }); 
    buildTable();
}


function getData() {
	barChartInput = {
			chartTitle : 'KC-135 Block 45 Mod Last Produced & A/C In-Work',
			xAxisCategories : [ '62-3507', '63-7982', '61-0309', '60-0322', '60-0316', '58-0057', '62-3514', '60-0351', '62-3566' ],
			yAxisTitle : '',
			remainingDays : [ 0, 0, 0, 0, 0, 15, 27, 40, 50 ],
			actualDays : [ 76, 65, 63, 51, 47, 40, 28, 15, 5 ],
			requirement : 45,
			last5Avg : [ 60.8, 64.4, 62.8, 61.8, 60.4, null, null, null, null ]
		};

	//	input = {
	//			chartTitle : 'KC-135 Block 45 Mod Last Produced & A/C In-Work',
	//			xAxisCategories : [ '62-3507', '63-7982', '61-0309', '60-0322', '60-0316'],
	//			yAxisTitle : '',
	//			remainingDays : [ 0, 0, 0, 0, 0],
	//			actualDays : [ 76, 65, 63, 51, 47],
	//			requirement : 45,
	//			last5Avg : [ 60.8, 64.4, 62.8, 61.8, 60.4]
	//		};


	if (typeof (barChartInput.requirement) === 'number') {
		var requirement = barChartInput.requirement;
		var extrapolatedRequirement = [];
		for (let i = 0; i < barChartInput.xAxisCategories.length; i++) {
			extrapolatedRequirement.push(requirement);
		}
		barChartInput.requirement = extrapolatedRequirement;
	}

	var totalDays = [];
	for (let i = 0; i < barChartInput.xAxisCategories.length; i++) {
		totalDays.push(barChartInput.actualDays[i] + barChartInput.remainingDays[i]);
	}
	barChartInput.totalDays = totalDays;

}

function buildTable() {
	document.createElement('table');
	var rowLegend = [ null, "Remaining Days", "Actual Days", "Total Days", "Last 5 Avg.", "Requirement" ];
	var rowValues = [ barChartInput.xAxisCategories, barChartInput.remainingDays, barChartInput.actualDays, barChartInput.totalDays, barChartInput.last5Avg, barChartInput.requirement ];

	legendTable = document.getElementById("legendTable");

	for (let r = 0; r < rowLegend.length; r++) {
		let row;
		if (r == 0) {
			row = document.createElement('tr')
			row.style.height = '50px';
		} else {
			row = document.createElement('tr')
			row.style.height = '25px';
		}

		appendTds(row, rowLegend[r], rowValues[r], r);

		legendTable.appendChild(row);
	}

	for (let i = 0; i < barChartInput.xAxisCategories.length; i++) {
		document.createElement('td');
	}
}

function appendTds(row, rowLabel, rowData, index) {
	/*var style = {
		border : "1px solid black"
	};*/

	let rowLabelDetail = document.createElement('td');
	rowLabelDetail.style.width = "19%"
	if (rowLabel) {
		var innerHtmlString;
		if (index === 1) {
			innerHtmlString = "<table><tr><td><div style='vertical-align:center; margin:2px; height:10px; width: 40px; background-color:DarkTurquoise'></div></td><td><div>" + rowLabel + "</div></td></tr></table>"
		} else if (index === 2) {
			innerHtmlString = "<table><tr><td><div style='vertical-align:center; margin:2px; height:10px; width: 40px; background-color:SteelBlue'></div></td><td><div>" + rowLabel + "</div></td></tr></table>"
		} else if (index === 3) {
			innerHtmlString = "<table><tr><td><div style='vertical-align:center; margin:2px; height:5px; width: 40px; background-color:white'></div></td><td><div>" + rowLabel + "</div></td></tr></table>"
		} else if (index === 4) {
			innerHtmlString = "<table><tr><td><div style='vertical-align:center; margin:2px; height:5px; width: 40px; background-color:red'></div></td><td><div>" + rowLabel + "</div></td></tr></table>"
		} else if (index === 5) {
			innerHtmlString = "<table><tr><td><div style='vertical-align:center; margin:2px; height:5px; width: 40px; background-color:green'></div></td><td><div>" + rowLabel + "</div></td></tr></table>"
		}
		rowLabelDetail.innerHTML = innerHtmlString;
		rowLabelDetail.style.border = "1px solid black";
	}
	row.appendChild(rowLabelDetail);

	for (let c = 0; c < barChartInput.xAxisCategories.length; c++) {
		let tempTd = document.createElement('td');
		tempTd.style.border = "1px solid black";
		tempTd.innerHTML = rowData[c];
		row.appendChild(tempTd);
	}
}


function onReady(callback) {
	var buildstarted = false;

	var intervalID = window.setInterval(checkReady, 1000);
	function checkReady() {
		if (!buildstarted) {
			buildstarted = true;
			// alert('about to start');
			buildCharts(finishedChart);
		}

		window.clearInterval(intervalID);
		callback.call(this);
	}
}

function show(id, value) {
	document.getElementById(id).style.visibility = value ? 'visible' : 'hidden';
}


function buildCharts(finishedChart) {

 Highcharts.chart('containerChart', {
            title : {
                text : barChartInput.chartTitle
            },
            xAxis : {
                tickLength : 0,
                labels : {
                    enabled : false
                },
                categories : barChartInput.xAxisCategories
            },
            yAxis : {
                min : 0,
                title : {
                    text : barChartInput.yAxisTitle
                }
            },
            legend : {
                enabled : false
            },
            plotOptions : {
                column : {
                    stacking : 'normal'
                }
            },
            series : [ {
                type : 'column',
                name : 'Remaining Days',
                data : barChartInput.remainingDays,
                color : 'DarkTurquoise'
            }, {
                type : 'column',
                name : 'Actual Days',
                data : barChartInput.actualDays,
                color : 'SteelBlue'
            }, {
                type : 'line',
                name : 'Requirement',
                data : barChartInput.requirement,
                color : 'Green',
                lineWidth : 3,
                marker : {
                    enabled : false
                }
            }, {
                type : 'line',
                name : 'Last 5 Avg.',
                data : barChartInput.last5Avg,
                color : 'Red',
                lineWidth : 3,
                marker : {
                    enabled : false
                }
            } ]
        });

    document.getElementById("tableLegend");
    finishedChart = true;
}