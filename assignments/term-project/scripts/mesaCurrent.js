let mesaTemp = new XMLHttpRequest();
let mesaURLstring = 'http://api.openweathermap.org/data/2.5/weather?lat=33.412789&lon=-111.819578&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65';
mesaTemp.open('GET', mesaURLstring, true);
mesaTemp.send();

mesaTemp.onload =  function () {
    let CurrentMesaTemp = JSON.parse(mesaTemp.responseText);
    console.log(CurrentMesaTemp);


    
    document.getElementById('currently').innerHTML = CurrentMesaTemp.weather[0].main;
    document.getElementById('high').innerHTML = CurrentMesaTemp.main.temp_max;    
    document.getElementById('humidity').innerHTML = CurrentMesaTemp.main.humidity;
    document.getElementById('wind_speed').innerHTML = CurrentMesaTemp.wind.speed;

    
}

api.openweathermap.org/data/2.5/weather?lat=33.412789&lon=-111.819578&units=imperial&APPID=8ba9cf20950d82df6a347fc632349c65
