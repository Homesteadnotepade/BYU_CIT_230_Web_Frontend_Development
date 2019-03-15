let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp;

    let icon = "http://openweathermap.org/img/w/" + weatherData.weater[0].icon + ".png";
    let desc = weatherData.weather.description;

    document.getElementById('current-temp').setAttribute('src', icon);
    document.getElementById('current-temp').setAttribute('alt', desc);
}