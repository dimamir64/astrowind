function _1(md){return(
md`<div style="color: grey; font: 13px/25.5px var(--sans-serif); text-transform: uppercase;"><h1 style="display: none;">Sankey diagram</h1><a href="https://d3js.org/">D3</a> › <a href="/@d3/gallery">Gallery</a></div>

# Sankey diagram

This [Sankey diagram](https://github.com/d3/d3-sankey) visualizes the flow of energy: *supplies* are on the left, and *demands* are on the right. Links show how varying amounts of energy are converted or transmitted before being consumed or lost. Data: [Department of Energy & Climate Change](http://www.decc.gov.uk/en/content/cms/tackling/2050/calculator_on/calculator_on.aspx) via [Tom Counsell](https://tamc.github.io/Sankey/)`
)}

function _linkColor(Inputs,URLSearchParams,html){return(
Inputs.select(new Map([
  ["static", "#aaa"],
  ["source-target", "source-target"],
  ["source", "source"],
  ["target", "target"],
]), {
  value: new URLSearchParams(html`<a href>`.search).get("color") || "source-target",
  label: "Link color"
})
)}

function _nodeAlign(Inputs){return(
Inputs.select(new Map([["left", "sankeyLeft"], ["right", "sankeyRight"], ["center", "sankeyCenter"], ["justify", "sankeyJustify"]]), {
  value: "sankeyJustify",
  label: "Node alignment"
})
)}

function _chart(d3,nodeAlign,data,linkColor,DOM)
{
  // Specify the dimensions of the chart.
  const width = 928;
  const height = 600;
  const format = d3.format(",.0f");

  // Create a SVG container.
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

  // Constructs and configures a Sankey generator.
  const sankey = d3.sankey()
      .nodeId(d => d.name)
      .nodeAlign(d3[nodeAlign]) // d3.sankeyLeft, etc.
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 5], [width - 1, height - 5]]);

  // Applies it to the data. We make a copy of the nodes and links objects
  // so as to avoid mutating the original.
  const {nodes, links} = sankey({
    nodes: data.nodes.map(d => Object.assign({}, d)),
    links: data.links.map(d => Object.assign({}, d))
  });

  // Defines a color scale.
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Creates the rects that represent the nodes.
  const rect = svg.append("g")
      .attr("stroke", "#000")
    .selectAll()
    .data(nodes)
    .join("rect")
      .attr("x", d => d.x0)
      .attr("y", d => d.y0)
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => color(d.category));

  // Adds a title on the nodes.
  rect.append("title")
      .text(d => `${d.name}\n${format(d.value)} TWh`);

  // Creates the paths that represent the links.
  const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.5)
    .selectAll()
    .data(links)
    .join("g")
      .style("mix-blend-mode", "multiply");

  // Creates a gradient, if necessary, for the source-target color option.
  if (linkColor === "source-target") {
    const gradient = link.append("linearGradient")
        .attr("id", d => (d.uid = DOM.uid("link")).id)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", d => d.source.x1)
        .attr("x2", d => d.target.x0);
    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", d => color(d.source.category));
    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", d => color(d.target.category));
  }

  link.append("path")
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke", linkColor === "source-target" ? (d) => d.uid
          : linkColor === "source" ? (d) => color(d.source.category)
          : linkColor === "target" ? (d) => color(d.target.category) 
          : linkColor)
      .attr("stroke-width", d => Math.max(1, d.width));

  link.append("title")
      .text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)} TWh`);

  // Adds labels on the nodes.
  svg.append("g")
    .selectAll()
    .data(nodes)
    .join("text")
      .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
      .attr("y", d => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
      .text(d => d.name);

  return svg.node();
}


async function _data(FileAttachment)
{
  const links = await FileAttachment("energy.csv").csv({typed: true});
  const nodes = Array.from(new Set(links.flatMap(l => [l.source, l.target])), name => ({name, category: name.replace(/ .*/, "")}));
  return {nodes, links};
}


function _d3(require){return(
require("d3@7", "d3-sankey@0.12")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["energy.csv", {url: new URL("./files/d6774e9422bd72369f195a30d3a6b33ff9d41676cff4d89c93511e1a458efb3cfd16cbb7ce3fecdd8dd2466121e10c9bfe57fd73c7520bf358d352a92b898614.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof linkColor")).define("viewof linkColor", ["Inputs","URLSearchParams","html"], _linkColor);
  main.variable(observer("linkColor")).define("linkColor", ["Generators", "viewof linkColor"], (G, _) => G.input(_));
  main.variable(observer("viewof nodeAlign")).define("viewof nodeAlign", ["Inputs"], _nodeAlign);
  main.variable(observer("nodeAlign")).define("nodeAlign", ["Generators", "viewof nodeAlign"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3","nodeAlign","data","linkColor","DOM"], _chart);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
