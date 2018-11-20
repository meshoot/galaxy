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
galaxy.selectAll('g').data(data).enter().append('circle').attr('r', 10).attr('cy', function (d, i) {
  return geneneratePostion(i).y;
}).attr('cx', function (d, i) {
  return geneneratePostion(i).x;
});

function geneneratePostion(i, r) {
  var pos = {};
  var parrentR = 29;
  var angle = i + 1 * Math.PI;
  var width = galaxy.attr('width') - parrentR * 2;
  var height = galaxy.attr('height') - parrentR * 2;
  pos.x = parrentR + width / 2 + height / 2 * Math.sin(angle);
  pos.y = parrentR + height / 2 + width / 2 * Math.cos(angle);
  return pos;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnYWxheHkgPSBkMy5zZWxlY3QoJyNnYWxheHknKTtcbnZhciB0b3RhbCA9IDI0NDtcbnZhciBkYXRhID0gW3tcbiAgbmFtZTogJ0lORFVTVFJZJyxcbiAgdmFsdWU6IDEwXG59LCB7XG4gIG5hbWU6ICdTVVNUQUlOQUJJTElUWScsXG4gIHZhbHVlOiA1XG59LCB7XG4gIG5hbWU6ICdTVEFUVVMnLFxuICB2YWx1ZTogNVxufSwge1xuICBuYW1lOiAnU1VQUExJRVInLFxuICB2YWx1ZTogMzVcbn0sIHtcbiAgbmFtZTogJ0NPVU5UUlknLFxuICB2YWx1ZTogOTNcbn1dO1xuZ2FsYXh5LnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoJ2NpcmNsZScpLmF0dHIoJ3InLCAxMCkuYXR0cignY3knLCBmdW5jdGlvbiAoZCwgaSkge1xuICByZXR1cm4gZ2VuZW5lcmF0ZVBvc3Rpb24oaSkueTtcbn0pLmF0dHIoJ2N4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgcmV0dXJuIGdlbmVuZXJhdGVQb3N0aW9uKGkpLng7XG59KTtcblxuZnVuY3Rpb24gZ2VuZW5lcmF0ZVBvc3Rpb24oaSwgcikge1xuICB2YXIgcG9zID0ge307XG4gIHZhciBwYXJyZW50UiA9IDI5O1xuICB2YXIgYW5nbGUgPSBpICsgMSAqIE1hdGguUEk7XG4gIHZhciB3aWR0aCA9IGdhbGF4eS5hdHRyKCd3aWR0aCcpIC0gcGFycmVudFIgKiAyO1xuICB2YXIgaGVpZ2h0ID0gZ2FsYXh5LmF0dHIoJ2hlaWdodCcpIC0gcGFycmVudFIgKiAyO1xuICBwb3MueCA9IHBhcnJlbnRSICsgd2lkdGggLyAyICsgaGVpZ2h0IC8gMiAqIE1hdGguc2luKGFuZ2xlKTtcbiAgcG9zLnkgPSBwYXJyZW50UiArIGhlaWdodCAvIDIgKyB3aWR0aCAvIDIgKiBNYXRoLmNvcyhhbmdsZSk7XG4gIHJldHVybiBwb3M7XG59Il0sImZpbGUiOiJhcHAuanMifQ==
