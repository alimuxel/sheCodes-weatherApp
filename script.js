function displaySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let searchOutput = document.querySelector("#search-location");
  searchOutput.innerHTML = searchInput.value;
}
let time = new Date();
let hours = time.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = time.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#live-temperature");
  temperatureElement.innerHTML = 24;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#live-temperature");
  temperatureElement.innerHTML = 75;
}

let day = new Date();
day.getDay([weekdays]);
let weekday = document.querySelector("#weekday");
weekday.innerHTML = `${weekdays[day.getDay()]}`;

let liveTime = document.querySelector("#live-time");
liveTime.innerHTML = `${hours}:${minutes}`;

let search = document.querySelector("#search-field");
search.addEventListener("submit", displaySearch);

let celsiusTemp = document.querySelector("#celsius-temp");
celsiusTemp.addEventListener("click", convertToCelsius);

let fahrenheitTemp = document.querySelector("#fahrenheit-temp");
fahrenheitTemp.addEventListener("click", convertToFahrenheit);
