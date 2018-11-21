"use strict";

var galaxy = d3.select('#galaxy');
var total = 244;
var data = [{
  name: 'INDUSTRY',
  value: 10
}, {
  name: 'SUSTAINABILITY',
  value: 5
}, {
  name: 'STATUS',
  value: 5
}, {
  name: 'SUPPLIER',
  value: 35
}, {
  name: 'COUNTRY',
  value: 93
}];
var positions = [];
galaxy.selectAll('g').data(data).enter().append('circle').attr('r', function (d) {
  return d.value / 4.35;
}).attr('cy', function (d, i) {
  return geneneratePostion(i).y;
}).attr('cx', function (d, i) {
  return geneneratePostion(i).x;
}).attr('class', 'data');
galaxy.selectAll('g').data(positions).enter().append('line').attr('x1', function (d) {
  return d.x;
}).attr('x2', galaxy.attr('width') / 2).attr('y1', function (d) {
  return d.y;
}).attr('y2', galaxy.attr('height') / 2).attr('stroke', '#D4D4D4');
galaxy.append('circle').attr('cx', galaxy.attr('width') / 2).attr('cy', galaxy.attr('height') / 2).attr('r', 28).attr('fill', '#228AA2');

function geneneratePostion(i, r) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnYWxheHkgPSBkMy5zZWxlY3QoJyNnYWxheHknKTtcbnZhciB0b3RhbCA9IDI0NDtcbnZhciBkYXRhID0gW3tcbiAgbmFtZTogJ0lORFVTVFJZJyxcbiAgdmFsdWU6IDEwXG59LCB7XG4gIG5hbWU6ICdTVVNUQUlOQUJJTElUWScsXG4gIHZhbHVlOiA1XG59LCB7XG4gIG5hbWU6ICdTVEFUVVMnLFxuICB2YWx1ZTogNVxufSwge1xuICBuYW1lOiAnU1VQUExJRVInLFxuICB2YWx1ZTogMzVcbn0sIHtcbiAgbmFtZTogJ0NPVU5UUlknLFxuICB2YWx1ZTogOTNcbn1dO1xudmFyIHBvc2l0aW9ucyA9IFtdO1xuZ2FsYXh5LnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoJ2NpcmNsZScpLmF0dHIoJ3InLCBmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gZC52YWx1ZSAvIDQuMzU7XG59KS5hdHRyKCdjeScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gIHJldHVybiBnZW5lbmVyYXRlUG9zdGlvbihpKS55O1xufSkuYXR0cignY3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICByZXR1cm4gZ2VuZW5lcmF0ZVBvc3Rpb24oaSkueDtcbn0pLmF0dHIoJ2NsYXNzJywgJ2RhdGEnKTtcbmdhbGF4eS5zZWxlY3RBbGwoJ2cnKS5kYXRhKHBvc2l0aW9ucykuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKS5hdHRyKCd4MScsIGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBkLng7XG59KS5hdHRyKCd4MicsIGdhbGF4eS5hdHRyKCd3aWR0aCcpIC8gMikuYXR0cigneTEnLCBmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gZC55O1xufSkuYXR0cigneTInLCBnYWxheHkuYXR0cignaGVpZ2h0JykgLyAyKS5hdHRyKCdzdHJva2UnLCAnI0Q0RDRENCcpO1xuZ2FsYXh5LmFwcGVuZCgnY2lyY2xlJykuYXR0cignY3gnLCBnYWxheHkuYXR0cignd2lkdGgnKSAvIDIpLmF0dHIoJ2N5JywgZ2FsYXh5LmF0dHIoJ2hlaWdodCcpIC8gMikuYXR0cigncicsIDI4KS5hdHRyKCdmaWxsJywgJyMyMjhBQTInKTtcblxuZnVuY3Rpb24gZ2VuZW5lcmF0ZVBvc3Rpb24oaSwgcikge1xuICB2YXIgcG9zID0ge307XG4gIHZhciBwYXJyZW50UiA9IDI5O1xuICB2YXIgYW5nbGUgPSBpICsgMSAqIE1hdGguUEk7XG4gIHZhciB3aWR0aCA9IGdhbGF4eS5hdHRyKCd3aWR0aCcpIC0gcGFycmVudFIgKiAyO1xuICB2YXIgaGVpZ2h0ID0gZ2FsYXh5LmF0dHIoJ2hlaWdodCcpIC0gcGFycmVudFIgKiAyO1xuICBwb3MueCA9IHBhcnJlbnRSICsgd2lkdGggLyAyICsgaGVpZ2h0IC8gMiAqIE1hdGguc2luKC1hbmdsZSk7XG4gIHBvcy55ID0gcGFycmVudFIgKyBoZWlnaHQgLyAyICsgd2lkdGggLyAyICogTWF0aC5jb3MoLWFuZ2xlKTtcbiAgcG9zaXRpb25zLnB1c2gocG9zKTtcbiAgcmV0dXJuIHBvcztcbn0iXSwiZmlsZSI6ImFwcC5qcyJ9
