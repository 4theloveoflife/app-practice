function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#currentTemperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    temperatureElement.innerHTML=Math.round (response.data.main.temp);
cityElement.innerHTML=response.data.name;
descriptionElement.innerHTML=response.data.weather[0].description;
humidityElement.innerHTML=response.data.main.humidity;
windElement.innerHTML=Math.round (response.data.wind.speed);
}

let apiKey= "eada887ccbd6462c016357c4150a3af7";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);