const apiKey = "e559aa7f71e5957dca05b7dd5d89568d";
async function getWeather() {
    let city = document.getElementById("city").value;

   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();
    
    console.log(data);

    if (data.cod !== 200) {
        alert("City not found!");
        return;
    }

    document.getElementById("weather").classList.remove("hidden");

    document.getElementById("location").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°C";
    document.getElementById("condition").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " km/h";

    changeBackground(data.weather[0].main);

    getForecast(city);
}

async function getForecast(city) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    let forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        let item = data.list[i];

        let div = document.createElement("div");
        div.innerHTML = `
            <p>${item.dt_txt}</p>
            <p>${item.main.temp}°C</p>
        `;

        forecastDiv.appendChild(div);
    }
}

function changeBackground(condition) {
    let body = document.body;

    if (condition === "Clear") {
        body.style.background = "linear-gradient(to right, #facc15, #f97316)";
    } else if (condition === "Rain") {
        body.style.background = "linear-gradient(to right, #0ea5e9, #1e293b)";
    } else if (condition === "Clouds") {
        body.style.background = "linear-gradient(to right, #94a3b8, #475569)";
    } else {
        body.style.background = "linear-gradient(to right, #0f172a, #1e293b)";
    }
}