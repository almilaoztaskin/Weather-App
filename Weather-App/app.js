

const apiKey = "fc2077da3a62d42f72687d2ca78606ee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searhBox = document.querySelector(".search input");
const searhBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}

function searchWeather() {
    checkWeather(searhBox.value);
}

searhBtn.addEventListener("click", searchWeather);

searhBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchWeather();
    }
});



searhBtn.addEventListener("click", () => {
    checkWeather(searhBox.value);
})
