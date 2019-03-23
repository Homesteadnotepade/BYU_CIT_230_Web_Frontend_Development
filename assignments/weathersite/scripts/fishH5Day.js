let weatherRequest = new XMLHttpRequest();
let FDURLstring = 'http://api.openweathermap.org/data/2.5/forecast?lat=42.036876&lon=-111.396318&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
weatherRequest.open('GET', FDURLstring, true);
weatherRequest.send();

function FiveDayForcast(apiDay) {
    var dayDate = new Date(apiDay);
    var day = dayDate.getDay();
    var dayOfWeek;
    switch (day){
        case 0:
        dayOfWeek = "Sunday";
        break;
        case 1:
        dayOfWeek = "Monday";
        break;
        case 2:
        dayOfWeek = "Tuesday";
        break;
        case 3:
        dayOfWeek = "Wednesday";
        break;
        case 4:
        dayOfWeek = "Thursday";
        break;
        case 5:
        dayOfWeek = "Friday";
        break;
        case 6:
        dayOfWeek = "Saturday";
        default:
        break;
    }
    return dayOfWeek;

}

weatherRequest.onload = function (){
    let forcastDay = JSON.parse(weatherRequest.responseText);
    console.log(forcastDay);

    var imageWeather = "http://openweathermap.org/img/w/";
    var forcastArray = forcastDay.list;
    var day1, day2, day3, day4, day5, day6, day7
    var z = 0;

    for (var i = 0; i < forcastArray.length; i++) {
        var x = forcastDay.list[i].dt_txt;
        var y = x.includes('18:00:00');
        if ( y === true) {
            switch (z){
                case 0:
                day1 = forcastDay.list[i];
                break;
                case 1:
                day2 = forcastDay.list[i];
                break;
                case 2:
                day3 = forcastDay.list[i];
                break;
                case 3:
                day4 = forcastDay.list[i];
                break;
                case 4:
                day5 = forcastDay.list[i];
                default:
                break;
            }
            z++;
        }
    }

    document.getElementById('day_1').innerHTML = FiveDayForcast(day1.dt_txt);
    document.getElementById('day1Icon').setAttribute('src', imageWeather + day1.weather[0].icon + ".png");
    document.getElementById('day1temp').innerHTML = day1.main.temp + "&deg";

    document.getElementById('day_2').innerHTML = FiveDayForcast(day2.dt_txt);
    document.getElementById('day2Icon').setAttribute('src', imageWeather + day2.weather[0].icon + ".png");
    document.getElementById('day2temp').innerHTML = day2.main.temp + "&deg";

    document.getElementById('day_3').innerHTML = FiveDayForcast(day3.dt_txt);
    document.getElementById('day3Icon').setAttribute('src', imageWeather + day3.weather[0].icon + ".png");
    document.getElementById('day3temp').innerHTML = day3.main.temp + "&deg";

    document.getElementById('day_4').innerHTML = FiveDayForcast(day4.dt_txt);
    document.getElementById('day4Icon').setAttribute('src', imageWeather + day4.weather[0].icon + ".png");
    document.getElementById('day4temp').innerHTML = day4.main.temp + "&deg";

    document.getElementById('day_5').innerHTML = FiveDayForcast(day5.dt_txt);    
    document.getElementById('day5Icon').setAttribute('src', imageWeather + day5.weather[0].icon + ".png");    
    document.getElementById('day5temp').innerHTML = day5.main.temp + "&deg";

}
