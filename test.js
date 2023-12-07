const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');


search.addEventListener('click', () => {
    const APIKey = '2d9656e12a5cfa0fd6b7cbebd84d6e23';
    const city = document.querySelector('.search-box input').value;
    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json()).then(json => {

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '../img/sunny.png';
                    break;
                case 'Rain':
                    image.src = '../img/rainy.png';
                    break;
                case 'Clouds':
                    image.src = '../img/cloudy.png';
                    break;

                case 'Snow':
                    image.src = '../img/snow.png';
                    break;

                case 'Moist':
                    image.src = '../img/google.png';
                    break;
                case 'Haze':
                    image.src = '../img/google.png';
                    break;
                default:
                    image.src = '../img/sunny.png';
                    break;
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>&#176;</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
        })
})