// Function to display weather data
function showWeatherData(response) {
    let cityElement = document.querySelector("#cityName");
    cityElement.innerHTML = response.data.name;
  
    let temperature = Math.round(response.data.main.temp);
    let changeTemp = document.querySelector("#temperature");
  
    changeTemp.innerHTML = `${temperature} °C`;
  }
  
  function fetchWeatherData(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeatherData);
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#cityInput").value;
    fetchWeatherData(city);
  }
  
  function searchLocation(position) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeatherData);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
  let currentLocationButton = document.querySelector("#currentLocationButton");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
  //Date and Time
  function formatTime(time) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let currentHour = time.getHours();
    let currentMin = time.getMinutes();
    let currentDay = days[time.getDay()];
  
    // Format minutes with leading zero if needed
    if (currentMin < 10) {
      currentMin = "0" + currentMin;
    }
  
    let changeTime = document.querySelector("#time");
    changeTime.innerHTML = `${currentHour}:${currentMin} ${currentDay}`;
  }
  
  function formatDate(date) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let currentDate = date.getDate();
    let currentYear = date.getFullYear();
    let currentMonth = months[date.getMonth()];
  
    let changeDate = document.querySelector("#date");
    changeDate.innerHTML = `${currentMonth} ${currentDate} ${currentYear}`
  }
  
  formatTime(new Date());
  formatDate(new Date());
  