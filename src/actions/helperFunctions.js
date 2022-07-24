import moment from "moment"

export const aggregateEntriesByDay = (data) => {
    const data_by_day = {}

    for (let i in data.list) {
        const entry = data.list[i]

        // eslint-disable-next-line no-unused-vars
        const [date, time] = entry.dt_txt.split(" ")

        if (date in data_by_day) {
            data_by_day[date] = [...data_by_day[date], entry]
        } else {
            data_by_day[date] = [entry]
        }
    }
    return data_by_day
}

export const getSummaryData = (data) => {
    const day_data = []

    for (let day in data) {
        const entries = data[day]

        const [day_of_week, date] = getDayAndDate(entries)
        const [min_temp, max_temp] = getMinMaxTemps(entries)
        const [conditions, summary, icon_url] = getConditionsSummaryAndIcon(entries)
        const wind_speed = getAvgWindSpeed(entries)

        day_data.push({
            day_of_week,
            date,
            min_temp,
            max_temp,
            conditions,
            summary,
            wind_speed,
            icon_url,
        })
    }

    return day_data
}

export const getDetailData = (data) => {
    const day_data = []

    for (let day in data) {
        const entries = data[day]
        const details = entries.map((entry) => {
            return {
                date: entry.dt_txt,
                conditions: entry.weather[0].main,
                summary: entry.weather[0].description,
                temperature: entry.main.temp,
                pressure: entry.main.pressure,
                humidity: entry.main.humidity,
                wind: entry.wind.speed,
                cloudiness: entry.clouds.all,
                icon_url: `http://openweathermap.org/img/wn/${entry.weather[0].icon}@4x.png`,
            }
        })
        day_data.push(details)
    }

    return day_data
}

const getMinMaxTemps = (entries) => {
    let min_temp = 1000
    let max_temp = -1000

    entries.forEach((entry) => {
        min_temp = Math.min(min_temp, entry.main.temp_min)
        max_temp = Math.max(max_temp, entry.main.temp_max)
    })

    min_temp = Math.round(min_temp)
    max_temp = Math.round(max_temp)

    return [min_temp, max_temp]
}

const getAvgWindSpeed = (entries) => {
    let avg_wind_speed = 0

    entries.forEach((entry) => {
        avg_wind_speed += entry.wind.speed
    })

    return Math.round((avg_wind_speed / entries.length) * 10) / 10
}

const getDayAndDate = (entries) => {
    const date_string = entries[0].dt_txt
    const moment_date = moment(date_string, "YYYY-MM-DD HH:mm:ss")
    return [moment_date.format("dddd"), moment_date.format("Do")]
}

const getConditionsSummaryAndIcon = (entries) => {
    // due to API limitations we define the conditions for some day by taking the ~median entry
    const median = entries[Math.floor(entries.length / 2)]
    const conditions = median.weather[0].main
    const summary = median.weather[0].description
    const icon_url = `http://openweathermap.org/img/wn/${median.weather[0].icon}@4x.png`
    return [conditions, summary, icon_url]
}
