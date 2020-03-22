// from data.js
var tableData = data;

// YOUR CODE HERE!
var body = d3.select("tbody");

// Creating function to display tableData from data.js file
function showTable(data) {
    body.text("")
    data.forEach(function(UFO) {
        var row = body.append("tr");
        Object.entries(UFO).forEach(function([key, value]) {
            var td = row.append("td").text(value);
        });
    });
};

showTable(data);

// Using d3 to find what the user has input and the button on the page
var userInput = d3.select("#datetime");
var button = d3.select("#filter-btn")

// Function to display new table based on user's input
function buttonClick() {
    d3.event.preventDefault();
    console.log(userInput.property("value"));
    var user_table = data.filter(sightings => sightings.datetime===userInput.property("value"));
    showTable(user_table);
}

// Event listener
userInput.on("change", buttonClick);