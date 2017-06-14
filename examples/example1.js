// Example 1 - Draw a simple circle

// Create the svg element
d3.select("body").append("svg");

// Draw a circle
d3.select("svg").append("circle")
.attr("r", 50)
.attr("cx",50)
  .attr("cy",50)
  .style("fill","red");

