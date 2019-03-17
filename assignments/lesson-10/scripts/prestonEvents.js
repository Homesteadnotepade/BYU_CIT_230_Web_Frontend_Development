var eventRequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
var eventRequest = new XMLHttpRequest();

eventRequest.open('GET', eventRequestURL);

eventRequest.responseType = 'json';
eventRequest.send();

eventRequest.onload = function() {
    var prestonInfo = eventRequest.response;
    
    populatePreston(prestonInfo);
    
};
// Preston information
function populatePreston(jsonObj){
    var towns = jsonObj.towns;

    for (var i = 0; i < towns.length; i++){
       var name = towns[i].name;
        if (name === "Preston"){
            var townEvent0 = document.createElement("h3");
            townEvent0.textContent += towns[i].events[0];

            var townEvent1 = document.createElement("h3");
            townEvent1.textContent += towns[i].events[1];

            var townEvent2 = document.createElement("h3");
            townEvent2.textContent += towns[i].events[2];
            
            document.getElementById("prestonEvent").appendChild(townEvent0);
            document.getElementById("prestonEvent").appendChild(townEvent1);
            document.getElementById("prestonEvent").appendChild(townEvent2);
        }
    }
}

