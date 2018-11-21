const galaxy = d3.select('#galaxy');

let total = 244;

let data = [
    { name: 'INDUSTRY', value: 10 },
    { name: 'SUSTAINABILITY', value: 5 },
    { name: 'STATUS', value: 5 },
    { name: 'SUPPLIER', value: 35 },
    { name: 'COUNTRY', value: 93 }
];

let positions = [];

galaxy.selectAll('g')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', d => (d.value) / 4.35) 
    .attr('cy', (d, i) => geneneratePostion(i).y)
    .attr('cx', (d, i) => geneneratePostion(i).x)
    .attr('class', 'data')

galaxy.selectAll('g')
    .data(positions)
    .enter()
    .append('line')
    .attr('x1', d => d.x)
    .attr('x2', galaxy.attr('width') / 2)
    .attr('y1', d => d.y)
    .attr('y2', (galaxy.attr('height') / 2))
    .attr('stroke', '#D4D4D4')

galaxy.append('circle')
    .attr('cx', galaxy.attr('width') / 2)
    .attr('cy', galaxy.attr('height') / 2)
    .attr('r', 28)
    .attr('fill', '#228AA2')


function geneneratePostion(i, r) {
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