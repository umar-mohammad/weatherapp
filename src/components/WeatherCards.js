import React from "react"
import { Grid, CircularProgress, Box } from "@mui/material"
import { useSelector } from "react-redux"

import WeatherCard from "./WeatherCard"

export default function WeatherCards() {
    const weatherData = useSelector((state) => state.weather)

    return weatherData.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress />
        </Box>
    ) : (
        <Grid container justifyContent="space-evenly" alignItems="stretch" spacing={2}>
            {weatherData.summary.map((cardData, index) => {
                if (index === 0) {
                    cardData.day_of_week = "Today"
                    cardData.date = ""
                }

                return (
                    <Grid item xl={2} lg={2} md={4} xs={12} key={index}>
                        <WeatherCard data={cardData} detail={weatherData.detail[index]} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
