let cy = cytoscape({
    container: document.getElementById('cy'), // container to render in
    elements: [ // list of graph elements to start with
        {
            data: { id: '0' },
            position: { x: 125, y: 140 },
            style: {
                'background-color': '#228AA2',
                'width': 58,
                'height': 58,
                'border-width': 4,
                'border-color': '#ffffff',
            },
            locked: true
        },

        {
            data: { id: '1.1', parent: '1', label: '12' },
            position: { x: 60, y: 54 },
            classes: 'child',
        },
        {
            data: { id: '1', label: 'INDUSTRY' },
            position: { x: 60, y: 54 },
            classes: 'parent',
        },
        {
            data: { id: '2.1', parent: '2', label: '100' },
            position: { x: 180, y: 80 },
            classes: 'child',
        },
        {
            data: { id: '2', label: 'SUSTAINABILITY' },
            position: { x: 180, y: 80 },
            classes: 'parent'
        },
        {
            data: { id: '3.1', parent: '3', label: '151' },
            position: { x: 46.42, y: 212.14 },
            classes: 'child',
        },
        {
            data: { id: '3', label: 'SUSTAINABILITY' },
            position: { x: 46.42, y: 212.14 },
            classes: 'parent'
        },
        {
            data: { id: '4.1', parent: '4', label: '93' },
            position: { x: 142.07, y: 249.42 },
            classes: 'child',
        },
        {
            data: { id: '4', label: 'SUPPLIER' },
            position: { x: 142.07, y: 249.42 },
            classes: 'parent'
        },
        {
            data: { id: '5.1', parent: '5', label: '154' },
            position: { x: 207.42, y: 121.74 },
            classes: 'child',
        },
        {
            data: { id: '5', label: 'COUNTRY' },
            position: { x: 207.42, y: 171.74 },
            classes: 'parent'
        },
        {
            data: { id: 'ab', source: '1', target: '0' }
        },
        { // edge ab
            data: { id: 'cd', source: '2', target: '0' }
        },
        { // edge ab
            data: { id: 'de', source: '3', target: '0' }
        },
        { // edge ab
            data: { id: 'fg', source: '4', target: '0' }
        },
        { // edge ab
            data: { id: 'hi', source: '5', target: '0' }
        }
    ],
    style: [ // the stylesheet for the graph
        {
            selector: '.child',
            style: {
                'width': function (ele) {
                    let w = parseFloat(ele.data().label);
                    let width = calcWidth(calcPercent(255, w));

                    if (width <= 27) {
                        return 27
                    } else {
                        return width
                    }
                },
                'height': function (ele) {
                   return ele.style().width;
                },
                'border-width': 2,
                'border-color': '#ffffff',
                'font-size': '13px',
                'color': '#FFFFFF',
                'label': 'data(label)',
                'text-halign': 'center',
                'text-valign': 'center',
                'background-color': function(ele) {
                    let value = ele.data().label;
                    let temp = calcPercent(255, value);

                    return getColorForPercentage(temp)
                }
            }
        },
        {
            selector: '.parent',
            style: {
                'label': 'data(label)',
                'background-opacity': 0,
                'border-width': 0,
            }
        },

        {
            selector: 'edge',
            style: {
                'width': 1,
                'line-color': '#D4D4D4',
                'target-arrow-color': '#ccc',
            }
        }
    ],
    layout: {
        name: 'preset',
        padding: 10,
        avoidOverlap: true
    },
    autolock: false,
    zoomingEnabled: false,
    panningEnabled: false,
    boxSelectionEnabled: false,
});

function calcPercent(total, data) {
    return 100 / (total / data);
}

function calcWidth(data) {
    return 58 / 100 * data;
}

function getColorForPercentage(pct) {
    var percentColors = [
        { pct: 0, color: { r: 0xfb, g: 0x50, b: 0x15 } },
        { pct: 50, color: { r: 0xf7, g: 0xa4, b: 0x0c } },
        { pct: 100, color: { r: 0x4a, g: 0xbf, b: 0x40 } }];

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

    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    // or output as hex if preferred
}




