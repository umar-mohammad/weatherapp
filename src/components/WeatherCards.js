import React from "react"
import { Grid } from "@mui/material"
import WeatherCard from "./WeatherCard/WeatherCard"
import { useSelector } from "react-redux"

export default function WeatherCards() {
    const weatherData = useSelector((state) => state.weatherData)

    return (
        <Grid container justifyContent="space-evenly" alignItems="stretch" spacing={2}>
            {weatherData.map((cardData, i) => (
                <Grid item lg={2} md={4} sm={4} xs={12} key={i}>
                    <WeatherCard data={cardData} />
                </Grid>
            ))}
        </Grid>
    )
}
