var sodaSpringsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
var sSeventRequest = new XMLHttpRequest();

sSeventRequest.open('GET', sodaSpringsURL);

sSeventRequest.responseType = 'json';
sSeventRequest.send();

sSeventRequest.onload = function() {
    var SodaSpringsInfo = sSeventRequest.response;
    
    populateSodaSprings(SodaSpringsInfo);
    
};
// Preston information
function populateSodaSprings(jsonObj){
    var towns = jsonObj.towns;

    for (var i = 0; i < towns.length; i++){
       var name = towns[i].name;
        if (name === "Soda Springs"){
            var townEvent0 = document.createElement("h3");
            townEvent0.textContent += towns[i].events[0];

            var townEvent1 = document.createElement("h3");
            townEvent1.textContent += towns[i].events[1];

            var townEvent2 = document.createElement("h3");
            townEvent2.textContent += towns[i].events[2];
            
            document.getElementById("sodaSpringsEvent").appendChild(townEvent0);
            document.getElementById("sodaSpringsEvent").appendChild(townEvent1);
            document.getElementById("sodaSpringsEvent").appendChild(townEvent2);
        }
    }
}

