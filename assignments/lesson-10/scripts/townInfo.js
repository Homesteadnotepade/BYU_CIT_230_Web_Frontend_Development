var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var prestonInfo = request.response;
    var sodaSpringsInfo = request.response;
    var fishHavenInfo = request.response;
    populatePreston(prestonInfo);
    populateSodaSprings(sodaSpringsInfo);
    populateFishHaven(fishHavenInfo);
    
};
// Preston information
function populatePreston(jsonObj){
    var towns = jsonObj.towns;

    for (var i = 0; i < towns.length; i++){
       var name = towns[i].name;
        if (name === "Preston"){
            var townName = document.createElement("h3");
            townName.textContent = towns[i].name;
          var townMotto = document.createElement("p");
            townMotto.textContent = "Motto: " + towns[i].motto;
          var yearFounded = document.createElement("p");
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
          var currentPopulation = document.createElement("p");
            currentPopulation.textContent = "Current Population: " + towns[i].currentPopulation;
          var averageRainfall = document.createElement("p");
            averageRainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
            
          document.getElementById("prestonMoto").appendChild(townName);
          document.getElementById("prestonMoto").appendChild(townMotto);
          document.getElementById("prestonMoto").appendChild(yearFounded);
          document.getElementById("prestonMoto").appendChild(currentPopulation);
          document.getElementById("prestonMoto").appendChild(averageRainfall);
        }
    }
}
// Soda Springs
function populateSodaSprings(jsonObj){
    var towns = jsonObj.towns;

    for (var i = 0; i < towns.length; i++){
       var name = towns[i].name;
        if (name === "Soda Springs"){
            var townName = document.createElement("h3");
            townName.textContent = towns[i].name;
          var townMotto = document.createElement("p");
            townMotto.textContent = "Motto: " + towns[i].motto;
          var yearFounded = document.createElement("p");
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
          var currentPopulation = document.createElement("p");
            currentPopulation.textContent = "Current Population: " + towns[i].currentPopulation;
          var averageRainfall = document.createElement("p");
            averageRainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
            
          document.getElementById("sodaMoto").appendChild(townName);
          document.getElementById("sodaMoto").appendChild(townMotto);
          document.getElementById("sodaMoto").appendChild(yearFounded);
          document.getElementById("sodaMoto").appendChild(currentPopulation);
          document.getElementById("sodaMoto").appendChild(averageRainfall);
        }
    }
}
// Fish Haven
function populateFishHaven(jsonObj){
    var towns = jsonObj.towns;

    for (var i = 0; i < towns.length; i++){
       var name = towns[i].name;
        if (name === "Fish Haven"){
            var townName = document.createElement("h3");
            townName.textContent = towns[i].name;
          var townMotto = document.createElement("p");
            townMotto.textContent = "Motto: " + towns[i].motto;
          var yearFounded = document.createElement("p");
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
          var currentPopulation = document.createElement("p");
            currentPopulation.textContent = "Current Population: " + towns[i].currentPopulation;
          var averageRainfall = document.createElement("p");
            averageRainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
            
          document.getElementById("fishMoto").appendChild(townName);
          document.getElementById("fishMoto").appendChild(townMotto);
          document.getElementById("fishMoto").appendChild(yearFounded);
          document.getElementById("fishMoto").appendChild(currentPopulation);
          document.getElementById("fishMoto").appendChild(averageRainfall);
        }
    }
} 
