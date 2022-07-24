import axios from "axios"

// API KEYS CANNOT BE HIDDEN ON CLIENT SIDE
const API_KEY = "e16ea4e530f987fb1fa3f3fd6e38c73d"

const weatherDataUrlByCity = (city) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
}

export const fetchWeatherDataByCity = async (city) => await axios.get(weatherDataUrlByCity(city))
