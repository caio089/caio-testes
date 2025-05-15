//variaveias
const apikey = "9aeb86a8d321c1a1ec30bc218dc4dece";

const cityinput = document.getElementById("city-input");
const searchBtn = document.getElementById("search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperatura span");
const descElement = document.querySelector("#description");
const umiditElement = document.querySelector("#umidade span");
const windElement = document.querySelector("#vento span");

const containerwather = document.querySelecto("#dados-previsao");
//funcoes

const getdadostempo = async (city) => {
  const apitempoURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    apikey +
    "&lang=pt";

  const res = await fetch(apitempoURL);
  const data = await res.json();
  return data;
};

const showWeatherdata = async (city) => {
  const data = await getdadostempo(city);
  cityElement.innerHTML = data.name;
  tempElement.innerHTML = parseInt(data.main.temp);
  descElement.innerHTML = data.weather[0].description;
  windElement.innerHTML = data.wind.speed + "km/h";
  umiditElement.innerHTML = data.main.humidity + "%";

  containerwather.classList.remove("hide");
};
//eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityinput.value;
  showWeatherdata(city);
});
