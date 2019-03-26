var request = new XMLHttpRequest();

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.onreadystatechange = function () {

    if((request.status==200) && (request.readyState==4)){
        // console.log(request.responseText);
        var json = JSON.parse(request.responseText);
        // console.log(json);
        for (var i = 0; i < json.data.length; i++) {
            var movieData = json.data[i];
            if (movieData[10] === "Golden Gate Bridge") {
                document.getElementById('result').innerHTML += movieData[8] + " - " + movieData[9] + " - " + movieData[13] + "<br>" + "<br>";
            }
        }

    }

}
request.send();
