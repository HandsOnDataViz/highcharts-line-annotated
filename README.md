# Annotated Line Chart with Highcharts

![Annotated line chart](./annotated-line-example.png)

## Demo
https://handsondataviz.github.io/highcharts-line-annotated/

Sample data from the World Bank, https://databank.worldbank.org/source/world-development-indicators

## Create your own 
See chapter 10: Chartjs and Highcharts templates in [Hands-On Data Visualization](https://handsondataviz.org) by Jack Dougherty and Ilya Ilyankou

In `data.csv`, each row is a point in time (x-axis). First column are x-axis values,
second and all other columns except the last one column are y-axis values.
The final column contains annotations.
You can use HTML tags inside an annotation (such as `<br>` to break for a new line,
or `<b>bold text</b>` for bold text).

In `script.js`, you can customize the values of variables shown in the code snippet below. For more customization, see [Highcharts API reference](https://api.highcharts.com/highcharts/).

```javascript
var TITLE = 'Air Transport, Passengers Carried (1970–2018)';

// Caption underneath the chart
var CAPTION = 'Source: The World Bank'

// Add download link to the caption
CAPTION += '<br><a href="./data.csv" style="color: blue">Download dataset</a> powering this visualization';

var X_AXIS = 'Year';  // x-axis label and label in tooltip
var Y_AXIS = 'Passengers'; // y-axis label and label in tooltip

var BEGIN_AT_ZERO = true;  // Should y-axis start from 0? `true` or `false`

var SHOW_LEGEND = true; // `true` to show the legend, `false` to hide
```

## See also
See **Chart.js Code Templates** on GitHub: https://github.com/HandsOnDataViz/chartjs-templates
