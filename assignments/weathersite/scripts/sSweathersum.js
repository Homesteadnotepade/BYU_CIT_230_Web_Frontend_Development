let sSweatherSum = new XMLHttpRequest();
let sSUrlReq = 'http://api.openweathermap.org/data/2.5/weather?lat=42.659211&lon=-111.585378&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
sSweatherSum.open('GET', sSUrlReq, true);
sSweatherSum.send();

sSweatherSum.onload =  function () {
    let SodaSpringSumTemp = JSON.parse(sSweatherSum.responseText);
    console.log(SodaSpringSumTemp);

       
    
    document.getElementById('currently').innerHTML = SodaSpringSumTemp.weather[0].main;
    document.getElementById('high').innerHTML = SodaSpringSumTemp.main.temp_max;  
     
    document.getElementById('humidity').innerHTML = SodaSpringSumTemp.main.humidity;
    document.getElementById('wind_speed').innerHTML = SodaSpringSumTemp.wind.speed;

    var Temperature = chillWindData.main.temp;
    var Wind = chillWindData.wind.speed;
       
    var outcome = 35.74 + 0.6215 * Temperature - 35.75 * Math.pow(Wind, 0.16) + 0.4275 * Temperature * Math.pow(Wind, 0.16);
    var results = outcome.toFixed(2);

    document.getElementById('weatheroutput').innerHTML = results; 
    
}
