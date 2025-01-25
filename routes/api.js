const axios = require("axios");

const apiKey = ""; // <-- put your OpenWeatherApp API key here
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        return response.data; // returning the weather data
    } catch (error) {
        throw new Error("Error fetching weather data...");
    }
};

module.exports = {
    getWeatherByCity,
};