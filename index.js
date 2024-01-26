const apiKey = "d4eb3e41dd3c561eedf2496f3afc3c1e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-container button');
const weatherIcon = document.querySelector('.weather-icon');

// const warning = document.querySelector('.warning')

const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()
    // console.log(data);

    if (searchBox.value != data.name) {
        document.querySelector('.warning').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.text').style.display = 'block'
    }

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == 'Clear') {
            weatherIcon.src = './images/clear.png'
        }
        else if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = './images/clouds.png'
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = './images/drizzle.png'
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = './images/mist.png'
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = './images/rain.png'
        }
        else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = './images/snow.png'
        }

        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.text').style.display = 'none'
        document.querySelector('.warning').style.display = 'none'
};


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
});



