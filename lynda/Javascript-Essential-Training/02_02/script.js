var date,month,year,day;
var date = new Date();
day = date.getDate();
month = (date.getMonth())+1;
year = date.getFullYear();

document.body.innerHTML = "<h1> Today is "+month+"/"+day+"/"+year+"<h1>";