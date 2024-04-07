function onprocess(){
    var searchTerm2 = document.getElementById("searchBox").value ;

    document.getElementById("searchBox").value = ""; 
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm2}&appid=069fd4891e45fec7e799cfb2b066237b`;
    fetch (url)
    .then(res => res.json())
    .then(data=>show2(data))
}
function show2(data) {
    console.log(data);

    var oldContent = document.getElementById("weatheroutput");
    oldContent.textContent = "";

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
        Name:<b>${data.name}</b><br>
        Longitude: <b>${data.coord.lon}</b><br>
        Latitude: <b>${data.coord.lat}</b><br>
        Humidity:${data.main.humidity}<br>
        Temperature:${data.main.temp}<br>
        Wind Speed: ${data.wind.speed} m/s<br><br>`;
    newDiv.classList.add("innerstyle");
    oldContent.appendChild(newDiv);
}