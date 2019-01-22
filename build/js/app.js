"use strict";

var width = 800;
var height = 800;
var svg = d3.select("body").append("svg").attr("width", width).attr("height", height).attr("viewBox", [0, 0, width, height]);
var scale = d3.scaleOrdinal(d3.schemeCategory10);

var color = function color(d) {
  return scale(d.group);
};

var drag = function drag(simulation) {
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
};

d3.json("/js/graph.json", function (error, graph) {
  if (error) throw error;
  var links = graph.links.map(function (d) {
    return Object.create(d);
  });
  var nodes = graph.nodes.map(function (d) {
    return Object.create(d);
  });
  var simulation = d3.forceSimulation(nodes).force("charge", d3.forceManyBody()).force("link", d3.forceLink(links).id(function (d) {
    return d.id;
  }).strength(1.7).distance(70)).force("center", d3.forceCenter(width / 2, height / 2)).on("tick", ticked);
  var link = svg.append("g").attr("stroke", "#D4D4D4").attr("stroke-opacity", 0.6).selectAll("line").data(links).enter().append("line").attr("stroke-width", 1);
  var node = svg.append("g").attr("stroke", "#ffffff").attr("stroke-width", 1.5).selectAll("circle").data(nodes).enter().append("circle").attr("r", function (d) {
    return d.title === 'root' ? 29 : Math.max(d.value / 4, 20);
  }).attr("fill", function (d) {
    return d.title === 'root' ? '#228AA2' : color(d.value);
  }).call(drag(simulation));
  node.append("title").text(function (d) {
    return d.title;
  });
  var text = svg.append("g").attr("stroke-width", 0.3).selectAll('text').data(nodes).enter().append("text").attr('text-anchor', 'middle').attr("color", '#ffffff').text(function (d) {
    return d.value;
  }).call(drag(simulation));
  text.append("title").text(function (d) {
    return d.title;
  }).attr("color", "#FFFFFF");

  function ticked() {
    link.attr("x1", function (d) {
      return d.source.x;
    }).attr("y1", function (d) {
      return d.source.y;
    }).attr("x2", function (d) {
      return d.target.x;
    }).attr("y2", function (d) {
      return d.target.y;
    });
    node.attr("cx", function (d) {
      return d.x;
    }).attr("cy", function (d) {
      return d.y;
    });
    text.attr("x", function (d) {
      return d.x;
    }).attr("y", function (d) {
      return d.y + 5;
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB3aWR0aCA9IDgwMDtcbnZhciBoZWlnaHQgPSA4MDA7XG52YXIgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCkuYXR0cihcInZpZXdCb3hcIiwgWzAsIDAsIHdpZHRoLCBoZWlnaHRdKTtcbnZhciBzY2FsZSA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxudmFyIGNvbG9yID0gZnVuY3Rpb24gY29sb3IoZCkge1xuICByZXR1cm4gc2NhbGUoZC5ncm91cCk7XG59O1xuXG52YXIgZHJhZyA9IGZ1bmN0aW9uIGRyYWcoc2ltdWxhdGlvbikge1xuICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgZC5meCA9IGQueDtcbiAgICBkLmZ5ID0gZC55O1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgIGQuZnggPSBudWxsO1xuICAgIGQuZnkgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGQzLmRyYWcoKS5vbihcInN0YXJ0XCIsIGRyYWdzdGFydGVkKS5vbihcImRyYWdcIiwgZHJhZ2dlZCkub24oXCJlbmRcIiwgZHJhZ2VuZGVkKTtcbn07XG5cbmQzLmpzb24oXCIvanMvZ3JhcGguanNvblwiLCBmdW5jdGlvbiAoZXJyb3IsIGdyYXBoKSB7XG4gIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XG4gIHZhciBsaW5rcyA9IGdyYXBoLmxpbmtzLm1hcChmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKGQpO1xuICB9KTtcbiAgdmFyIG5vZGVzID0gZ3JhcGgubm9kZXMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoZCk7XG4gIH0pO1xuICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbihub2RlcykuZm9yY2UoXCJjaGFyZ2VcIiwgZDMuZm9yY2VNYW55Qm9keSgpKS5mb3JjZShcImxpbmtcIiwgZDMuZm9yY2VMaW5rKGxpbmtzKS5pZChmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkLmlkO1xuICB9KS5zdHJlbmd0aCgxLjcpLmRpc3RhbmNlKDcwKSkuZm9yY2UoXCJjZW50ZXJcIiwgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSkub24oXCJ0aWNrXCIsIHRpY2tlZCk7XG4gIHZhciBsaW5rID0gc3ZnLmFwcGVuZChcImdcIikuYXR0cihcInN0cm9rZVwiLCBcIiNENEQ0RDRcIikuYXR0cihcInN0cm9rZS1vcGFjaXR5XCIsIDAuNikuc2VsZWN0QWxsKFwibGluZVwiKS5kYXRhKGxpbmtzKS5lbnRlcigpLmFwcGVuZChcImxpbmVcIikuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxKTtcbiAgdmFyIG5vZGUgPSBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZmZmZlwiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSkuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEobm9kZXMpLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQudGl0bGUgPT09ICdyb290JyA/IDI5IDogTWF0aC5tYXgoZC52YWx1ZSAvIDQsIDIwKTtcbiAgfSkuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC50aXRsZSA9PT0gJ3Jvb3QnID8gJyMyMjhBQTInIDogY29sb3IoZC52YWx1ZSk7XG4gIH0pLmNhbGwoZHJhZyhzaW11bGF0aW9uKSk7XG4gIG5vZGUuYXBwZW5kKFwidGl0bGVcIikudGV4dChmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkLnRpdGxlO1xuICB9KTtcbiAgdmFyIHRleHQgPSBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDAuMykuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShub2RlcykuZW50ZXIoKS5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpLmF0dHIoXCJjb2xvclwiLCAnI2ZmZmZmZicpLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC52YWx1ZTtcbiAgfSkuY2FsbChkcmFnKHNpbXVsYXRpb24pKTtcbiAgdGV4dC5hcHBlbmQoXCJ0aXRsZVwiKS50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQudGl0bGU7XG4gIH0pLmF0dHIoXCJjb2xvclwiLCBcIiNGRkZGRkZcIik7XG5cbiAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgIGxpbmsuYXR0cihcIngxXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC5zb3VyY2UueDtcbiAgICB9KS5hdHRyKFwieTFcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLnNvdXJjZS55O1xuICAgIH0pLmF0dHIoXCJ4MlwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQudGFyZ2V0Lng7XG4gICAgfSkuYXR0cihcInkyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC50YXJnZXQueTtcbiAgICB9KTtcbiAgICBub2RlLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQueDtcbiAgICB9KS5hdHRyKFwiY3lcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLnk7XG4gICAgfSk7XG4gICAgdGV4dC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQueDtcbiAgICB9KS5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQueSArIDU7XG4gICAgfSk7XG4gIH1cbn0pOyJdLCJmaWxlIjoiYXBwLmpzIn0=
