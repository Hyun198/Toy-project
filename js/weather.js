const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const iconOutput = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById("locationinput");

const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

let cityInput = "London";

<<<<<<< HEAD
/* cities.forEach((city) => {
=======
cities.forEach((city) => {
>>>>>>> 42bcca1e779177e79086641c67a94e7603618396
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity = "0";
    });
<<<<<<< HEAD
}); */

/* form.addEventListener('submit', (e) => {
=======
});

form.addEventListener('submit', (e) => {
>>>>>>> 42bcca1e779177e79086641c67a94e7603618396
    if (search.value.length == 0) {
        alert('please type in a city name');
    } else {
        cityInput = search.value;
        fetchWeatherData();

        search.value = "";
        app.style.opacity = "0";
    }

    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
<<<<<<< HEAD
}; */
//8fdfdf872e2612c93e651a56809e1508  api key
=======
};

/* function fetchWeatherData() {
    fetch(`http://api.weatherapi.com/v1/current.json?key={}=${cityInput}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
} */
>>>>>>> 42bcca1e779177e79086641c67a94e7603618396
