let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    
    document.getElementById('currently').innerHTML = weatherData.weather[0].main;
    document.getElementById('high').innerHTML = weatherData.main.temp_max;
    
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('wind_speed').innerHTML = weatherData.wind.speed;
}
