const galaxy = d3.select('#galaxy');

let total = 244;
let data = [
    { name: 'INDUSTRY', value: 10 },
    { name: 'SUSTAINABILITY', value: 5 },
    { name: 'STATUS', value: 5 },
    { name: 'SUPPLIER', value: 35 },
    { name: 'COUNTRY', value: 93 }
];

galaxy.selectAll('g')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', 10)
    .attr('cy', (d, i) => geneneratePostion(i).y)
    .attr('cx', (d, i) => geneneratePostion(i).x)


function geneneratePostion(i, r) {
    let pos = {};
    let parrentR = 29;
    let angle = i + 1 * Math.PI;
    let width = galaxy.attr('width') - parrentR*2
    let height = galaxy.attr('height') - parrentR*2

    pos.x = (parrentR + width / 2 + height / 2 * Math.sin(angle)) 
    pos.y = (parrentR + height / 2 + width / 2 * Math.cos(angle))

    return pos;
}