import * as api from "../api/index"
import { aggregateEntriesByDay, getSummaryData, getDetailData } from "./helperFunctions"

export const getWeatherDataByCity = (city) => async (dispatch) => {
    try {
        const { data } = await api.fetchWeatherDataByCity(city)
        const aggregate = aggregateEntriesByDay(data)
        const summary_data = getSummaryData(aggregate)
        const detail_data = getDetailData(aggregate)

        dispatch({
            type: "GET_WEATHER_DATA",
            payload: {
                summary: summary_data,
                detail: detail_data,
            },
        })
    } catch (error) {
        console.log(error)
    }
}
