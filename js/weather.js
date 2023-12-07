const app = document.querySelector('.weather-app');
const search = document.querySelector('.search-box');

search.addEventListener('click', () => {
    const APIKey = '2d9656e12a5cfa0fd6b7cbebd84d6e23';
    const city = document.querySelector('.search-box input').value;
    if (city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=kr`)
        .then(response => response.json()).then(json => {

            const city = document.querySelector('.weather-app .city-time .name');
            const temperature = document.querySelector('.weather-app .temp');
            const description = document.querySelector('.weather .description');
            const cloudy = document.querySelector('.details .cloud');
            const humidity = document.querySelector('.details .humidity');
            const wind = document.querySelector('.details .Wind');

            city.innerHTML = `${json.name}`;
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>&#176;</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
        })

})