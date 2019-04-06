var mesaJsonURL = 'https://jaypstay.github.io/assignments/term-project/scripts/testjsons.json';
 
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

    for (var i = 0; i < temple; i++){
       var temtempleNameplename = temple[i].name;
        if (templeName === "Mesa Arizona Temple"){
          
            var history = document.createElement("h4");
              history.textContent = "history:" + temple.history;
          
          document.getElementById("MesaTempleInfo").appendChild(history);
        }
    }
}
