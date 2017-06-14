// Add some constants for drawing
maxRadius = 50;
offset = 20;
diameter = maxRadius*2;

// Create an array of zeros
var simpleArray = [0,0,0,0,0];

d3.select("svg")
.selectAll("circle").data(simpleArray).enter()
.append("circle")
.attr("r", maxRadius)
.attr("cx", function(d,i){return maxRadius + i*(offset+diameter)})
.attr("cy", maxRadius)
.style("fill","red")
.on("mouseover", function(){d3.select(this).style("fill","black")})
.on("mouseout", function(){d3.select(this).style("fill","red")});