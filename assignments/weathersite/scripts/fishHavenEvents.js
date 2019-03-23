var fishHavenEventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
var fHeventRequest = new XMLHttpRequest();

fHeventRequest.open('GET', fishHavenEventURL);

fHeventRequest.responseType = 'json';
fHeventRequest.send();

fHeventRequest.onload = function() {
    var fishHavenInfo = fHeventRequest.response;
    
    populateFishHaven(fishHavenInfo);
    
};
// Fish Haven information
function populateFishHaven(jsonObj){
    var towns = jsonObj.towns;

    for (var i = 0; i < towns.length; i++){
       var name = towns[i].name;
        if (name === "Fish Haven"){
            var townEvent0 = document.createElement("h3");
            townEvent0.textContent += towns[i].events[0];

            var townEvent1 = document.createElement("h3");
            townEvent1.textContent += towns[i].events[1];

            var townEvent2 = document.createElement("h3");
            townEvent2.textContent += towns[i].events[2];

            var townEvent3 = document.createElement("h3");
            townEvent3.textContent += towns[i].events[3];
            
            document.getElementById("fishHavenEventinfo").appendChild(townEvent0);
            document.getElementById("fishHavenEventinfo").appendChild(townEvent1);
            document.getElementById("fishHavenEventinfo").appendChild(townEvent2);
            document.getElementById("fishHavenEventinfo").appendChild(townEvent3);
        }
    }
}

