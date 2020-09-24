var TITLE = 'Air Transport, Passengers Carried (1970–2018)';

// Caption underneath the chart
var CAPTION = 'Source: The World Bank';

// Add download link to the caption
CAPTION += '<br><a href="https://github.com/HandsOnDataViz/highcharts-line-annotated" style="color:blue">View data and code</a>, \
created by <a href="https://handsondataviz.org/" style="color: blue">HandsOnDataViz</a> \
with <a href="https://www.highcharts.com/" style="color: blue">Highcharts</a>';

// x-axis label and label in tooltip
var X_AXIS = 'Year';

// y-axis label and label in tooltip
var Y_AXIS = 'Passengers';

// Should y-axis start from 0? `true` or `false`
var BEGIN_AT_ZERO = true;

// `true` to show the legend, `false` to hide
var SHOW_LEGEND = true;


$(document).ready(function() {

  // Read data file and create a chart
  $.get('./data.csv', function(csvString) {

    var data = Papa.parse(csvString).data;
    var nSeries = data[0].length - 2

    var annotationPoints = data
      .filter(function(x) {return x[nSeries+1] !== ""})
      .map(function(x) {
        return {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: x[0],
            y: x[1]
          },
          text: x[nSeries+1]
        }
      })

    var series = []
    for (var i = 1; i <= nSeries; i++) {
      series.push({
        data: data.map(function(x) { return [parseFloat(x[0]), parseFloat(x[i])] }),
        name: data[0][i],
        marker: { enabled: false },
      })
    }

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
      },

      yAxis: {
        startOnTick: true,
        min: BEGIN_AT_ZERO ? 0 : null,
        title: { text: Y_AXIS },
        labels: { formatter: function(x) {return x.value.toLocaleString()} }
      },

      legend: { enabled: SHOW_LEGEND },

      series: series,

    });

  });

});