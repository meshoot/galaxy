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
      'label': 'data(label)'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkYXRhID0ge1xuICAnbm9kZXMnOiBbe1xuICAgIG5hbWU6ICdJTkRVU1RSWScsXG4gICAgdmFsdWU6IDAsXG4gICAgeDogNTQsXG4gICAgeTogNTRcbiAgfSwge1xuICAgIG5hbWU6ICdTVVNUQUlOQUJJTElUWScsXG4gICAgdmFsdWU6IDEwMCxcbiAgICB4OiAxODAsXG4gICAgeTogNzMuMTNcbiAgfSwge1xuICAgIG5hbWU6ICdTVEFUVVMnLFxuICAgIHZhbHVlOiAxNTEsXG4gICAgeDogNDYuNDIsXG4gICAgeTogMjEyLjE0XG4gIH0sIHtcbiAgICBuYW1lOiAnU1VQUExJRVInLFxuICAgIHZhbHVlOiAwLFxuICAgIHg6IDE0Mi4wNyxcbiAgICB5OiAyNDkuNDJcbiAgfSwge1xuICAgIG5hbWU6ICdDT1VOVFJZJyxcbiAgICB2YWx1ZTogOTMsXG4gICAgeDogMjA3LjQyLFxuICAgIHk6IDE3MS43NFxuICB9XVxufTtcbnZhciBjeSA9IGN5dG9zY2FwZSh7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N5JyksXG4gIC8vIGNvbnRhaW5lciB0byByZW5kZXIgaW5cbiAgZWxlbWVudHM6IFsvLyBsaXN0IG9mIGdyYXBoIGVsZW1lbnRzIHRvIHN0YXJ0IHdpdGhcbiAge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnMScsXG4gICAgICB2YWx1ZTogMTBcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAxMjUsXG4gICAgICB5OiAxNDBcbiAgICB9LFxuICAgIHN0eWxlOiB7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMjI4QUEyJyxcbiAgICAgICd3aWR0aCc6IDU4LFxuICAgICAgJ2hlaWdodCc6IDU4LFxuICAgICAgJ2JvcmRlci13aWR0aCc6IDQsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJyNmZmZmZmYnXG4gICAgfVxuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdJTkRVU1RSWScsXG4gICAgICBsYWJlbDogJzEyMydcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiA2MCxcbiAgICAgIHk6IDU0XG4gICAgfSxcbiAgICBjbGFzc2VzOiAnY2VudGVyLWNlbnRlcidcbiAgfSwge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnU1VTVEFJTkFCSUxJVFknLFxuICAgICAgbGFiZWw6ICcxMjMnXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMTgwLFxuICAgICAgeTogODBcbiAgICB9LFxuICAgIGNsYXNzZXM6ICdjZW50ZXItY2VudGVyJ1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdTVEFUVVMnLFxuICAgICAgbGFiZWw6ICcxMjMnXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogNDYuNDIsXG4gICAgICB5OiAyMTIuMTRcbiAgICB9LFxuICAgIGNsYXNzZXM6ICdjZW50ZXItY2VudGVyJ1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdTVVBQTElFUicsXG4gICAgICBsYWJlbDogJzEyMydcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAxNDIuMDcsXG4gICAgICB5OiAyNDkuNDJcbiAgICB9LFxuICAgIGNsYXNzZXM6ICdjZW50ZXItY2VudGVyJ1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdDT1VOVFJZJyxcbiAgICAgIGxhYmVsOiAnMTIzJ1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDIwNy40MixcbiAgICAgIHk6IDE3MS43NFxuICAgIH0sXG4gICAgY2xhc3NlczogJ2NlbnRlci1jZW50ZXInXG4gIH0sIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJ2FiJyxcbiAgICAgIHNvdXJjZTogJzEnLFxuICAgICAgdGFyZ2V0OiAnSU5EVVNUUlknXG4gICAgfVxuICB9LCB7XG4gICAgLy8gZWRnZSBhYlxuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnY2QnLFxuICAgICAgc291cmNlOiAnMScsXG4gICAgICB0YXJnZXQ6ICdTVVNUQUlOQUJJTElUWSdcbiAgICB9XG4gIH0sIHtcbiAgICAvLyBlZGdlIGFiXG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdkZScsXG4gICAgICBzb3VyY2U6ICcxJyxcbiAgICAgIHRhcmdldDogJ1NUQVRVUydcbiAgICB9XG4gIH0sIHtcbiAgICAvLyBlZGdlIGFiXG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdmZycsXG4gICAgICBzb3VyY2U6ICcxJyxcbiAgICAgIHRhcmdldDogJ1NVUFBMSUVSJ1xuICAgIH1cbiAgfSwge1xuICAgIC8vIGVkZ2UgYWJcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJ2hpJyxcbiAgICAgIHNvdXJjZTogJzEnLFxuICAgICAgdGFyZ2V0OiAnQ09VTlRSWSdcbiAgICB9XG4gIH1dLFxuICBzdHlsZTogWy8vIHRoZSBzdHlsZXNoZWV0IGZvciB0aGUgZ3JhcGhcbiAge1xuICAgIHNlbGVjdG9yOiAnbm9kZScsXG4gICAgc3R5bGU6IHtcbiAgICAgICd3aWR0aCc6IDMwLFxuICAgICAgJ2JvcmRlci13aWR0aCc6IDQsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJyNmZmZmZmYnLFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI0E2QTZBNicsXG4gICAgICAnbGFiZWwnOiAnZGF0YShsYWJlbCknXG4gICAgfVxuICB9LCB7XG4gICAgc2VsZWN0b3I6ICdlZGdlJyxcbiAgICBzdHlsZToge1xuICAgICAgJ3dpZHRoJzogMSxcbiAgICAgICdsaW5lLWNvbG9yJzogJyNENEQ0RDQnLFxuICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjY2NjJyxcbiAgICAgICd0YXJnZXQtYXJyb3ctc2hhcGUnOiAndHJpYW5nbGUnXG4gICAgfVxuICB9LCB7XG4gICAgXCJzZWxlY3RvclwiOiBcIi5jZW50ZXItY2VudGVyXCIsXG4gICAgXCJzdHlsZVwiOiB7XG4gICAgICAnZm9udC1zaXplJzogJzEzcHgnLFxuICAgICAgJ2NvbG9yJzogJyNmZmZmZmYnLFxuICAgICAgXCJ0ZXh0LXZhbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgXCJ0ZXh0LWhhbGlnblwiOiBcImNlbnRlclwiXG4gICAgfVxuICB9XSxcbiAgbGF5b3V0OiB7XG4gICAgbmFtZTogJ3ByZXNldCcsXG4gICAgcGFkZGluZzogMTAsXG4gICAgYXZvaWRPdmVybGFwOiB0cnVlXG4gIH0sXG4gIGF1dG9sb2NrOiB0cnVlLFxuICB6b29taW5nRW5hYmxlZDogZmFsc2UsXG4gIHBhbm5pbmdFbmFibGVkOiBmYWxzZSxcbiAgYm94U2VsZWN0aW9uRW5hYmxlZDogZmFsc2Vcbn0pO1xuXG5mdW5jdGlvbiBjYWxjUGVyY2VudCh0b3RhbCwgZGF0YSkge1xuICByZXR1cm4gMTAwIC8gKHRvdGFsIC8gZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNhbGNXaWR0aChkYXRhKSB7XG4gIHJldHVybiA1OCAvIDEwMCAqIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGFkZFRpdGxlKG5vZGVJZCwgY2lyY2xlVGV4dCkge1xuICB2YXIgcGFyZW50Tm9kZSA9IGN5LiQoJyMnICsgbm9kZUlkKTtcbiAgaWYgKHBhcmVudE5vZGUuZGF0YSgnaXNDaXJjbGUnKSB8fCBwYXJlbnROb2RlLmRhdGEoJ2NpcmNsZUlkJykpIHJldHVybjtcbiAgcGFyZW50Tm9kZS5sb2NrKCk7XG4gIHZhciBweCA9IHBhcmVudE5vZGUucG9zaXRpb24oJ3gnKSArIDEwO1xuICB2YXIgcHkgPSBwYXJlbnROb2RlLnBvc2l0aW9uKCd5JykgLSAxMDtcbiAgdmFyIGNpcmNsZUlkID0gKGN5Lm5vZGVzKCkuc2l6ZSgpICsgMSkudG9TdHJpbmcoKTtcbiAgcGFyZW50Tm9kZS5kYXRhKCdjaXJjbGVJZCcsIGNpcmNsZUlkKTtcbiAgY3kuYWRkKHtcbiAgICBncm91cDogJ25vZGVzJyxcbiAgICBkYXRhOiB7XG4gICAgICB3ZWlnaHQ6IDc1LFxuICAgICAgaWQ6IGNpcmNsZUlkLFxuICAgICAgbmFtZTogY2lyY2xlVGV4dCxcbiAgICAgIGlzQ2lyY2xlOiB0cnVlXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogcHgsXG4gICAgICB5OiBweVxuICAgIH0sXG4gICAgbG9ja2VkOiB0cnVlXG4gIH0pLmNzcyh7XG4gICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDAsXG4gICAgJ2JvcmRlci13aWR0aCc6IDBcbiAgfSkudW5zZWxlY3RpZnkoKTtcbn1cblxuYWRkVGl0bGUoJ0lORFVTVFJZJywgJ0lORFVTVFJZJyk7XG5hZGRUaXRsZSgnU1VTVEFJTkFCSUxJVFknLCAnU1VTVEFJTkFCSUxJVFknKTtcbmFkZFRpdGxlKCdTVEFUVVMnLCAnU1RBVFVTJyk7XG5hZGRUaXRsZSgnQ09VTlRSWScsICdDT1VOVFJZJyk7XG5hZGRUaXRsZSgnU1VQUExJRVInLCAnU1VQUExJRVInKTsgLy8gZnVuY3Rpb24gZ2VuZW5lcmF0ZVBvc3Rpb24oaSkge1xuLy8gICAgIGxldCBwb3MgPSB7fTtcbi8vICAgICBsZXQgcGFycmVudFIgPSAyOTtcbi8vICAgICBsZXQgYW5nbGUgPSBpICsgMSAqIE1hdGguUEk7XG4vLyAgICAgbGV0IHdpZHRoID0gZ2FsYXh5LmF0dHIoJ3dpZHRoJykgLSBwYXJyZW50UiAqIDI7XG4vLyAgICAgbGV0IGhlaWdodCA9IGdhbGF4eS5hdHRyKCdoZWlnaHQnKSAtIHBhcnJlbnRSICogMjtcbi8vICAgICBwb3MueCA9IChwYXJyZW50UiArIHdpZHRoIC8gMiArIGhlaWdodCAvIDIgKiBNYXRoLnNpbigtYW5nbGUpKTtcbi8vICAgICBwb3MueSA9IChwYXJyZW50UiArIGhlaWdodCAvIDIgKyB3aWR0aCAvIDIgKiBNYXRoLmNvcygtYW5nbGUpKTtcbi8vICAgICBwb3NpdGlvbnMucHVzaChwb3MpO1xuLy8gICAgIHJldHVybiBwb3M7XG4vLyB9Il0sImZpbGUiOiJhcHAuanMifQ==
