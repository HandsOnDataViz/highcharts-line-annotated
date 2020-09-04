# Annotated Line Chart with Highcharts

![Annotated line chart](./annotated-line-example.png)

In `data.csv`, each row is a point in time (x-axis). First column are x-axis values,
second column are y-axis values. The third column contains annotations.
You can use HTML tags inside an annotation (such as `<br>` to break for a new line,
or `<b>bold text</b>` for bold text).

In `script.js`, you can customize the values of variables shown in the code snippet below. For more customization, see [Highcharts API reference](https://api.highcharts.com/highcharts/).

```javascript
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
```

## See also
See **Chart.js Code Templates** on GitHub: https://github.com/HandsOnDataViz/chartjs-templates

Example data from the World Bank, https://databank.worldbank.org/source/world-development-indicators