var mesaJsonURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
var mesaRequest = new XMLHttpRequest();

mesaRequest.open('GET', mesaJsonURL);

mesaRequest.responseType = 'json';
mesaRequest.send();

mesaRequest.onload = function() {
    var mesaInfo = mesaRequest.response;
    populateMesa(mesaInfo);
    
    
};
// Preston information updated
function populateMesa(jsonObj){
    var towns = jsonObj.towns;

    /*for (var i = 0; i < towns.length; i++){
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
            averageRainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;*/

            var history = document.createElement("h4");
            history.textContent = "history:" + history;
            
          /*document.getElementById("MesaTempleInfo").appendChild(townName);
          document.getElementById("MesaTempleInfo").appendChild(townMotto);
          document.getElementById("MesaTempleInfo").appendChild(yearFounded);
          document.getElementById("MesaTempleInfo").appendChild(currentPopulation);
          document.getElementById("MesaTempleInfo").appendChild(averageRainfall);*/
          document.getElementById("MesaTempleInfo").appendChild(history);
        }
    }
}
