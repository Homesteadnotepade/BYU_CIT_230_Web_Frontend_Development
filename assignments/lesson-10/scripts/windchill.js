let windChillDRequest = new XMLHttpRequest();
let WcURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
windChillDRequest.open('GET', WcURLstring, true);
windChillDRequest.send();

windChillDRequest.onload =  function () {
    let chillWindData = JSON.parse(windChillDRequest.responseText);
    console.log(chillWindData);

                document.getElementById('tempature').innerHTML = chillWindData.main.temp;
                document.getElementById('windSpeed').innerHTML = chillWindData.wind.speed;
                var outcome = windChill(tempature, windSpeed);

                document.getElementById('weatheroutput').innerHTML = results;
}
function windChill(Temperature, Wind)
{
    var Temperature = parseInt(document.getElementById('Temp').value);
    var Wind = parseInt(document.getElementById('Wind').value);
    var outcome = 35.74 + 0.6215 * Temperature - 35.75 * Math.pow(Wind, 0.16) + 0.4275 * Temperature * Math.pow(Wind, 0.16);
    var results = outcome.toFixed(2);
    return results;
}

//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16