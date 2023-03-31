var today = new Date();
var date = today.getDate();
var monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];
var month = monthNames[today.getMonth()];
var year = today.getFullYear();
document.getElementById("date").innerHTML = "Today's date is " + date + " " + month + ", " + year;
