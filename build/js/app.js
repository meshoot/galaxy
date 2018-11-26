"use strict";

var cy = cytoscape({
  container: document.getElementById('cy'),
  // container to render in
  elements: [// list of graph elements to start with
  {
    data: {
      id: '0'
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
    },
    locked: true
  }, {
    data: {
      id: '1.1',
      parent: '1',
      label: '12'
    },
    position: {
      x: 60,
      y: 54
    },
    classes: 'child'
  }, {
    data: {
      id: '1',
      label: 'INDUSTRY'
    },
    position: {
      x: 60,
      y: 54
    },
    classes: 'parent'
  }, {
    data: {
      id: '2.1',
      parent: '2',
      label: '100'
    },
    position: {
      x: 180,
      y: 80
    },
    classes: 'child'
  }, {
    data: {
      id: '2',
      label: 'SUSTAINABILITY'
    },
    position: {
      x: 180,
      y: 80
    },
    classes: 'parent'
  }, {
    data: {
      id: '3.1',
      parent: '3',
      label: '151'
    },
    position: {
      x: 46.42,
      y: 212.14
    },
    classes: 'child'
  }, {
    data: {
      id: '3',
      label: 'SUSTAINABILITY'
    },
    position: {
      x: 46.42,
      y: 212.14
    },
    classes: 'parent'
  }, {
    data: {
      id: '4.1',
      parent: '4',
      label: '93'
    },
    position: {
      x: 142.07,
      y: 249.42
    },
    classes: 'child'
  }, {
    data: {
      id: '4',
      label: 'SUPPLIER'
    },
    position: {
      x: 142.07,
      y: 249.42
    },
    classes: 'parent'
  }, {
    data: {
      id: '5.1',
      parent: '5',
      label: '154'
    },
    position: {
      x: 207.42,
      y: 121.74
    },
    classes: 'child'
  }, {
    data: {
      id: '5',
      label: 'COUNTRY'
    },
    position: {
      x: 207.42,
      y: 171.74
    },
    classes: 'parent'
  }, {
    data: {
      id: 'ab',
      source: '1',
      target: '0'
    }
  }, {
    // edge ab
    data: {
      id: 'cd',
      source: '2',
      target: '0'
    }
  }, {
    // edge ab
    data: {
      id: 'de',
      source: '3',
      target: '0'
    }
  }, {
    // edge ab
    data: {
      id: 'fg',
      source: '4',
      target: '0'
    }
  }, {
    // edge ab
    data: {
      id: 'hi',
      source: '5',
      target: '0'
    }
  }],
  style: [// the stylesheet for the graph
  {
    selector: '.child',
    style: {
      'width': function width(ele) {
        var w = parseFloat(ele.data().label);
        var width = calcWidth(calcPercent(255, w));

        if (width <= 27) {
          return 27;
        } else {
          return width;
        }
      },
      'height': function height(ele) {
        return ele.style().width;
      },
      'border-width': 2,
      'border-color': '#ffffff',
      'font-size': '13px',
      'color': '#FFFFFF',
      'label': 'data(label)',
      'text-halign': 'center',
      'text-valign': 'center',
      'background-color': function backgroundColor(ele) {
        var value = ele.data().label;
        var temp = calcPercent(255, value);
        return getColorForPercentage(temp);
      }
    }
  }, {
    selector: '.parent',
    style: {
      'label': 'data(label)',
      'background-opacity': 0,
      'border-width': 0
    }
  }, {
    selector: 'edge',
    style: {
      'width': 1,
      'line-color': '#D4D4D4',
      'target-arrow-color': '#ccc',
      'target-arrow-shape': 'triangle',
      'curve-style': 'haystack'
    }
  }],
  layout: {
    name: 'preset',
    padding: 10,
    avoidOverlap: true
  },
  autolock: false,
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

function getColorForPercentage(pct) {
  var percentColors = [{
    pct: 0,
    color: {
      r: 0xfb,
      g: 0x50,
      b: 0x15
    }
  }, {
    pct: 50,
    color: {
      r: 0xf7,
      g: 0xa4,
      b: 0x0c
    }
  }, {
    pct: 100,
    color: {
      r: 0x4a,
      g: 0xbf,
      b: 0x40
    }
  }];

  for (var i = 1; i < percentColors.length - 1; i++) {
    if (pct < percentColors[i].pct) {
      break;
    }
  }

  var lower = percentColors[i - 1];
  var upper = percentColors[i];
  var range = upper.pct - lower.pct;
  var rangePct = (pct - lower.pct) / range;
  var pctLower = 1 - rangePct;
  var pctUpper = rangePct;
  var color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
  };
  return 'rgb(' + [color.r, color.g, color.b].join(',') + ')'; // or output as hex if preferred
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjeSA9IGN5dG9zY2FwZSh7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N5JyksXG4gIC8vIGNvbnRhaW5lciB0byByZW5kZXIgaW5cbiAgZWxlbWVudHM6IFsvLyBsaXN0IG9mIGdyYXBoIGVsZW1lbnRzIHRvIHN0YXJ0IHdpdGhcbiAge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnMCdcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAxMjUsXG4gICAgICB5OiAxNDBcbiAgICB9LFxuICAgIHN0eWxlOiB7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMjI4QUEyJyxcbiAgICAgICd3aWR0aCc6IDU4LFxuICAgICAgJ2hlaWdodCc6IDU4LFxuICAgICAgJ2JvcmRlci13aWR0aCc6IDQsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJyNmZmZmZmYnXG4gICAgfSxcbiAgICBsb2NrZWQ6IHRydWVcbiAgfSwge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnMS4xJyxcbiAgICAgIHBhcmVudDogJzEnLFxuICAgICAgbGFiZWw6ICcxMidcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiA2MCxcbiAgICAgIHk6IDU0XG4gICAgfSxcbiAgICBjbGFzc2VzOiAnY2hpbGQnXG4gIH0sIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJzEnLFxuICAgICAgbGFiZWw6ICdJTkRVU1RSWSdcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiA2MCxcbiAgICAgIHk6IDU0XG4gICAgfSxcbiAgICBjbGFzc2VzOiAncGFyZW50J1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICcyLjEnLFxuICAgICAgcGFyZW50OiAnMicsXG4gICAgICBsYWJlbDogJzEwMCdcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAxODAsXG4gICAgICB5OiA4MFxuICAgIH0sXG4gICAgY2xhc3NlczogJ2NoaWxkJ1xuICB9LCB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6ICcyJyxcbiAgICAgIGxhYmVsOiAnU1VTVEFJTkFCSUxJVFknXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMTgwLFxuICAgICAgeTogODBcbiAgICB9LFxuICAgIGNsYXNzZXM6ICdwYXJlbnQnXG4gIH0sIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJzMuMScsXG4gICAgICBwYXJlbnQ6ICczJyxcbiAgICAgIGxhYmVsOiAnMTUxJ1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDQ2LjQyLFxuICAgICAgeTogMjEyLjE0XG4gICAgfSxcbiAgICBjbGFzc2VzOiAnY2hpbGQnXG4gIH0sIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJzMnLFxuICAgICAgbGFiZWw6ICdTVVNUQUlOQUJJTElUWSdcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiA0Ni40MixcbiAgICAgIHk6IDIxMi4xNFxuICAgIH0sXG4gICAgY2xhc3NlczogJ3BhcmVudCdcbiAgfSwge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnNC4xJyxcbiAgICAgIHBhcmVudDogJzQnLFxuICAgICAgbGFiZWw6ICc5MydcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB4OiAxNDIuMDcsXG4gICAgICB5OiAyNDkuNDJcbiAgICB9LFxuICAgIGNsYXNzZXM6ICdjaGlsZCdcbiAgfSwge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnNCcsXG4gICAgICBsYWJlbDogJ1NVUFBMSUVSJ1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDE0Mi4wNyxcbiAgICAgIHk6IDI0OS40MlxuICAgIH0sXG4gICAgY2xhc3NlczogJ3BhcmVudCdcbiAgfSwge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnNS4xJyxcbiAgICAgIHBhcmVudDogJzUnLFxuICAgICAgbGFiZWw6ICcxNTQnXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogMjA3LjQyLFxuICAgICAgeTogMTIxLjc0XG4gICAgfSxcbiAgICBjbGFzc2VzOiAnY2hpbGQnXG4gIH0sIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJzUnLFxuICAgICAgbGFiZWw6ICdDT1VOVFJZJ1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IDIwNy40MixcbiAgICAgIHk6IDE3MS43NFxuICAgIH0sXG4gICAgY2xhc3NlczogJ3BhcmVudCdcbiAgfSwge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnYWInLFxuICAgICAgc291cmNlOiAnMScsXG4gICAgICB0YXJnZXQ6ICcwJ1xuICAgIH1cbiAgfSwge1xuICAgIC8vIGVkZ2UgYWJcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJ2NkJyxcbiAgICAgIHNvdXJjZTogJzInLFxuICAgICAgdGFyZ2V0OiAnMCdcbiAgICB9XG4gIH0sIHtcbiAgICAvLyBlZGdlIGFiXG4gICAgZGF0YToge1xuICAgICAgaWQ6ICdkZScsXG4gICAgICBzb3VyY2U6ICczJyxcbiAgICAgIHRhcmdldDogJzAnXG4gICAgfVxuICB9LCB7XG4gICAgLy8gZWRnZSBhYlxuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAnZmcnLFxuICAgICAgc291cmNlOiAnNCcsXG4gICAgICB0YXJnZXQ6ICcwJ1xuICAgIH1cbiAgfSwge1xuICAgIC8vIGVkZ2UgYWJcbiAgICBkYXRhOiB7XG4gICAgICBpZDogJ2hpJyxcbiAgICAgIHNvdXJjZTogJzUnLFxuICAgICAgdGFyZ2V0OiAnMCdcbiAgICB9XG4gIH1dLFxuICBzdHlsZTogWy8vIHRoZSBzdHlsZXNoZWV0IGZvciB0aGUgZ3JhcGhcbiAge1xuICAgIHNlbGVjdG9yOiAnLmNoaWxkJyxcbiAgICBzdHlsZToge1xuICAgICAgJ3dpZHRoJzogZnVuY3Rpb24gd2lkdGgoZWxlKSB7XG4gICAgICAgIHZhciB3ID0gcGFyc2VGbG9hdChlbGUuZGF0YSgpLmxhYmVsKTtcbiAgICAgICAgdmFyIHdpZHRoID0gY2FsY1dpZHRoKGNhbGNQZXJjZW50KDI1NSwgdykpO1xuXG4gICAgICAgIGlmICh3aWR0aCA8PSAyNykge1xuICAgICAgICAgIHJldHVybiAyNztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnaGVpZ2h0JzogZnVuY3Rpb24gaGVpZ2h0KGVsZSkge1xuICAgICAgICByZXR1cm4gZWxlLnN0eWxlKCkud2lkdGg7XG4gICAgICB9LFxuICAgICAgJ2JvcmRlci13aWR0aCc6IDIsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJyNmZmZmZmYnLFxuICAgICAgJ2ZvbnQtc2l6ZSc6ICcxM3B4JyxcbiAgICAgICdjb2xvcic6ICcjRkZGRkZGJyxcbiAgICAgICdsYWJlbCc6ICdkYXRhKGxhYmVsKScsXG4gICAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgICd0ZXh0LXZhbGlnbic6ICdjZW50ZXInLFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmdW5jdGlvbiBiYWNrZ3JvdW5kQ29sb3IoZWxlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGVsZS5kYXRhKCkubGFiZWw7XG4gICAgICAgIHZhciB0ZW1wID0gY2FsY1BlcmNlbnQoMjU1LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBnZXRDb2xvckZvclBlcmNlbnRhZ2UodGVtcCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgc2VsZWN0b3I6ICcucGFyZW50JyxcbiAgICBzdHlsZToge1xuICAgICAgJ2xhYmVsJzogJ2RhdGEobGFiZWwpJyxcbiAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAwLFxuICAgICAgJ2JvcmRlci13aWR0aCc6IDBcbiAgICB9XG4gIH0sIHtcbiAgICBzZWxlY3RvcjogJ2VkZ2UnLFxuICAgIHN0eWxlOiB7XG4gICAgICAnd2lkdGgnOiAxLFxuICAgICAgJ2xpbmUtY29sb3InOiAnI0Q0RDRENCcsXG4gICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNjY2MnLFxuICAgICAgJ3RhcmdldC1hcnJvdy1zaGFwZSc6ICd0cmlhbmdsZScsXG4gICAgICAnY3VydmUtc3R5bGUnOiAnaGF5c3RhY2snXG4gICAgfVxuICB9XSxcbiAgbGF5b3V0OiB7XG4gICAgbmFtZTogJ3ByZXNldCcsXG4gICAgcGFkZGluZzogMTAsXG4gICAgYXZvaWRPdmVybGFwOiB0cnVlXG4gIH0sXG4gIGF1dG9sb2NrOiBmYWxzZSxcbiAgem9vbWluZ0VuYWJsZWQ6IGZhbHNlLFxuICBwYW5uaW5nRW5hYmxlZDogZmFsc2UsXG4gIGJveFNlbGVjdGlvbkVuYWJsZWQ6IGZhbHNlXG59KTtcblxuZnVuY3Rpb24gY2FsY1BlcmNlbnQodG90YWwsIGRhdGEpIHtcbiAgcmV0dXJuIDEwMCAvICh0b3RhbCAvIGRhdGEpO1xufVxuXG5mdW5jdGlvbiBjYWxjV2lkdGgoZGF0YSkge1xuICByZXR1cm4gNTggLyAxMDAgKiBkYXRhO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvckZvclBlcmNlbnRhZ2UocGN0KSB7XG4gIHZhciBwZXJjZW50Q29sb3JzID0gW3tcbiAgICBwY3Q6IDAsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDB4ZmIsXG4gICAgICBnOiAweDUwLFxuICAgICAgYjogMHgxNVxuICAgIH1cbiAgfSwge1xuICAgIHBjdDogNTAsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDB4ZjcsXG4gICAgICBnOiAweGE0LFxuICAgICAgYjogMHgwY1xuICAgIH1cbiAgfSwge1xuICAgIHBjdDogMTAwLFxuICAgIGNvbG9yOiB7XG4gICAgICByOiAweDRhLFxuICAgICAgZzogMHhiZixcbiAgICAgIGI6IDB4NDBcbiAgICB9XG4gIH1dO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgcGVyY2VudENvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBpZiAocGN0IDwgcGVyY2VudENvbG9yc1tpXS5wY3QpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBsb3dlciA9IHBlcmNlbnRDb2xvcnNbaSAtIDFdO1xuICB2YXIgdXBwZXIgPSBwZXJjZW50Q29sb3JzW2ldO1xuICB2YXIgcmFuZ2UgPSB1cHBlci5wY3QgLSBsb3dlci5wY3Q7XG4gIHZhciByYW5nZVBjdCA9IChwY3QgLSBsb3dlci5wY3QpIC8gcmFuZ2U7XG4gIHZhciBwY3RMb3dlciA9IDEgLSByYW5nZVBjdDtcbiAgdmFyIHBjdFVwcGVyID0gcmFuZ2VQY3Q7XG4gIHZhciBjb2xvciA9IHtcbiAgICByOiBNYXRoLmZsb29yKGxvd2VyLmNvbG9yLnIgKiBwY3RMb3dlciArIHVwcGVyLmNvbG9yLnIgKiBwY3RVcHBlciksXG4gICAgZzogTWF0aC5mbG9vcihsb3dlci5jb2xvci5nICogcGN0TG93ZXIgKyB1cHBlci5jb2xvci5nICogcGN0VXBwZXIpLFxuICAgIGI6IE1hdGguZmxvb3IobG93ZXIuY29sb3IuYiAqIHBjdExvd2VyICsgdXBwZXIuY29sb3IuYiAqIHBjdFVwcGVyKVxuICB9O1xuICByZXR1cm4gJ3JnYignICsgW2NvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmJdLmpvaW4oJywnKSArICcpJzsgLy8gb3Igb3V0cHV0IGFzIGhleCBpZiBwcmVmZXJyZWRcbn0iXSwiZmlsZSI6ImFwcC5qcyJ9
