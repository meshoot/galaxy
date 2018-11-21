"use strict";

var galaxy = d3.select('#galaxy');
var total = 244;
var data = [{
  name: 'INDUSTRY',
  value: 0,
  x: 54,
  y: 54
}, {
  name: 'SUSTAINABILITY',
  value: 100,
  x: 180,
  y: 73.13
}, {
  name: 'STATUS',
  value: 151,
  x: 46.42,
  y: 212.14
}, {
  name: 'SUPPLIER',
  value: 0,
  x: 142.07,
  y: 249.42
}, {
  name: 'COUNTRY',
  value: 93,
  x: 207.42,
  y: 171.74
}];
var positions = [{
  x: 124.99,
  y: 54
}, {
  x: 226.81,
  y: 98.13
}, {
  x: 235.02,
  y: 189.95
}, {
  x: 142.07,
  y: 245.03
}, {
  x: 33.42,
  y: 212.74
}, {
  x: 124.99,
  y: 54
}, {
  x: 226.81,
  y: 98.13
}, {
  x: 235.02,
  y: 189.95
}, {
  x: 142.07,
  y: 245.03
}, {
  x: 33.42,
  y: 212.74
}];
galaxy.selectAll('svg').data(data).enter().append('g').append('circle').attr('r', function (d) {
  return calcWidth(calcPercent(total, d.value)) / 2;
}).attr('cx', function (d, i) {
  return d.x;
}).attr('cy', function (d, i) {
  return d.y;
}).attr('class', 'data');
galaxy.selectAll('g').append('text').text(function (d) {
  return d.name;
}).attr('class', 'db-score-diagramm__title').attr('x', function (d, i) {
  return d.x / 2;
}).attr('y', function (d, i) {
  return d.y + 30;
}).text(function (d) {
  return d.name;
});
galaxy.selectAll('g').data(data).enter().append('line').attr('x1', function (d) {
  return genenerateLinePosition(d.x, d.y).x;
}).attr('x2', galaxy.attr('width') / 2).attr('y1', function (d) {
  return d.y;
}).attr('y2', galaxy.attr('height') / 2).attr('stroke', '#D4D4D4');
galaxy.append('circle').attr('cx', galaxy.attr('width') / 2).attr('cy', galaxy.attr('height') / 2).attr('r', 28).attr('fill', '#228AA2');

function geneneratePostion(i) {
  var pos = {};
  var parrentR = 29;
  var angle = i + 1 * Math.PI;
  var width = galaxy.attr('width') - parrentR * 2;
  var height = galaxy.attr('height') - parrentR * 2;
  pos.x = parrentR + width / 2 + height / 2 * Math.sin(-angle);
  pos.y = parrentR + height / 2 + width / 2 * Math.cos(-angle);
  positions.push(pos);
  return pos;
}

function genenerateLinePosition(x, y) {
  var angle = (x - 20) / (y - 20);
  var pos = {};
  pos.x = 125 * Math.sin(angle);
  pos.y = 125 * Math.cos(angle);
  return pos;
}

function calcPercent(total, data) {
  return 100 / (total / data);
}

function calcWidth(data) {
  return 58 / 100 * data;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnYWxheHkgPSBkMy5zZWxlY3QoJyNnYWxheHknKTtcbnZhciB0b3RhbCA9IDI0NDtcbnZhciBkYXRhID0gW3tcbiAgbmFtZTogJ0lORFVTVFJZJyxcbiAgdmFsdWU6IDAsXG4gIHg6IDU0LFxuICB5OiA1NFxufSwge1xuICBuYW1lOiAnU1VTVEFJTkFCSUxJVFknLFxuICB2YWx1ZTogMTAwLFxuICB4OiAxODAsXG4gIHk6IDczLjEzXG59LCB7XG4gIG5hbWU6ICdTVEFUVVMnLFxuICB2YWx1ZTogMTUxLFxuICB4OiA0Ni40MixcbiAgeTogMjEyLjE0XG59LCB7XG4gIG5hbWU6ICdTVVBQTElFUicsXG4gIHZhbHVlOiAwLFxuICB4OiAxNDIuMDcsXG4gIHk6IDI0OS40MlxufSwge1xuICBuYW1lOiAnQ09VTlRSWScsXG4gIHZhbHVlOiA5MyxcbiAgeDogMjA3LjQyLFxuICB5OiAxNzEuNzRcbn1dO1xudmFyIHBvc2l0aW9ucyA9IFt7XG4gIHg6IDEyNC45OSxcbiAgeTogNTRcbn0sIHtcbiAgeDogMjI2LjgxLFxuICB5OiA5OC4xM1xufSwge1xuICB4OiAyMzUuMDIsXG4gIHk6IDE4OS45NVxufSwge1xuICB4OiAxNDIuMDcsXG4gIHk6IDI0NS4wM1xufSwge1xuICB4OiAzMy40MixcbiAgeTogMjEyLjc0XG59LCB7XG4gIHg6IDEyNC45OSxcbiAgeTogNTRcbn0sIHtcbiAgeDogMjI2LjgxLFxuICB5OiA5OC4xM1xufSwge1xuICB4OiAyMzUuMDIsXG4gIHk6IDE4OS45NVxufSwge1xuICB4OiAxNDIuMDcsXG4gIHk6IDI0NS4wM1xufSwge1xuICB4OiAzMy40MixcbiAgeTogMjEyLjc0XG59XTtcbmdhbGF4eS5zZWxlY3RBbGwoJ3N2ZycpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hcHBlbmQoJ2NpcmNsZScpLmF0dHIoJ3InLCBmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gY2FsY1dpZHRoKGNhbGNQZXJjZW50KHRvdGFsLCBkLnZhbHVlKSkgLyAyO1xufSkuYXR0cignY3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICByZXR1cm4gZC54O1xufSkuYXR0cignY3knLCBmdW5jdGlvbiAoZCwgaSkge1xuICByZXR1cm4gZC55O1xufSkuYXR0cignY2xhc3MnLCAnZGF0YScpO1xuZ2FsYXh5LnNlbGVjdEFsbCgnZycpLmFwcGVuZCgndGV4dCcpLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIGQubmFtZTtcbn0pLmF0dHIoJ2NsYXNzJywgJ2RiLXNjb3JlLWRpYWdyYW1tX190aXRsZScpLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICByZXR1cm4gZC54IC8gMjtcbn0pLmF0dHIoJ3knLCBmdW5jdGlvbiAoZCwgaSkge1xuICByZXR1cm4gZC55ICsgMzA7XG59KS50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBkLm5hbWU7XG59KTtcbmdhbGF4eS5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKCdsaW5lJykuYXR0cigneDEnLCBmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gZ2VuZW5lcmF0ZUxpbmVQb3NpdGlvbihkLngsIGQueSkueDtcbn0pLmF0dHIoJ3gyJywgZ2FsYXh5LmF0dHIoJ3dpZHRoJykgLyAyKS5hdHRyKCd5MScsIGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBkLnk7XG59KS5hdHRyKCd5MicsIGdhbGF4eS5hdHRyKCdoZWlnaHQnKSAvIDIpLmF0dHIoJ3N0cm9rZScsICcjRDRENEQ0Jyk7XG5nYWxheHkuYXBwZW5kKCdjaXJjbGUnKS5hdHRyKCdjeCcsIGdhbGF4eS5hdHRyKCd3aWR0aCcpIC8gMikuYXR0cignY3knLCBnYWxheHkuYXR0cignaGVpZ2h0JykgLyAyKS5hdHRyKCdyJywgMjgpLmF0dHIoJ2ZpbGwnLCAnIzIyOEFBMicpO1xuXG5mdW5jdGlvbiBnZW5lbmVyYXRlUG9zdGlvbihpKSB7XG4gIHZhciBwb3MgPSB7fTtcbiAgdmFyIHBhcnJlbnRSID0gMjk7XG4gIHZhciBhbmdsZSA9IGkgKyAxICogTWF0aC5QSTtcbiAgdmFyIHdpZHRoID0gZ2FsYXh5LmF0dHIoJ3dpZHRoJykgLSBwYXJyZW50UiAqIDI7XG4gIHZhciBoZWlnaHQgPSBnYWxheHkuYXR0cignaGVpZ2h0JykgLSBwYXJyZW50UiAqIDI7XG4gIHBvcy54ID0gcGFycmVudFIgKyB3aWR0aCAvIDIgKyBoZWlnaHQgLyAyICogTWF0aC5zaW4oLWFuZ2xlKTtcbiAgcG9zLnkgPSBwYXJyZW50UiArIGhlaWdodCAvIDIgKyB3aWR0aCAvIDIgKiBNYXRoLmNvcygtYW5nbGUpO1xuICBwb3NpdGlvbnMucHVzaChwb3MpO1xuICByZXR1cm4gcG9zO1xufVxuXG5mdW5jdGlvbiBnZW5lbmVyYXRlTGluZVBvc2l0aW9uKHgsIHkpIHtcbiAgdmFyIGFuZ2xlID0gKHggLSAyMCkgLyAoeSAtIDIwKTtcbiAgdmFyIHBvcyA9IHt9O1xuICBwb3MueCA9IDEyNSAqIE1hdGguc2luKGFuZ2xlKTtcbiAgcG9zLnkgPSAxMjUgKiBNYXRoLmNvcyhhbmdsZSk7XG4gIHJldHVybiBwb3M7XG59XG5cbmZ1bmN0aW9uIGNhbGNQZXJjZW50KHRvdGFsLCBkYXRhKSB7XG4gIHJldHVybiAxMDAgLyAodG90YWwgLyBkYXRhKTtcbn1cblxuZnVuY3Rpb24gY2FsY1dpZHRoKGRhdGEpIHtcbiAgcmV0dXJuIDU4IC8gMTAwICogZGF0YTtcbn0iXSwiZmlsZSI6ImFwcC5qcyJ9
