let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    
    document.getElementById('day1').innerHTML = weatherData.list[3].clouds.dt_txt;
    let icon = "https://openweathermap.org/img/w/" + weatherData.list[3].weather[0].icon + ".png";
    document.getElementById('day1Icon').setAttribute('src', icon);
    document.getElementById('day1temp').innerHTML = weatherData.list[3].main.temp;


    document.getElementById('day2').innerHTML = weatherData.list[11].clouds.dt_txt;
    icon = "https://openweathermap.org/img/w/" + weatherData.list[11].weather[0].icon + ".png";
    document.getElementById('day2Icon').setAttribute('src', icon);
    document.getElementById('day2temp').innerHTML = weatherData.list[11].main.temp;


    document.getElementById('day3').innerHTML = weatherData.list[19].clouds.dt_txt;
    icon = "https://openweathermap.org/img/w/" + weatherData.list[19].weather[0].icon + ".png";
    document.getElementById('day3Icon').setAttribute('src', icon);
    document.getElementById('day3temp').innerHTML = weatherData.list[19].main.temp;


    document.getElementById('day4').innerHTML = weatherData.list[27].clouds.dt_txt;
    icon = "https://openweathermap.org/img/w/" + weatherData.list[27].weather[0].icon + ".png";
    document.getElementById('day4Icon').setAttribute('src', icon);
    document.getElementById('day4temp').innerHTML = weatherData.list[27].main.temp;


    document.getElementById('day5').innerHTML = weatherData.list[35].clouds.dt_txt;
    icon = "https://openweathermap.org/img/w/" + weatherData.list[35].weather[0].icon + ".png";
    document.getElementById('day5Icon').setAttribute('src', icon);
    document.getElementById('day5temp').innerHTML = weatherData.list[35].main.temp;
    
}