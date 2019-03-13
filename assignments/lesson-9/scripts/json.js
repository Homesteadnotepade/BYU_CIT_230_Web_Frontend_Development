var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var prestonWeather = request.resopnse;
        populateHeader(prestonWeather);
        showTowns(prestonWeather);
    }

    //Work on this bottom part
    function prestonWeather(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj['towns'];
        header.appendChild(myH1);

    for (var i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        myH2.textContent = towns[i].name;
        myPara1.textContent = 'Motto: ' + towns[i].motto;
        myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
        myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;

        document.getElementById('prestonMoto').appendChild(myPara1);
        document.getElementById('prestonMoto').innerHTML = towns[i];
    }
      /*  if(name === 'Preston') {
            var townName = documents.createElement('p');
            townName.textContent = towns[i].name;

            document.getElementById('prestonMoto').appendChild(townName);
        }

        
/*
        for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
 var myH2 = document.createElement('h2');
 var myPara1 = document.createElement('p');
 var myPara2 = document.createElement('p');
 var myPara3 = document.createElement('p');
 var myList = document.createElement('ul');