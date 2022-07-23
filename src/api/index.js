import axios from "axios"
const API_KEY = "f8b53f5f131cebdaef4e99f8df8f70f3"
// const API_KEY = ""

const getUrl = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
}

export const fetchWeatherData = async (lat, lon) => await axios.get(getUrl(lat, lon))
