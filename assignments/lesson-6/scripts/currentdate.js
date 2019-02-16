
  
  var d = new Date();
  var dayOfTheWeek = d.getDay();
  var date = d.getDate();
  var month = d.getMonth()
  var year = d.getFullYear();
  
  if (dayOfTheWeek == 0){
    dayOfTheWeek = "Sunday";
  } else if ( dayOfTheWeek == 1){
    dayOfTheWeek = "Monday";
  } else if ( dayOfTheWeek == 2){
    dayOfTheWeek = "Tuesday";
  } else if ( dayOfTheWeek == 3){
    dayOfTheWeek = "Wednesday";
  } else if ( dayOfTheWeek == 4){
    dayOfTheWeek = "Thursday";
  } else if ( dayOfTheWeek == 5){
    dayOfTheWeek = "Friday";
  } else if( dayOfTheWeek == 6) {
    dayOfTheWeek = "Saturday";
  }

if ( month == 0){
    month = "January";
} else if ( month == 1){
    month = "Febuary";
} else if ( month == 2){
    month = "March";
} else if ( month == 3){
    month = "April";
} else if ( month == 4){
    month = "May";
} else if ( month == 5){
    month = "June";
} else if ( month == 6){
    month = "July";
} else if ( month == 7){
    month = "August";
} else if ( month == 8){
    month = "September";
} else if ( month == 9){
    month = "October";
} else if ( month == 10){
    month = "November";
} else if ( month == 11){
    month = "December"
}
  
document.write(dayOfTheWeek + ", " + date + " " + month + " " + year);
