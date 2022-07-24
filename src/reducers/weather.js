const weather = (data = [], action) => {
    switch (action.type) {
        case "GET_WEATHER_DATA":
            return action.payload
        default:
            return data
    }
}

export default weather
