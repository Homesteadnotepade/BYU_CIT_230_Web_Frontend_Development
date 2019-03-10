function windChill()
{
    var Temperature = parseInt(document.getElementById('Temp').value);
    var Wind = parseInt(document.getElementById('Wind').value);
    var outcome = 35.74 + 0.6215 * Temperature - 35.75 * Math.pow(Wind, 0.16) + 0.4275 * Temperature * Math.pow(Wind, 0.16);
    var results = outcome.toFixed(2);
    
    document.getElementById('weatheroutput').innerHTML = "Wind Chill" + ' ' + results + ' ' + "degrees.";
}

//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16