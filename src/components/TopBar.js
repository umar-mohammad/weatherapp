import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Typography, Box, AppBar, TextField, Button, createTheme } from "@mui/material"
import { getWeatherDataByCity } from "../actions/weather"
import LogoIcon from "@mui/icons-material/Flare"

export default function TopBar() {
    const dispatch = useDispatch()
    const [city, setCity] = useState("London, GB")

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    useEffect(() => {
        dispatch(getWeatherDataByCity(city))
    }, [])

    return (
        <AppBar position="static" sx={theme.appBar}>
            <Box sx={theme.appBarBox}>
                <Box style={theme.title}>
                    <LogoIcon fontSize="large" sx={theme.logo} />
                    <Typography variant="h3" component="h1" sx={{ fontWeight: "500" }}>
                        How's the weather in
                    </Typography>
                    <Typography variant="h3" component="h1" sx={theme.city}>
                        {city}
                    </Typography>
                    <Typography variant="h3" component="h1">
                        ?
                    </Typography>
                </Box>
                <Box sx={{ marginRight: 5 }}>
                    <TextField defaultValue={city} sx={theme.search} onChange={handleChange} />
                    <Button
                        onClick={() => {
                            dispatch(getWeatherDataByCity(city))
                        }}
                        sx={theme.button}
                    >
                        Search
                    </Button>
                </Box>
            </Box>
        </AppBar>
    )
}

const theme = createTheme({
    appBar: {
        backgroundColor: "#111",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    appBarBox: { display: "flex", alignItems: "center", justifyContent: "space-between" },
    title: {
        display: "flex",
        alignItems: "center",
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 40,
    },
    city: { marginLeft: 1, marginRight: 1, color: "rgb(255,245,0)", fontWeight: "500" },
    button: {
        height: 60,
        width: 100,
        color: "white",
        backgroundColor: "#000",
        borderRadius: 3,
    },
    search: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 3,
        input: { color: "white" },
        width: 250,
    },
    logo: { marginRight: 3, transform: "scale(1.5)" },
})
