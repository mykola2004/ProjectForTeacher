// Funkcja do renderowania grafu
function renderGraph(svgId, nodes, links) {

  const nodeColor = '#FFE0BD';
  const nodeDefectColor = '#D3D3D3';
  const marriageColor = "orange";
  const marriageDefectColor = "#696969";
  const childrenColor = "red";

  // Funkcja kolorująca linie
  const getColor = link => {
    const targetType = link.target.type
    return targetType === "marriage" ? marriageColor : childrenColor;
  };

  const getStrokeWidth = link => {
    const targetType = link.target.type
    return targetType === "marriage" ? 3 : 1;    
  }

  const width = 700, height = 750;

  d3.select(svgId).select("svg").remove();

  const svg = d3.select(svgId)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid black");

  svg.append("defs")
    .append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "-10 -5 10 10")
    .attr("refX", 15)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M -10,-5 L 0,0 L -10,5 Z")
    .attr("fill", "#999");

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

  svg.selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", d => getColor(d))
    .attr("stroke-width", d => getStrokeWidth(d));

  const node = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  node.filter(d => d.type === 'sexF')
    .append("path")
    .attr("d", d3.symbol().type(d3.symbolCircle).size(200))
    .attr("fill", d => d.defect ? nodeDefectColor : nodeColor)
    .attr("stroke-width", d => d.death ? 0.8 : 0)
    .attr("stroke", d => d.death ? "black" : "black");

  node.filter(d => d.type === 'sexM')
    .append("path")
    .attr("d", d3.symbol().type(d3.symbolTriangle).size(200))
    .attr("fill", nodeColor)
    .attr("stroke-width", d => d.death ? 0.8 : 0)
    .attr("stroke", d => d.death ? "black" : "black");    

  node.filter(d => d.type === 'marriage')
    .append("path")
    .attr("d", d3.symbol().type(d3.symbolSquare).size(200))
    .attr('fill', d => d.defect ? marriageDefectColor : marriageColor);
    // .attr("fill", marriageColor);

  node.append("text")
    .attr("dy", -1)
    .attr("text-anchor", "middle")
    .attr("font-size", "11px")
    .text(d => d.label);

  simulation.on("tick", () => {
    svg.selectAll("line")
      .attr("x1", d => d.source.x || 0)
      .attr("y1", d => d.source.y || 0)
      .attr("x2", d => d.target.x || 0)
      .attr("y2", d => d.target.y || 0);

    svg.selectAll(".node")
      .attr("transform", d => `translate(${d.x}, ${d.y})`);
  });

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}
