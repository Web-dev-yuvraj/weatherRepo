const SearchBox = document.getElementById('SearchBox');
const SearchButton = document.getElementById('SearchButton');
const icon = document.querySelector('.icon');
let city = document.querySelector('.city');
let temp = document.querySelector('.temperature-degree');
let description = document.querySelector('.temperature-description');


setInterval(() => {
    a = new Date();
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time;
}, 1000);




SearchBox.addEventListener('keypress' , (event) =>{
        weatherRepot(SearchBox.value);
});

function weatherRepot(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=292e22e640c199d95e858797f8216f01`)
    .then(weather =>{
        return weather.json();
    }).then(DisplayWeather);
}

function DisplayWeather(weather) {
    console.log(weather);
    city.textContent = weather.name;
    temp.textContent = (parseInt(weather.main.temp-273));
    description.textContent = weather.weather[0].description;
    
}