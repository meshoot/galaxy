const galaxy = d3.select('#galaxy');

let total = 244;

let data = [
    { name: 'INDUSTRY', value: 0, x: 54, y: 54 },
    { name: 'SUSTAINABILITY', value: 100, x: 180, y: 73.13 },
    { name: 'STATUS', value: 151, x: 46.42, y: 212.14 },
    { name: 'SUPPLIER', value: 0, x: 142.07, y: 249.42 },
    { name: 'COUNTRY', value: 93, x: 207.42, y: 171.74 }
];

let positions = [
    { x: 124.99, y: 54 },
    { x: 226.81, y: 98.13 },
    { x: 235.02, y: 189.95 },
    { x: 142.07, y: 245.03 },
    { x: 33.42, y: 212.74 },
    { x: 124.99, y: 54 },
    { x: 226.81, y: 98.13 },
    { x: 235.02, y: 189.95 },
    { x: 142.07, y: 245.03 },
    { x: 33.42, y: 212.74 }
];

galaxy.selectAll('svg')
    .data(data)
    .enter()
    .append('g')
    .append('circle')
    .attr('r', d => calcWidth(calcPercent(total, d.value))/2) 
    .attr('cx', (d, i) => d.x)
    .attr('cy', (d, i) => d.y)
    .attr('class', 'data')

galaxy.selectAll('g')
    .append('text')
    .text(d => d.name)
    .attr('class', 'db-score-diagramm__title')
    .attr('x', (d, i) => d.x /2)
    .attr('y', (d, i) => d.y + 30)
    .text(d => d.name)
    
    
galaxy.selectAll('g')
    .data(data)
    .enter()
    .append('line')
    .attr('x1', d => genenerateLinePosition(d.x, d.y).x)
    .attr('x2', galaxy.attr('width') / 2)
    .attr('y1', d => d.y)
    .attr('y2', (galaxy.attr('height') / 2))
    .attr('stroke', '#D4D4D4')

galaxy.append('circle')
    .attr('cx', galaxy.attr('width') / 2)
    .attr('cy', galaxy.attr('height') / 2)
    .attr('r', 28)
    .attr('fill', '#228AA2')


function geneneratePostion(i) {
    let pos = {};
    let parrentR = 29;
    let angle = i + 1 * Math.PI;
    let width = galaxy.attr('width') - parrentR * 2;
    let height = galaxy.attr('height') - parrentR * 2;

    pos.x = (parrentR + width / 2 + height / 2 * Math.sin(-angle))
    pos.y = (parrentR + height / 2 + width / 2 * Math.cos(-angle))

    positions.push(pos);

    return pos;
}

function genenerateLinePosition(x, y) {
    let angle = (x - 20) / (y -20);
    let pos = {};

    pos.x = 125 * Math.sin(angle)
    pos.y = 125 * Math.cos(angle)

    return pos
}

function calcPercent(total, data) {
    return 100 / (total / data);
}

function calcWidth(data) {
    return 58 / 100 * data
}