let windChillDRequest = new XMLHttpRequest();
let WcURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
windChillDRequest.open('GET', WcURLstring, true);
windChillDRequest.send();

windChillDRequest.onload =  function () {
    let chillWindData = JSON.parse(windChillDRequest.responseText);
    console.log(chillWindData);

            var Temperature = chillWindData.main.temp;
            var Wind = chillWindData.wind.speed;
               
            var outcome = 35.74 + 0.6215 * Temperature - 35.75 * Math.pow(Wind, 0.16) + 0.4275 * Temperature * Math.pow(Wind, 0.16);
            var results = outcome.toFixed(2);

            document.getElementById('weatheroutput').innerHTML = results;
}
