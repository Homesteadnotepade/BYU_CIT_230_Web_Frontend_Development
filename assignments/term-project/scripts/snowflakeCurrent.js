let snowflakeTemp = new XMLHttpRequest();
let snowflakeURLstring = 'http://api.openweathermap.org/data/2.5/weather?lat=34.502510&lon=-110.111568&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
snowflakeTemp.open('GET', snowflakeURLstring, true);
snowflakeTemp.send();

snowflakeTemp.onload =  function () {
    let CurrentSnowflakeTemp = JSON.parse(snowflakeTemp.responseText);
    console.log(CurrentSnowflakeTemp);
    
    document.getElementById('currently').innerHTML = CurrentSnowflakeTemp.weather[0].main;
    document.getElementById('high').innerHTML = CurrentSnowflakeTemp.main.temp_max;    
    document.getElementById('humidity').innerHTML = CurrentSnowflakeTemp.main.humidity;
    document.getElementById('wind_speed').innerHTML = CurrentSnowflakeTemp.wind.speed;
}