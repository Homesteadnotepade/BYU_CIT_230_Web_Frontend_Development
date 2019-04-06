var mesaJsonURL = 'jaypstay.github.io/assignments/term-project/scripts/testjsons.json';
 
var mesaRequest = new XMLHttpRequest();

mesaRequest.open('GET', mesaJsonURL);

mesaRequest.responseType = 'json';
mesaRequest.send();

mesaRequest.onload = function() {
    var mesaInfo = mesaRequest.response;
    populateMesa(mesaInfo);
    
    
};

function populateMesa(jsonObj){
    var temple = jsonObj.temple;

    for (var i = 0; i < temple.length; i++){
       var temtempleNameplename = temple[i].name;
        if (templeName === "Mesa Arizona Temple"){
           /* var townName = document.createElement("h3");
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
              history.textContent = "history:" + temple.history;
            
          /*document.getElementById("MesaTempleInfo").appendChild(townName);
          document.getElementById("MesaTempleInfo").appendChild(townMotto);
          document.getElementById("MesaTempleInfo").appendChild(yearFounded);
          document.getElementById("MesaTempleInfo").appendChild(currentPopulation);
          document.getElementById("MesaTempleInfo").appendChild(averageRainfall);*/
          document.getElementById("MesaTempleInfo").appendChild(history);
        }
    }
}
