
    var Temperature = parseInt(document.getElementById('Temp').value);
    var Wind = parseInt(document.getElementById('Wind').value);
    var result = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);

    document.getElementById('output').innerHTML = "Wind Chill" + ' ' + result + ' ' + "degrees.")


//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
