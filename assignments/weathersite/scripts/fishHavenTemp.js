let fishHavenTemp = new XMLHttpRequest();
let fishHavenApiURL = 'http://api.openweathermap.org/data/2.5/weather?lat=42.036876&lon=-111.396318&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
fishHavenTemp.open('GET', fishHavenApiURL, true);
fishHavenTemp.send();

fishHavenTemp.onload =  function () {
    let weatherData = JSON.parse(fishHavenTemp.responseText);
    console.log(weatherData); //fishHaven.html page Current Temp top left

    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;

}