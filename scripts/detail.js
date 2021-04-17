var jsFromDate = document.getElementById("fromDate").value;
var jsToDate = document.getElementById("fromDate").value;

console.log(jsFromDate);
var d1 = new Date(jsFromDate);   
var d2 = new Date(jsToDate);   
const diffTime = Math.abs(d2 - d1);
// var diff = d2.getTime() - d1.getTime();   
var daydiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(daydiff);
var persons = document.getElementById("adults").value;
document.getElementById("total").value = persons*daydiff*1000;