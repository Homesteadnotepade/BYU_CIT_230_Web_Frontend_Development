let gilbertTemp = new XMLHttpRequest();
let gilbertURLstring = 'http://api.openweathermap.org/data/2.5/weather?lat=34.502510&lon=-110.111568&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
gilbertTemp.open('GET', gilbertURLstring, true);
gilbertTemp.send();

gilbertTemp.onload =  function () {
    let CurrentGilbertTemp = JSON.parse(gilbertTemp.responseText);
    console.log(CurrentGilbertTemp);
    
    document.getElementById('currently').innerHTML = CurrentGilbertTemp.weather[0].main;
    document.getElementById('high').innerHTML = CurrentGilbertTemp.main.temp_max;    
    document.getElementById('humidity').innerHTML = CurrentGilbertTemp.main.humidity;
    document.getElementById('wind_speed').innerHTML = CurrentGilbertTemp.wind.speed;
}