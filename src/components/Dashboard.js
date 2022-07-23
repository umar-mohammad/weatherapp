import React, { useState } from "react"
import { Container, Typography, Box, AppBar, TextField, Button } from "@mui/material"
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded"
import { useDispatch } from "react-redux"
import { getWeatherData } from "../actions/weatherDataActions"
import WeatherCards from "./WeatherCards"

const Dashboard = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState("London")

    // useEffect(() => {
    //     dispatch(getWeatherData())
    // }, [dispatch])

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
                                Sunny ?
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ marginRight: 5 }}>
                        <TextField
                            defaultValue={city}
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: 3,
                                input: { color: "white" },
                            }}
                            onChange={(e) => {
                                setCity(e.target.value)
                            }}
                        />
                        <Button
                            sx={{
                                height: 60,
                                width: 100,
                                color: "white",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                borderRadius: 3,
                            }}
                        >
                            Search
                        </Button>
                    </Box>
                </Box>
            </AppBar>
            <Container maxWidth="xl">
                <Box>
                    <WeatherCards />
                </Box>
            </Container>
        </>
    )
}

export default Dashboard
