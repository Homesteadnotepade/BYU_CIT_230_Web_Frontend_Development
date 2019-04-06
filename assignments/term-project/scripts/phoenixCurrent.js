let phoenixTemp = new XMLHttpRequest();
let phoenixURLstring = 'http://api.openweathermap.org/data/2.5/weather?lat=33.698700&lon=-112.172261&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
phoenixTemp.open('GET', phoenixURLstring, true);
phoenixTemp.send();

phoenixTemp.onload =  function () {
    let CurrentPhoenixTemp = JSON.parse(phoenixTemp.responseText);
    console.log(CurrentPhoenixTemp);


    
    document.getElementById('currently').innerHTML = CurrentPhoenixTemp.weather[0].main;
    document.getElementById('high').innerHTML = CurrentPhoenixTemp.main.temp_max;    
    document.getElementById('humidity').innerHTML = CurrentPhoenixTemp.main.humidity;
    document.getElementById('wind_speed').innerHTML = CurrentPhoenixTemp.wind.speed;

    
}
