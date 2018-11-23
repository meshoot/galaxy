"use strict";

var data = {
  'nodes': [{
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
  }]
};
var cy = cytoscape({
  container: document.getElementById('cy'),
  // container to render in
  elements: [// list of graph elements to start with
  {
    data: {
      id: '1',
      value: 10
    },
    position: {
      x: 125,
      y: 140
    },
    style: {
      'background-color': '#228AA2',
      'width': 58,
      'height': 58,
      'border-width': 4,
      'border-color': '#ffffff'
    }
  }, {
    data: {
      id: 'INDUSTRYLabel',
      parent: 'INDUSTRY',
      label: 'INDUSTRY'
    },
    position: {
      x: 60,
      y: 54
    }
  }, {
    data: {
      id: 'INDUSTRY',
      label: '123'
    },
    position: {
      x: 60,
      y: 54
    },
    classes: 'center-center'
  }, {
    data: {
      id: 'SUSTAINABILITYLabel',
      parent: 'SUSTAINABILITY',
      label: 'SUSTAINABILITY'
    },
    position: {
      x: 180,
      y: 80
    }
  }, {
    data: {
      id: 'SUSTAINABILITY',
      label: '123'
    },
    position: {
      x: 180,
      y: 80
    },
    classes: 'center-center'
  }, {
    data: {
      id: 'STATUSLabel',
      parent: 'STATUS',
      label: 'SUSTAINABILITY'
    },
    position: {
      x: 46.42,
      y: 212.14
    },
    classes: 'label'
  }, {
    data: {
      id: 'STATUS',
      label: '123'
    },
    position: {
      x: 46.42,
      y: 212.14
    },
    classes: 'center-center'
  }, {
    data: {
      id: 'SUPPLIERLabel',
      parent: 'SUPPLIER',
      label: 'SUPPLIER'
    },
    position: {
      x: 142.07,
      y: 249.42
    }
  }, {
    data: {
      id: 'SUPPLIER',
      label: '123'
    },
    position: {
      x: 142.07,
      y: 249.42
    },
    classes: 'center-center'
  }, {
    data: {
      id: 'COUNTRYLabel',
      parent: 'COUNTRY',
      label: 'COUNTRY'
    },
    position: {
      x: 207.42,
      y: 121.74
    }
  }, {
    data: {
      id: 'COUNTRY',
      label: '123'
    },
    position: {
      x: 207.42,
      y: 171.74
    },
    classes: 'center-center'
  }, {
    data: {
      id: 'ab',
      source: '1',
      target: 'INDUSTRY'
    }
  }, {
    // edge ab
    data: {
      id: 'cd',
      source: '1',
      target: 'SUSTAINABILITY'
    }
  }, {
    // edge ab
    data: {
      id: 'de',
      source: '1',
      target: 'STATUS'
    }
  }, {
    // edge ab
    data: {
      id: 'fg',
      source: '1',
      target: 'SUPPLIER'
    }
  }, {
    // edge ab
    data: {
      id: 'hi',
      source: '1',
      target: 'COUNTRY'
    }
  }],
  style: [// the stylesheet for the graph
  {
    selector: 'node',
    style: {
      'width': 30,
      'border-width': 4,
      'border-color': '#ffffff',
      'background-color': '#A6A6A6',
      'label': 'data(label)',
      'source-label': 'data(id)'
    }
  }, {
    selector: 'edge',
    style: {
      'width': 1,
      'line-color': '#D4D4D4',
      'target-arrow-color': '#ccc',
      'target-arrow-shape': 'triangle'
    }
  }, {
    "selector": ".center-center",
    "style": {
      'font-size': '13px',
      'color': '#ffffff',
      "text-valign": "center",
      "text-halign": "center"
    }
  }, {
    selector: '.label',
    style: {}
  }],
  layout: {
    name: 'preset',
    padding: 10,
    avoidOverlap: true
  },
  autolock: true,
  zoomingEnabled: false,
  panningEnabled: false,
  boxSelectionEnabled: false
});

function calcPercent(total, data) {
  return 100 / (total / data);
}

function calcWidth(data) {
  return 58 / 100 * data;
}

function addTitle(nodeId, circleText) {
  var parentNode = cy.$('#' + nodeId);
  if (parentNode.data('isCircle') || parentNode.data('circleId')) return;
  parentNode.lock();
  var px = parentNode.position('x') + 10;
  var py = parentNode.position('y') - 10;
  var circleId = (cy.nodes().size() + 1).toString();
  parentNode.data('circleId', circleId);
  cy.add({
    group: 'nodes',
    data: {
      weight: 75,
      id: circleId,
      name: circleText,
      isCircle: true
    },
    position: {
      x: px,
      y: py
    },
    locked: true
  }).css({
    'background-opacity': 0,
    'border-width': 0
  }).unselectify();
}

addTitle('INDUSTRY', 'INDUSTRY');
addTitle('SUSTAINABILITY', 'SUSTAINABILITY');
addTitle('STATUS', 'STATUS');
addTitle('COUNTRY', 'COUNTRY');
addTitle('SUPPLIER', 'SUPPLIER'); // function geneneratePostion(i) {
//     let pos = {};
//     let parrentR = 29;
//     let angle = i + 1 * Math.PI;
//     let width = galaxy.attr('width') - parrentR * 2;
//     let height = galaxy.attr('height') - parrentR * 2;
//     pos.x = (parrentR + width / 2 + height / 2 * Math.sin(-angle));
//     pos.y = (parrentR + height / 2 + width / 2 * Math.cos(-angle));
//     positions.push(pos);
//     return pos;
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkYXRhID0ge1xuICAnbm9kZXMnOiBbe1xuICAgIG5hbWU6ICdJTkRVU1RSWScsXG4gICAgdmFsdWU6IDAsXG4gICAgeDogNTQsXG4gICAgeTogNTRcbiAgfSwge1xuICAgIG5hbWU6ICdTVVNUQUlOQUJJTElUWScsXG4gICAgdmFsdWU6IDEwMCxcbiAgICB4OiAxODAsXG4gICAgeTogNzMuMTNcbiAgfSwge1xuICAgIG5hbWU6ICdTVEFUVVMnLFxuICAgIHZhbHVlOiAxNTEsXG4gICAgeDogNDYuNDIsXG4gICAgeTogMjEyLjE0XG4gIH0sIHtcbiAgICBuYW1lOiAnU1VQUExJRVInLFxuICAgIHZhbHVlOiAwLFxuICAgIHg6IDE0Mi4wNyxcbiAgICB5OiAyNDkuNDJcbiAgfSwge1xuICAgIG5hbWU6ICdDT1VOVFJZJyxcbiAgICB2YWx1ZTogOTMsXG4gICAgeDogMjA3LjQyLFxuICAgIHk6IDE3MS43NFxuICB9XVxufTtcbnZhciBjeSA9IGN5dG9zY2FwZSh7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N5JyksXG4gIC8vIGNvbnRhaW5lciB0byByZW5kZXIgaW5cbiAgZWxlbWVudHM6IFsvLyBsaXN0IG9mIGdyYXBoIGVsZW1lbnRzIHRvIHN0YXJ0IHdpdGhcbiAge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnMScsXG4gICAgICB2YWx1ZTogMTBcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAxMjUsXG4gICAgICB5OiAxNDBcbiAgICB9LFxuICAgIHN0eWxlOiB7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMjI4QUEyJyxcbiAgICAgICd3aWR0aCc6IDU4LFxuICAgICAgJ2hlaWdodCc6IDU4LFxuICAgICAgJ2JvcmRlci13aWR0aCc6IDQsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJyNmZmZmZmYnXG4gICAgfVxuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdJTkRVU1RSWUxhYmVsJyxcbiAgICAgIHBhcmVudDogJ0lORFVTVFJZJyxcbiAgICAgIGxhYmVsOiAnSU5EVVNUUlknXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogNjAsXG4gICAgICB5OiA1NFxuICAgIH1cbiAgfSwge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnSU5EVVNUUlknLFxuICAgICAgbGFiZWw6ICcxMjMnXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogNjAsXG4gICAgICB5OiA1NFxuICAgIH0sXG4gICAgY2xhc3NlczogJ2NlbnRlci1jZW50ZXInXG4gIH0sIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJ1NVU1RBSU5BQklMSVRZTGFiZWwnLFxuICAgICAgcGFyZW50OiAnU1VTVEFJTkFCSUxJVFknLFxuICAgICAgbGFiZWw6ICdTVVNUQUlOQUJJTElUWSdcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAxODAsXG4gICAgICB5OiA4MFxuICAgIH1cbiAgfSwge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnU1VTVEFJTkFCSUxJVFknLFxuICAgICAgbGFiZWw6ICcxMjMnXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMTgwLFxuICAgICAgeTogODBcbiAgICB9LFxuICAgIGNsYXNzZXM6ICdjZW50ZXItY2VudGVyJ1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdTVEFUVVNMYWJlbCcsXG4gICAgICBwYXJlbnQ6ICdTVEFUVVMnLFxuICAgICAgbGFiZWw6ICdTVVNUQUlOQUJJTElUWSdcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiA0Ni40MixcbiAgICAgIHk6IDIxMi4xNFxuICAgIH0sXG4gICAgY2xhc3NlczogJ2xhYmVsJ1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdTVEFUVVMnLFxuICAgICAgbGFiZWw6ICcxMjMnXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogNDYuNDIsXG4gICAgICB5OiAyMTIuMTRcbiAgICB9LFxuICAgIGNsYXNzZXM6ICdjZW50ZXItY2VudGVyJ1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdTVVBQTElFUkxhYmVsJyxcbiAgICAgIHBhcmVudDogJ1NVUFBMSUVSJyxcbiAgICAgIGxhYmVsOiAnU1VQUExJRVInXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMTQyLjA3LFxuICAgICAgeTogMjQ5LjQyXG4gICAgfVxuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdTVVBQTElFUicsXG4gICAgICBsYWJlbDogJzEyMydcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAxNDIuMDcsXG4gICAgICB5OiAyNDkuNDJcbiAgICB9LFxuICAgIGNsYXNzZXM6ICdjZW50ZXItY2VudGVyJ1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdDT1VOVFJZTGFiZWwnLFxuICAgICAgcGFyZW50OiAnQ09VTlRSWScsXG4gICAgICBsYWJlbDogJ0NPVU5UUlknXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMjA3LjQyLFxuICAgICAgeTogMTIxLjc0XG4gICAgfVxuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdDT1VOVFJZJyxcbiAgICAgIGxhYmVsOiAnMTIzJ1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDIwNy40MixcbiAgICAgIHk6IDE3MS43NFxuICAgIH0sXG4gICAgY2xhc3NlczogJ2NlbnRlci1jZW50ZXInXG4gIH0sIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJ2FiJyxcbiAgICAgIHNvdXJjZTogJzEnLFxuICAgICAgdGFyZ2V0OiAnSU5EVVNUUlknXG4gICAgfVxuICB9LCB7XG4gICAgLy8gZWRnZSBhYlxuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnY2QnLFxuICAgICAgc291cmNlOiAnMScsXG4gICAgICB0YXJnZXQ6ICdTVVNUQUlOQUJJTElUWSdcbiAgICB9XG4gIH0sIHtcbiAgICAvLyBlZGdlIGFiXG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdkZScsXG4gICAgICBzb3VyY2U6ICcxJyxcbiAgICAgIHRhcmdldDogJ1NUQVRVUydcbiAgICB9XG4gIH0sIHtcbiAgICAvLyBlZGdlIGFiXG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdmZycsXG4gICAgICBzb3VyY2U6ICcxJyxcbiAgICAgIHRhcmdldDogJ1NVUFBMSUVSJ1xuICAgIH1cbiAgfSwge1xuICAgIC8vIGVkZ2UgYWJcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJ2hpJyxcbiAgICAgIHNvdXJjZTogJzEnLFxuICAgICAgdGFyZ2V0OiAnQ09VTlRSWSdcbiAgICB9XG4gIH1dLFxuICBzdHlsZTogWy8vIHRoZSBzdHlsZXNoZWV0IGZvciB0aGUgZ3JhcGhcbiAge1xuICAgIHNlbGVjdG9yOiAnbm9kZScsXG4gICAgc3R5bGU6IHtcbiAgICAgICd3aWR0aCc6IDMwLFxuICAgICAgJ2JvcmRlci13aWR0aCc6IDQsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJyNmZmZmZmYnLFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI0E2QTZBNicsXG4gICAgICAnbGFiZWwnOiAnZGF0YShsYWJlbCknLFxuICAgICAgJ3NvdXJjZS1sYWJlbCc6ICdkYXRhKGlkKSdcbiAgICB9XG4gIH0sIHtcbiAgICBzZWxlY3RvcjogJ2VkZ2UnLFxuICAgIHN0eWxlOiB7XG4gICAgICAnd2lkdGgnOiAxLFxuICAgICAgJ2xpbmUtY29sb3InOiAnI0Q0RDRENCcsXG4gICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNjY2MnLFxuICAgICAgJ3RhcmdldC1hcnJvdy1zaGFwZSc6ICd0cmlhbmdsZSdcbiAgICB9XG4gIH0sIHtcbiAgICBcInNlbGVjdG9yXCI6IFwiLmNlbnRlci1jZW50ZXJcIixcbiAgICBcInN0eWxlXCI6IHtcbiAgICAgICdmb250LXNpemUnOiAnMTNweCcsXG4gICAgICAnY29sb3InOiAnI2ZmZmZmZicsXG4gICAgICBcInRleHQtdmFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICBcInRleHQtaGFsaWduXCI6IFwiY2VudGVyXCJcbiAgICB9XG4gIH0sIHtcbiAgICBzZWxlY3RvcjogJy5sYWJlbCcsXG4gICAgc3R5bGU6IHt9XG4gIH1dLFxuICBsYXlvdXQ6IHtcbiAgICBuYW1lOiAncHJlc2V0JyxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBhdm9pZE92ZXJsYXA6IHRydWVcbiAgfSxcbiAgYXV0b2xvY2s6IHRydWUsXG4gIHpvb21pbmdFbmFibGVkOiBmYWxzZSxcbiAgcGFubmluZ0VuYWJsZWQ6IGZhbHNlLFxuICBib3hTZWxlY3Rpb25FbmFibGVkOiBmYWxzZVxufSk7XG5cbmZ1bmN0aW9uIGNhbGNQZXJjZW50KHRvdGFsLCBkYXRhKSB7XG4gIHJldHVybiAxMDAgLyAodG90YWwgLyBkYXRhKTtcbn1cblxuZnVuY3Rpb24gY2FsY1dpZHRoKGRhdGEpIHtcbiAgcmV0dXJuIDU4IC8gMTAwICogZGF0YTtcbn1cblxuZnVuY3Rpb24gYWRkVGl0bGUobm9kZUlkLCBjaXJjbGVUZXh0KSB7XG4gIHZhciBwYXJlbnROb2RlID0gY3kuJCgnIycgKyBub2RlSWQpO1xuICBpZiAocGFyZW50Tm9kZS5kYXRhKCdpc0NpcmNsZScpIHx8IHBhcmVudE5vZGUuZGF0YSgnY2lyY2xlSWQnKSkgcmV0dXJuO1xuICBwYXJlbnROb2RlLmxvY2soKTtcbiAgdmFyIHB4ID0gcGFyZW50Tm9kZS5wb3NpdGlvbigneCcpICsgMTA7XG4gIHZhciBweSA9IHBhcmVudE5vZGUucG9zaXRpb24oJ3knKSAtIDEwO1xuICB2YXIgY2lyY2xlSWQgPSAoY3kubm9kZXMoKS5zaXplKCkgKyAxKS50b1N0cmluZygpO1xuICBwYXJlbnROb2RlLmRhdGEoJ2NpcmNsZUlkJywgY2lyY2xlSWQpO1xuICBjeS5hZGQoe1xuICAgIGdyb3VwOiAnbm9kZXMnLFxuICAgIGRhdGE6IHtcbiAgICAgIHdlaWdodDogNzUsXG4gICAgICBpZDogY2lyY2xlSWQsXG4gICAgICBuYW1lOiBjaXJjbGVUZXh0LFxuICAgICAgaXNDaXJjbGU6IHRydWVcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiBweCxcbiAgICAgIHk6IHB5XG4gICAgfSxcbiAgICBsb2NrZWQ6IHRydWVcbiAgfSkuY3NzKHtcbiAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMCxcbiAgICAnYm9yZGVyLXdpZHRoJzogMFxuICB9KS51bnNlbGVjdGlmeSgpO1xufVxuXG5hZGRUaXRsZSgnSU5EVVNUUlknLCAnSU5EVVNUUlknKTtcbmFkZFRpdGxlKCdTVVNUQUlOQUJJTElUWScsICdTVVNUQUlOQUJJTElUWScpO1xuYWRkVGl0bGUoJ1NUQVRVUycsICdTVEFUVVMnKTtcbmFkZFRpdGxlKCdDT1VOVFJZJywgJ0NPVU5UUlknKTtcbmFkZFRpdGxlKCdTVVBQTElFUicsICdTVVBQTElFUicpOyAvLyBmdW5jdGlvbiBnZW5lbmVyYXRlUG9zdGlvbihpKSB7XG4vLyAgICAgbGV0IHBvcyA9IHt9O1xuLy8gICAgIGxldCBwYXJyZW50UiA9IDI5O1xuLy8gICAgIGxldCBhbmdsZSA9IGkgKyAxICogTWF0aC5QSTtcbi8vICAgICBsZXQgd2lkdGggPSBnYWxheHkuYXR0cignd2lkdGgnKSAtIHBhcnJlbnRSICogMjtcbi8vICAgICBsZXQgaGVpZ2h0ID0gZ2FsYXh5LmF0dHIoJ2hlaWdodCcpIC0gcGFycmVudFIgKiAyO1xuLy8gICAgIHBvcy54ID0gKHBhcnJlbnRSICsgd2lkdGggLyAyICsgaGVpZ2h0IC8gMiAqIE1hdGguc2luKC1hbmdsZSkpO1xuLy8gICAgIHBvcy55ID0gKHBhcnJlbnRSICsgaGVpZ2h0IC8gMiArIHdpZHRoIC8gMiAqIE1hdGguY29zKC1hbmdsZSkpO1xuLy8gICAgIHBvc2l0aW9ucy5wdXNoKHBvcyk7XG4vLyAgICAgcmV0dXJuIHBvcztcbi8vIH0iXSwiZmlsZSI6ImFwcC5qcyJ9
