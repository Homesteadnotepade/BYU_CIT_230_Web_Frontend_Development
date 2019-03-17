let CurrentTemp = new XMLHttpRequest();
let currentURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
CurrentTemp.open('GET', currentURLstring, true);
CurrentTemp.send();

CurrentTemp.onload =  function () {
    let CurrentPrestonTemp = JSON.parse(CurrentTemp.responseText);
    console.log(CurrentPrestonTemp);


    
    document.getElementById('currently').innerHTML = CurrentPrestonTemp.weather[0].main;
    document.getElementById('high').innerHTML = CurrentPrestonTemp.main.temp_max;
    
    document.getElementById('humidity').innerHTML = CurrentPrestonTemp.main.humidity;
    document.getElementById('wind_speed').innerHTML = CurrentPrestonTemp.wind.speed;

    
}
