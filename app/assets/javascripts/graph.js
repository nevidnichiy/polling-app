var Graph = function(selector, data, kind) {
  this.selector = selector;
  this.data = data;
  this.kind = kind;
};

Graph.prototype.getData = function () {

  var _this = this;

  var dataWithCaptions = this.data.data.map(function(element, index, array) {
    return [ _this.data.x_axis.series[index], element ];
  });

  return google.visualization.arrayToDataTable([
    [ this.data.x_axis.legend, this.data.y_axis.legend ],
    ].concat(dataWithCaptions));
  
  return data;
}

Graph.prototype.render = function() {

  // Set chart options
  var options = {'title': this.data.title,
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart($(this.selector)[0]);
  chart.draw(this.getData(), options);
};

Graph.instances = [];

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Task', 'Hours per Day'],
//     ['Work',     11],
//     ['Eat',      2],
//     ['Commute',  2],
//     ['Watch TV', 2],
//     ['Sleep',    7]
//   ]);

//   var options = {
//     title: 'My Daily Activities',
//     'width':800,
//     'height':500
//   };

//   var chart = new google.visualization.ColumnChart(document.getElementById('tab-stats'));

//   chart.draw(data, options);
// }