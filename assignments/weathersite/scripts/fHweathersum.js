let fishHavenSum = new XMLHttpRequest();
let FhURLstring = 'http://api.openweathermap.org/data/2.5/weather?lat=42.036876&lon=-111.396318&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
fishHavenSum.open('GET', FhURLstring, true);
fishHavenSum.send();

fishHavenSum.onload =  function () {
    let CurrentPrestonTemp = JSON.parse(fishHavenSum.responseText);
    console.log(CurrentPrestonTemp);


    
    document.getElementById('currently').innerHTML = CurrentPrestonTemp.weather[0].main;
    document.getElementById('high').innerHTML = CurrentPrestonTemp.main.temp_max;    
    document.getElementById('humidity').innerHTML = CurrentPrestonTemp.main.humidity;
    document.getElementById('wind_speed').innerHTML = CurrentPrestonTemp.wind.speed;

    var Temperature = chillWindData.main.temp;
    var Wind = chillWindData.wind.speed;
       
    var outcome = 35.74 + 0.6215 * Temperature - 35.75 * Math.pow(Wind, 0.16) + 0.4275 * Temperature * Math.pow(Wind, 0.16);
    var results = outcome.toFixed(2);

    document.getElementById('weatheroutput').innerHTML = results;
    
}
