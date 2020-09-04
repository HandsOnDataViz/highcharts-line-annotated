var TITLE = 'Air Transport, Passengers Carried (Canada)';

// Caption underneath the chart
var CAPTION = 'Source: The World Bank'

// Add download link to the caption
CAPTION += '<br><a href="./data.csv" style="color: blue">Download dataset</a> powering this visualization';

var X_AXIS = 'Year';  // x-axis label and label in tooltip
var Y_AXIS = 'Passengers'; // y-axis label and label in tooltip

var BEGIN_AT_ZERO = false;  // Should x-axis start from 0? `true` or `false`

var SHOW_GRID = true; // `true` to show the grid, `false` to hide
var SHOW_LEGEND = false; // `true` to show the legend, `false` to hide

var SERIES_NAME = 'Passengers Carried'
var SERIES_COLOR = 'black'

$(document).ready(function() {

  // Read data file and create a chart
  $.get('./data.csv', function(csvString) {

    var data = Papa.parse(csvString).data;

    var annotationPoints = data
      .filter(function(x) {return x[2] !== ""})
      .map(function(x) {
        return {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: x[0],
            y: x[1]
          },
          text: x[2]
        }
      })

    // Now create the chart
    Highcharts.chart('container', {

      chart: {
        type: 'line',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600
        }
      },

      title: { text: TITLE },
      caption: { text: CAPTION },
      credits: { enabled: false },

      annotations: [{
        labelOptions: {
          backgroundColor: 'rgba(255,255,255,0.8)',
          verticalAlign: 'top',
          y: 10
        },
        labels: annotationPoints
      }],

      xAxis: {
        title: { text: X_AXIS },
        labels: { format: '{value}' },
        minRange: 0,
      },

      yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.35,
        title: { text: Y_AXIS },
        labels: { formatter: function(x) {return x.value.toLocaleString()} }
      },

      tooltip: {
          /*headerFormat: 'Distance: {point.x:.1f} km<br>',
          pointFormat: '{point.y} m a. s. l.',
          shared: true */
      },

      legend: {
          enabled: SHOW_LEGEND
      },

      series: [{
        data: data.map(function(x) {return [ parseFloat(x[0]), parseFloat(x[1])]}),
        lineColor: SERIES_COLOR,
        color: SERIES_COLOR,
        fillOpacity: 0.5,
        name: SERIES_NAME,
        marker: {
            enabled: false
        },
        threshold: null
      }]

    });

  });

});