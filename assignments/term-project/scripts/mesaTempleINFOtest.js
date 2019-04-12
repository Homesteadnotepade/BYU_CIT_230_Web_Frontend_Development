var mesaJsonURL = 'https://jaypstay.github.io/assignments/term-project/scripts/templeService.json';
 
var mesaRequest = new XMLHttpRequest();

mesaRequest.open('GET', mesaJsonURL);

mesaRequest.responseType = 'json';
mesaRequest.send();

mesaRequest.onload = function() {
    var mesaInfo = mesaRequest.response;
    populateMesa(mesaInfo);
};

function populateMesa(jsonObj){
    var temple = jsonObj.templeService;

    for (var i = 0; i < templeService; i++){
       var templeName = templeService[i].name;
        if (templeService[i].name === "Mesa Arizona Temple"){
          
            var services = document.createElement("h2");
            services.textContent = "Services: " + templeService.services;
          
          document.getElementById("MesaTempleInfo").appendChild(services);
        }
    }
}
var mesaJsonURL = 'https://jaypstay.github.io/assignments/term-project/scripts/templeService.json';
 
var mesaRequest = new XMLHttpRequest();

mesaRequest.open('GET', mesaJsonURL);

mesaRequest.responseType = 'json';
mesaRequest.send();

mesaRequest.onload = function() {
    var mesaInfo = mesaRequest.response;
    populateMesa(mesaInfo);

};

function populateMesa(jsonObj){
    var templeService = jsonObj.templeService;

    for (var i = 0; i < templeService.length; i++){
       var service = templeService[i].services;
        if (service === "Mesa Arizona Temple"){
            var townEvent0 = document.createElement("h3");
            townEvent0.textContent += towns[i].events[0];