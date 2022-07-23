import React, { useState, useEffect } from "react"
import { Container, Typography, Box, AppBar, Select, MenuItem } from "@mui/material"
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded"
import { useDispatch } from "react-redux"
import { getWeatherData } from "../actions/weatherDataActions"
import WeatherCards from "./WeatherCards"

const LONDON = "London"
const PARIS = "Paris"
const ROME = "Rome"

const coordinates = (city) => {
    switch (city) {
        case LONDON:
            return {
                lat: 51,
                lon: -0.12,
            }
        case PARIS:
            return {
                lat: 40,
                lon: 15,
            }
        case ROME:
            return {
                lat: 30,
                lon: 20,
            }
        default:
            return {
                lat: 51,
                lon: -0.12,
            }
    }
}

const Dashboard = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState(() => LONDON)

    // useEffect(() => {
    //     const { lat, lon } = coordinates(city)
    //     dispatch(getWeatherData(lat, lon))
    // }, [city, dispatch])

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "rgb(25,25,25)",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                    <Box style={{ marginBottom: 30, marginTop: 30, marginLeft: 50 }}>
                        <Box style={{ display: "flex", alignItems: "center" }}>
                            <WbSunnyRoundedIcon fontSize="large" sx={{ marginRight: 2 }} />
                            <Typography variant="h3" component="h1">
                                How's the weather in {city}?
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ marginRight: 5, display: "flex" }}>
                        <Select
                            value={city}
                            label="city"
                            onChange={handleChange}
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: 3,
                                border: 0,
                                width: 250,
                                color: "white",
                            }}
                        >
                            <MenuItem value={LONDON}>London</MenuItem>
                            <MenuItem value={PARIS}>Paris</MenuItem>
                            <MenuItem value={ROME}>Rome</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </AppBar>
            <Container maxWidth="xl">
                <Box sx={{ marginTop: 15 }}>
                    <WeatherCards />
                </Box>
            </Container>
        </>
    )
}

export default Dashboard
