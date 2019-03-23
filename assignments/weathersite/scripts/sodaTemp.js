let sodaTemp = new XMLHttpRequest();
let sodaSpringApiURL = 'http://api.openweathermap.org/data/2.5/weather?lat=42.659211&lon=-111.585378&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
sodaTemp.open('GET', sodaSpringApiURL, true);
sodaTemp.send();

sodaTemp.onload =  function () {
    let weatherData = JSON.parse(sodaTemp.responseText);
    console.log(weatherData); //SodaSprings.html page Current Temp top right

    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;

}