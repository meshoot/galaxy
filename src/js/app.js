const width = 800;
const height = 800;

const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height]);

const scale = d3.scaleOrdinal(d3.schemeCategory10);

const color = (d) => scale(d.group);

 let drag = (simulation) => {

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

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
};

d3.json("/js/graph.json", function (error, graph) {
    if (error) throw error;

    const links = graph.links.map(d => Object.create(d));
    const nodes = graph.nodes.map(d => Object.create(d));

    const simulation = d3.forceSimulation(nodes)
        .force("charge", d3.forceManyBody())
        .force("link", d3.forceLink(links).id(d => d.id).strength(1.7).distance(70))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .on("tick", ticked);

    const link = svg.append("g")
        .attr("stroke", "#D4D4D4")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("stroke-width", 1);

    const node = svg.append("g")
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", d => (d.title === 'root') ? 29 : Math.max(d.value / 4, 20))
        .attr("fill", d => (d.title === 'root') ? '#228AA2' : color(d.value))
        .call(drag(simulation));

    node.append("title")
        .text(d => d.title);

    const text = svg.append("g")
        .attr("stroke-width", 0.3)
        .selectAll('text')
        .data(nodes)
        .enter()
        .append("text")
        .attr('text-anchor', 'middle')
		.attr("color", '#ffffff')
        .text(d => d.value)
        .call(drag(simulation));

    text.append("title")
        .text(d => d.title)
        .attr("color", "#FFFFFF");

    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        text
            .attr("x", d => d.x)
            .attr("y", d => d.y+5);
    }
});
