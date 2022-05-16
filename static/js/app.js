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

