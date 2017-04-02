//the process of adding charts anywhere and everywhere with ease depends on how you structure your
//javascript.
//This worked for me, data, defaults then charts

//this is data for the line charts

var lineChartData = {
  labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7", "Data 7", "Data 7", "Data 7", "Data 5", "Data 2", "Data 4", "Data 1", "Data 7"],
  datasets: [{
    fillColor: "#560620",
    strokeColor: "white",
    strokeLineWidth: 18,
    pointColor: "white",
    data: [20, 90, 140, 25, 53, 67, 47, 98, 30, 80, 20, 40, 10, 60]
  }]
};

// this is data for the donut chart
var data = [{
  value: 300,
  color: "#560620",
  highlight: "#560620",
  label: "Red"
}, {
  value: 50,
  color: "#fff",
  highlight: "#560620",
  label: "Green"
}, {
  value: 100,
  color: "#560620",
  highlight: "#560620",
  label: "Yellow"
}];

//this is data for the bar chart

var barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "My First dataset",
    fillColor: "#560620",
    strokeColor: "rgba(220,220,220,0.8)",
    highlightFill: "#560620",
    highlightStroke: "rgba(220,220,220,1)",
    data: [65, 59, 80, 81, 56, 55, 40]
  }, {
    label: "My Second dataset",
    fillColor: "#fff",
    strokeColor: "rgba(151,187,205,0.8)",
    highlightFill: "#fff",
    highlightStroke: "rgba(151,187,205,1)",
    data: [28, 48, 40, 19, 86, 27, 90]
  }]
};
// these are some defaults you can use for customizing your charts

Chart.defaults.global.responsive = true;
Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "white";
Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 16;
Chart.defaults.global.showScale = false;
Chart.defaults.global.pointDotStrokeWidth = 2;

// then i just duplicated the chart specific options
var ctx = document.getElementById("canvas").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
  pointDotRadius: 3,
  bezierCurve: true,
  datasetFill: true,
  datasetStroke: true,
  scaleShowVerticalLines: false,
  scaleShowHorizontalLines: false,
  pointDotStrokeWidth: 4,
  fillColor: "rgba(220,220,220,0.2)",
  scaleGridLineColor: "black"
});

var cty = document.getElementById("myChart").getContext("2d");
var myDoughnutChart = new Chart(cty).Doughnut(data, {
  pointDotRadius: 3,
  bezierCurve: true,
  datasetFill: true,
  datasetStroke: true,
  scaleShowVerticalLines: false,
  scaleShowHorizontalLines: false,
  pointDotStrokeWidth: 4,
  fillColor: "rgba(220,220,220,0.2)",
  scaleGridLineColor: "black"
});

var ctl = document.getElementById("myChartbar").getContext("2d");
var myBarChart = new Chart(ctl).Bar(barData, {
  pointDotRadius: 3,
  bezierCurve: true,
  datasetFill: true,
  datasetStroke: true,
  scaleShowVerticalLines: false,
  scaleShowHorizontalLines: false,
  pointDotStrokeWidth: 4,
  fillColor: "rgba(220,220,220,0.2)",
  scaleGridLineColor: "black"
});
Raw
