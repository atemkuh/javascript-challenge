// from data.js
var tableData = data;
// create a console.log
console.log(tableData)

// YOUR CODE HERE!
// use select syntax to ref table body
var tbody=d3.select("tbody");

//use forEach meth0d for UFO values in each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row=tbody.append("tr");// append each tble row to each UFO value
// YOUR CODE HERE!
