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
    

    // for each ufo value in console.log use "Object.entries"
    Object.entries(ufoSighting).forEach(function([key,value]) {
        console.log(key,value);
        var cell =row.append("td");// append each value to a row
        cell.text(value);

    })
   
})
// filter button selection
var button =d3.select("#filter-btn");
button.on("click", function(){
    tbody.html("");
    var inputElement =d3.select("#datetime"); // get html date data by using the "select" method
    var inputValue=inputElement.property("value");//get the property value of each date, state and shape
    console.log(inputValue); //will get you the input value
    var filteredData=tableData.filter(sighting =>sighting.datetime === inputValue);// filter equal datetime to input value
    console.log(filteredData);
})
