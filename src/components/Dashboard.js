import React from "react"
import { Container, Box, Grow, createTheme } from "@mui/material"

import TopBar from "./TopBar"
import WeatherCards from "./WeatherCards"

const Dashboard = () => {
    return (
        <div style={theme.dashboard}>
            <TopBar />
            <Grow in>
                <Container maxWidth="xl">
                    <Box sx={{ marginTop: 8 }}>
                        <WeatherCards />
                    </Box>
                </Container>
            </Grow>
        </div>
    )
}

export default Dashboard

const theme = createTheme({
    dashboard: { background: "linear-gradient(#96d4ca, #7c65a9)", height: "100vh" },
})
