const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');


search.addEventListener('click', () => {
    const APIKey = '2d9656e12a5cfa0fd6b7cbebd84d6e23';
    const city = document.querySelector('.serach-box input').value;
    if (city == '') {
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json()).then(json => {

            const image = document.querySelector('weather-box i');
            const temperature = document.querySelector('weather-box .temperature');
            const description = document.querySelector('weather-box .description');
            const humidity = document.querySelector('weather-details .humidity span');
            const wind = document.querySelector('weather-details .wind span');


            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '';

                    break;
                default:
                    break;
            }
        })
})