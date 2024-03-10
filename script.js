let button = document.getElementById("btn")
let input = document.getElementById("input-loc")
let temp = document.getElementById("temp-value")
let disc = document.getElementById("weather-disc")
let city = document.getElementById("city-name")
let country1 = document.getElementById("country")

const apikey = `424f1538f20a4db17f3595b96d1e462b`;

button.onclick = function(){
    if(input.value == "")
    alert("Enter ur location")
else{
    loc = input.value
    url = 
     `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
    // fetch(url).then(res => res.json())
    async function fetchdata(){
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    fetchdata()
    .then(data =>{
        console.log(data)
        const{name} =data
        const {feels_like} = data.main
        const{description} = data.weather[0]
        const{country} = data.sys
        temp.innerText = Math.floor(feels_like-273);
        city.innerText = name;
        disc.innerText = description;
        country1.innerText = country;
    })
    .catch(()=>{
        alert("Enter valid location")
    })
    input.value = ""
}
}