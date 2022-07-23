import axios from "axios"
const API_KEY = "4f1dec8ea153877bf003df1e8049450a"

const weatherDataUrl = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
}

export const fetchWeatherData = async (lat, lon) => await axios.get(weatherDataUrl(lat, lon))
