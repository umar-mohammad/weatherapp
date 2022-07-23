import React from "react"
import { Grid } from "@mui/material"
import WeatherCard from "./WeatherCard/WeatherCard"
import { useSelector } from "react-redux"

export default function WeatherCards() {
    const weatherData = useSelector((state) => state.weatherData)

    return (
        <Grid container justifyContent="space-evenly" alignItems="stretch" spacing={2}>
            {weatherData.map((cardData, index) => {
                if (index === 0) {
                    cardData.day_of_week = "Today"
                    cardData.date = ""
                }

                return (
                    <Grid item lg={2} md={4} sm={4} xs={12} key={index}>
                        <WeatherCard data={cardData} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
