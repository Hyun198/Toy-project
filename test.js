const button = document.querySelector(".button");
const API_KEY = '8fdfdf872e2612c93e651a56809e1508';



button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, fail);
});
const success = (position) => {
    const lat = position.coords.latitude; 
    const long= position.coords.longitude;

    getWeather(lat, long);
}
const fail = ()=>{
    alert("좌표를 불러올 수 없음");
}

const tempSection = document.querySelector('.temperature');
const placeSection = document.querySelector('.place');
const descSection = document.querySelector('.description');
const getWeather = (lat,lon) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    ).then((response)=> {
        const temperature = response.json();
        const place= response.name;

        
        console.log(temperature);
        console.log(place); //undefined
    }).catch((error)=>{
        alert(error);
    });
}


