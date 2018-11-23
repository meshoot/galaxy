let data = {
    'nodes': [
        { name: 'INDUSTRY', value: 0, x: 54, y: 54 },
        { name: 'SUSTAINABILITY', value: 100, x: 180, y: 73.13 },
        { name: 'STATUS', value: 151, x: 46.42, y: 212.14 },
        { name: 'SUPPLIER', value: 0, x: 142.07, y: 249.42 },
        { name: 'COUNTRY', value: 93, x: 207.42, y: 171.74 }
    ]
};



let cy = cytoscape({
    container: document.getElementById('cy'), // container to render in
    elements: [ // list of graph elements to start with
        {
            data: { id: '1', value: 10 },
            position: { x: 125, y: 140 },
            style: {
                'background-color': '#228AA2',
                'width': 58,
                'height': 58,
                'border-width': 4,
                'border-color': '#ffffff',
            }
        },
        
        { data: { id: 'INDUSTRYLabel', parent: 'INDUSTRY', label: 'INDUSTRY' },
            position: { x: 60,  y: 54 }, },
        {
            data: { id: 'INDUSTRY', label: '123' },
            position: { x: 60,  y: 54 },
            classes: 'center-center'
        },
        { data: { id: 'SUSTAINABILITYLabel', parent: 'SUSTAINABILITY', label: 'SUSTAINABILITY' },
            position: { x: 180,  y: 80 }, },
        {
            data: { id: 'SUSTAINABILITY', label: '123' },
            position: { x: 180, y: 80 },
            classes: 'center-center'
        },
        { data: { id: 'STATUSLabel', parent: 'STATUS', label: 'SUSTAINABILITY' },
            position: { x: 46.42,  y: 212.14 }, 
            classes: 'label'},
        {
            data: { id: 'STATUS', label: '123',},
            position: { x: 46.42, y: 212.14 },
            classes: 'center-center'
        },
        { data: { id: 'SUPPLIERLabel', parent: 'SUPPLIER', label: 'SUPPLIER' },
            position: { x: 142.07,  y: 249.42 }, },
        {
            data: { id: 'SUPPLIER', label: '123' },
            position: { x: 142.07, y: 249.42 },
            classes: 'center-center'
        },
        { data: { id: 'COUNTRYLabel', parent: 'COUNTRY', label: 'COUNTRY' },
            position: { x: 207.42,  y: 121.74 }, },
        {
            data: { id: 'COUNTRY', label: '123' },
            position: { x: 207.42, y: 171.74 },
            classes: 'center-center'
        },
        {
            data: { id: 'ab', source: '1', target: 'INDUSTRY' }
        },
        { // edge ab
            data: { id: 'cd', source: '1', target: 'SUSTAINABILITY' }
        },
        { // edge ab
            data: { id: 'de', source: '1', target: 'STATUS' }
        },
        { // edge ab
            data: { id: 'fg', source: '1', target: 'SUPPLIER' }
        },
        { // edge ab
            data: { id: 'hi', source: '1', target: 'COUNTRY' }
        }
    ],
    style: [ // the stylesheet for the graph
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
        },

        {
            selector: 'edge',
            style: {
                'width': 1,
                'line-color': '#D4D4D4',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle'
            }
        },
        {
            "selector": ".center-center",
            "style": {
                'font-size': '13px',
                'color': '#ffffff',
                "text-valign": "center",
                "text-halign": "center"
            }
        },
        {selector: '.label',
            style: {
                
        }}
    ],
    layout: {
        name: 'preset',
        padding: 10,
        avoidOverlap: true
    },
    autolock: true,
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

function addTitle(nodeId, circleText) {
    let parentNode = cy.$('#' + nodeId);
    if (parentNode.data('isCircle') || parentNode.data('circleId'))
        return;
    parentNode.lock();
    let px = parentNode.position('x') + 10;
    let py = parentNode.position('y') - 10;
    let circleId = (cy.nodes().size() + 1).toString();
    parentNode.data('circleId', circleId);
    cy.add({
        group: 'nodes',
        data: { weight: 75, id: circleId, name: circleText, isCircle: true },
        position: { x: px, y: py },
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
addTitle('SUPPLIER', 'SUPPLIER');








// function geneneratePostion(i) {
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





