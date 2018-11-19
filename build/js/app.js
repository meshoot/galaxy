"use strict";

var GALAXY = d3.select('#galaxy');
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
GALAXY.select('g.main').append('circle').attr('cx', GALAXY.attr('width') / 2).attr('cy', GALAXY.attr('height') / 2).attr('r', 29).attr('fill', '#228AA2');
GALAXY.selectAll('g.data').data(data).append('circle').attr('r', function (d) {
  return calcPercent(d.value);
}).attr('cx', function (d, i) {
  return geneneratePostion(i, d.value).x;
}).attr('cy', function (d, i) {
  return geneneratePostion(i, d.value).y;
}).attr('fill', 'green');

function setPosition(radius) {
  var maxWidth = GALAXY.attr('width');
  var maxHeight = GALAXY.attr('height');
  var pos = {};
  var genTry = 10;

  if (positions.length) {
    do {
      pos.x = geneneratePostion().x;
      pos.y = geneneratePostion().y;
      pos.r = radius;
    } while (overlap(pos) || genTry == 0);

    {
      pos.x = geneneratePostion().x;
      pos.y = geneneratePostion().y;
      genTry--;
    }
  }

  function overlap(o) {
    var x1 = o.x,
        y1 = o.y,
        r1 = o.r;
    positions.forEach(function (el) {
      var x2 = el.x,
          y2 = el.y,
          r2 = el.r;
      var dist = x2 - x1 ^ 2 + (y2 - y1) ^ 2 ^ 1 / 2;

      if (dist < r1 + r2) {
        return true;
      } else {
        return false;
      }
    });
  }

  return pos;
}

;

function calcPercent(value) {
  var total_percent = 100 / (total / value);
  var visual_percent = 29 / total_percent;
  return visual_percent;
}

function geneneratePostion(i, r) {
  var pos = {};
  var angle = data.length * i + 1 * Math.PI;
  var radius = calcPercent(total, r);
  var centerX = GALAXY.attr('width') / 2;
  var centerY = GALAXY.attr('height') / 2;
  pos.x = (centerY + centerX) * Math.sin(angle);
  pos.y = (centerY + centerX) * Math.cos(angle);
  return pos;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBHQUxBWFkgPSBkMy5zZWxlY3QoJyNnYWxheHknKTtcbnZhciB0b3RhbCA9IDI0NDtcbnZhciBkYXRhID0gW3tcbiAgbmFtZTogJ0lORFVTVFJZJyxcbiAgdmFsdWU6IDEwXG59LCB7XG4gIG5hbWU6ICdTVVNUQUlOQUJJTElUWScsXG4gIHZhbHVlOiA1XG59LCB7XG4gIG5hbWU6ICdTVEFUVVMnLFxuICB2YWx1ZTogNVxufSwge1xuICBuYW1lOiAnU1VQUExJRVInLFxuICB2YWx1ZTogMzVcbn0sIHtcbiAgbmFtZTogJ0NPVU5UUlknLFxuICB2YWx1ZTogOTNcbn1dO1xuR0FMQVhZLnNlbGVjdCgnZy5tYWluJykuYXBwZW5kKCdjaXJjbGUnKS5hdHRyKCdjeCcsIEdBTEFYWS5hdHRyKCd3aWR0aCcpIC8gMikuYXR0cignY3knLCBHQUxBWFkuYXR0cignaGVpZ2h0JykgLyAyKS5hdHRyKCdyJywgMjkpLmF0dHIoJ2ZpbGwnLCAnIzIyOEFBMicpO1xuR0FMQVhZLnNlbGVjdEFsbCgnZy5kYXRhJykuZGF0YShkYXRhKS5hcHBlbmQoJ2NpcmNsZScpLmF0dHIoJ3InLCBmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gY2FsY1BlcmNlbnQoZC52YWx1ZSk7XG59KS5hdHRyKCdjeCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gIHJldHVybiBnZW5lbmVyYXRlUG9zdGlvbihpLCBkLnZhbHVlKS54O1xufSkuYXR0cignY3knLCBmdW5jdGlvbiAoZCwgaSkge1xuICByZXR1cm4gZ2VuZW5lcmF0ZVBvc3Rpb24oaSwgZC52YWx1ZSkueTtcbn0pLmF0dHIoJ2ZpbGwnLCAnZ3JlZW4nKTtcblxuZnVuY3Rpb24gc2V0UG9zaXRpb24ocmFkaXVzKSB7XG4gIHZhciBtYXhXaWR0aCA9IEdBTEFYWS5hdHRyKCd3aWR0aCcpO1xuICB2YXIgbWF4SGVpZ2h0ID0gR0FMQVhZLmF0dHIoJ2hlaWdodCcpO1xuICB2YXIgcG9zID0ge307XG4gIHZhciBnZW5UcnkgPSAxMDtcblxuICBpZiAocG9zaXRpb25zLmxlbmd0aCkge1xuICAgIGRvIHtcbiAgICAgIHBvcy54ID0gZ2VuZW5lcmF0ZVBvc3Rpb24oKS54O1xuICAgICAgcG9zLnkgPSBnZW5lbmVyYXRlUG9zdGlvbigpLnk7XG4gICAgICBwb3MuciA9IHJhZGl1cztcbiAgICB9IHdoaWxlIChvdmVybGFwKHBvcykgfHwgZ2VuVHJ5ID09IDApO1xuXG4gICAge1xuICAgICAgcG9zLnggPSBnZW5lbmVyYXRlUG9zdGlvbigpLng7XG4gICAgICBwb3MueSA9IGdlbmVuZXJhdGVQb3N0aW9uKCkueTtcbiAgICAgIGdlblRyeS0tO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG92ZXJsYXAobykge1xuICAgIHZhciB4MSA9IG8ueCxcbiAgICAgICAgeTEgPSBvLnksXG4gICAgICAgIHIxID0gby5yO1xuICAgIHBvc2l0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgdmFyIHgyID0gZWwueCxcbiAgICAgICAgICB5MiA9IGVsLnksXG4gICAgICAgICAgcjIgPSBlbC5yO1xuICAgICAgdmFyIGRpc3QgPSB4MiAtIHgxIF4gMiArICh5MiAtIHkxKSBeIDIgXiAxIC8gMjtcblxuICAgICAgaWYgKGRpc3QgPCByMSArIHIyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBvcztcbn1cblxuO1xuXG5mdW5jdGlvbiBjYWxjUGVyY2VudCh2YWx1ZSkge1xuICB2YXIgdG90YWxfcGVyY2VudCA9IDEwMCAvICh0b3RhbCAvIHZhbHVlKTtcbiAgdmFyIHZpc3VhbF9wZXJjZW50ID0gMjkgLyB0b3RhbF9wZXJjZW50O1xuICByZXR1cm4gdmlzdWFsX3BlcmNlbnQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVuZXJhdGVQb3N0aW9uKGksIHIpIHtcbiAgdmFyIHBvcyA9IHt9O1xuICB2YXIgYW5nbGUgPSBkYXRhLmxlbmd0aCAqIGkgKyAxICogTWF0aC5QSTtcbiAgdmFyIHJhZGl1cyA9IGNhbGNQZXJjZW50KHRvdGFsLCByKTtcbiAgdmFyIGNlbnRlclggPSBHQUxBWFkuYXR0cignd2lkdGgnKSAvIDI7XG4gIHZhciBjZW50ZXJZID0gR0FMQVhZLmF0dHIoJ2hlaWdodCcpIC8gMjtcbiAgcG9zLnggPSAoY2VudGVyWSArIGNlbnRlclgpICogTWF0aC5zaW4oYW5nbGUpO1xuICBwb3MueSA9IChjZW50ZXJZICsgY2VudGVyWCkgKiBNYXRoLmNvcyhhbmdsZSk7XG4gIHJldHVybiBwb3M7XG59Il0sImZpbGUiOiJhcHAuanMifQ==
