let gilaValleyTemp = new XMLHttpRequest();
let gilaValleyURLstring = 'http://api.openweathermap.org/data/2.5/weather?lat=32.863033&lon=-109.789995&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
gilaValleyTemp.open('GET', snowflakeURLstring, true);
gilaValleyTemp.send();

gilaValleyTemp.onload =  function () {
    let CurrentGilaValleyTemp = JSON.parse(gilaValleyTemp.responseText);
    console.log(CurrentGilaValleyTemp);
    
    document.getElementById('gilaVallyCurrent').innerHTML = CurrentGilaValleyTemp.weather[0].main;
    document.getElementById('high').innerHTML = CurrentGilaValleyTemp.main.temp_max;    
    document.getElementById('humidity').innerHTML = CurrentGilaValleyTemp.main.humidity;
    document.getElementById('wind_speed').innerHTML = CurrentGilaValleyTemp.wind.speed;
}
