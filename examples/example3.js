// Create our array of medals data
var medalsData = [{Country: "AUS", gold: 31, silver: 42, bronze: 76},
{Country: "CHN", gold: 74, silver: 53, bronze: 57},
{Country: "GER", gold: 42, silver: 16, bronze: 43},
{Country: "RUS", gold: 43, silver: 44, bronze: 56},
{Country: "USA", gold: 125, silver: 109, bronze: 81}];

// Let's also define some variables for our circle drawing
var maxRadius = 50;
var maxDiameter = maxRadius*2;
var offset = 20;
var maxGold = d3.max(medalsData, function(d){return d.gold;});

// Create the svg but this time make sure the svg size is large enough
d3.select("body").append("svg").style("height", 200).style("width", 600);

// Add circles to SVG, bind circles to data
d3.select("svg")
	.selectAll("circle").data(medalsData).enter()
	.append("circle")
	.attr("r", function(d,i){return Math.floor(maxRadius*d.gold/maxGold);}) // Now radius is based on number of gold medals
	.attr("cx", function(d,i){return maxRadius + i*(offset+maxDiameter);})
	.attr("cy", maxRadius)
	.style("fill","red");