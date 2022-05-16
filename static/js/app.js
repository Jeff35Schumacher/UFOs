// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


//creating a function to build a table (module 11.5.1)

function buildTable(data) {
    //clear the current table if there is one.
    tbody.html("");

    //loop through the data
    data.forEach((dataRow) => {
        // Append rows to the table
        let row = tbody.append("tr");

        //loop through data and add cells to the table
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });

};


function handleClick() {

    //get the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild the table using the filtered data
    // @NOTE: If no date was entere, then filterData will
    // just be the original tableData.
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);


// Build the table when the page loads
buildTable(tableData);



