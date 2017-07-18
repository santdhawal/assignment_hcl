'use strict';

const { SparklineGraph } = require('../sparklineGraph.js');

class View {
  constructor(model, tableBody) {
    this.model = model;
    this.tableBody = tableBody;
  }

 render() {
   const data = this.model.data;
   const element = document.getElementById(data.name);
   // if element already present, update content
   if(element) {
     const tableElement = document.getElementById(data.name);
     for(let i=0; i<Object.keys(data).length; i++) {
       tableElement.children[i].innerHTML = (i === 0 ) ? Object.values(data)[i].match(/.{1,3}/g).join('-').toUpperCase() : Object.values(data)[i].toFixed(6);
     }
   } else { // else create new row for element
     let row = document.createElement("tr");
     row.setAttribute('id', data.name);
     for(let i=0; i<Object.keys(data).length; i++) {
       if(i == 0) {
         row.innerHTML += "<td>"+Object.values(data)[i].match(/.{1,3}/g).join('-').toUpperCase()+"</td>";
       } else {
         row.innerHTML += "<td>"+Object.values(data)[i].toFixed(6)+"</td>";
       }
     }
     row.innerHTML += "<td><span class='sparkline' id='spark_"+data.name+"'></span></td>";

     // instance of SparklineGraph
     const sparkline = new SparklineGraph(row.querySelector("span.sparkline"), this.model);
     //sparkline.plot();
     this.model.sparklineData.push(sparkline);

     // append row to table
     document.getElementsByTagName("tbody")[0].appendChild(row);
   }

  this.sort(true);
 }
// method to sort tale
 sort(asc) {
		let tableBody = this.tableBody,
		    rows = tableBody.getElementsByTagName("tr"),
		    sorted = false;
		while(!sorted)
		{
			sorted = true;
      let totalRows = rows.length;
			for (let i = 0; i < totalRows - 1; i++)
			{
				let row = rows[i],
				    nextRow = rows[i+1],
				    value = row.children[6].innerHTML,
				    nextValue = nextRow.children[6].innerHTML;

				value = value.replace(',', ''); // to remove any comma if used
				nextValue = nextValue.replace(',', '');

				if(!isNaN(value))
				{
					value = parseFloat(value);
					nextValue = parseFloat(nextValue);
				}

				if (asc ? value > nextValue : value < nextValue)
				{
					tableBody.insertBefore(nextRow, row);
					sorted = false;
				}
			}
    }
  }
}

exports.View = View;
