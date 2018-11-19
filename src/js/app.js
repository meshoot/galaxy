const GALAXY = d3.select('#galaxy');

let total = 244;
let data = [
    { name: 'INDUSTRY', value: 10 },
    { name: 'SUSTAINABILITY', value: 5 },
    { name: 'STATUS', value: 5 },
    { name: 'SUPPLIER', value: 35 },
    { name: 'COUNTRY', value: 93 }
];

GALAXY.select('g.main')
    .append('circle')
    .attr('cx', GALAXY.attr('width')/2)
    .attr('cy', GALAXY.attr('height')/2)
    .attr('r', 29)
    .attr('fill', '#228AA2')

GALAXY.selectAll('g.data')
    .data(data)
    .append('circle')
    .attr('r', d => calcPercent(d.value))
    .attr('cx', (d,i) => geneneratePostion(i, d.value).x)
    .attr('cy', (d,i) => geneneratePostion(i, d.value).y)
    .attr('fill', 'green')

function setPosition(radius) {
    let maxWidth = GALAXY.attr('width');
    let maxHeight = GALAXY.attr('height');
    let pos = {};
    let genTry = 10;

    if(positions.length) {
        do {
            pos.x = geneneratePostion().x
            pos.y = geneneratePostion().y
            pos.r = radius
        } while (overlap(pos) || genTry == 0) {
            pos.x = geneneratePostion().x
            pos.y = geneneratePostion().y
            genTry--
        }
    }


    function overlap(o) {
        let x1 = o.x,
            y1 = o.y,
            r1 = o.r

        positions.forEach(el => {
            let x2 = el.x,
                y2 = el.y,
                r2 = el.r
            
            let dist = ((x2 - x1) ^ 2 + (y2 - y1) ^ 2) ^ (1 / 2);

            if (dist < (r1 + r2)) {
                return true
            } else {
                return false
            }
        })
    }

    return pos
};

function calcPercent(value) {
    let total_percent = 100 / (total / value);
    let visual_percent = 29 / total_percent;
    
    return visual_percent;
}

function geneneratePostion(i, r) {
    let pos = {};
    let angle = data.length * i + 1 * Math.PI;
    let radius = calcPercent(total, r);
    let centerX = GALAXY.attr('width') / 2;
    let centerY = GALAXY.attr('height') / 2;

    pos.x = (centerY + centerX) * Math.sin(angle);
    pos.y = (centerY + centerX) * Math.cos(angle);

    return pos;
}
