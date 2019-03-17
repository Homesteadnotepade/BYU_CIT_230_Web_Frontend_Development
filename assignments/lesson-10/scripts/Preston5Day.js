let weatherFiveDRequest = new XMLHttpRequest();
let FdURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
weatherFiveDRequest.open('GET', FdURLstring, true);
weatherFiveDRequest.send();

weatherFiveDRequest.onload =  function () {
    let weatherData = JSON.parse(weatherFiveDRequest.responseText);
    console.log(weatherData);

    
    for (var i = 0; i < weatherData.list.length; i++) {
        var x = weatherData.list[i].dt_txt;
        var y = x.includes('18:00:00');
            if (y === true) {
                document.getElementById('day1').innerHTML = weatherData.list[i].clouds.dt_txt;
                icon = "https://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png";
                document.getElementById('day1Icon').setAttribute('src', icon);
                document.getElementById('day1temp').innerHTML = weatherData.list[i].main.temp;
            
                document.getElementById('day2').innerHTML = weatherData.list[i].clouds.dt_txt;
                icon = "https://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png";
                document.getElementById('day2Icon').setAttribute('src', icon);
                document.getElementById('day2temp').innerHTML = weatherData.list[i].main.temp;

                document.getElementById('day3').innerHTML = weatherData.list[i].clouds.dt_txt;
                icon = "https://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png";
                document.getElementById('day3Icon').setAttribute('src', icon);
                document.getElementById('day3temp').innerHTML = weatherData.list[i].main.temp;

                document.getElementById('day4').innerHTML = weatherData.list[i].clouds.dt_txt;
                icon = "https://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png";
                document.getElementById('day4Icon').setAttribute('src', icon);
                document.getElementById('day4temp').innerHTML = weatherData.list[i].main.temp;

                document.getElementById('day5').innerHTML = weatherData.list[i].clouds.dt_txt;
                icon = "https://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png";
                document.getElementById('day5Icon').setAttribute('src', icon);
                document.getElementById('day5temp').innerHTML = weatherData.list[i].main.temp;

              }
    }        
    
} 