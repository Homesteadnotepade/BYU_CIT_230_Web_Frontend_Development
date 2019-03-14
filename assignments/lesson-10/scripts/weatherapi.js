var requestURL = "api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=8ba9cf20950d82df6a347fc632349c65"

let weatherRequest = new XMLHttpRequest();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

};