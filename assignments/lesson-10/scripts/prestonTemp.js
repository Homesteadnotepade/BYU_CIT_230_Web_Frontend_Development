let PrestonTemp = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
PrestonTemp.open('GET', apiURLstring, true);
PrestonTemp.send();

PrestonTemp.onload =  function () {
    let weatherData = JSON.parse(PrestonTemp.responseText);
    console.log(weatherData); //Preston.html page Current Temp top left

    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;

}