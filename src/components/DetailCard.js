import React from "react"
import moment from "moment"
import { Paper, Typography, Box, createTheme } from "@mui/material"

import WeatherInfo from "./WeatherInfo"

export default function DetailCard({ entry }) {
    return (
        <Paper sx={theme.paper} elevation={10}>
            <Box
                sx={[
                    theme.box,
                    {
                        alignItems: "center",
                    },
                ]}
            >
                <Typography variant="h3" sx={theme.date}>
                    {moment(entry.date, "YYYY-MM-DD HH:mm:ss").format("ha")}
                </Typography>
                <Typography variant="h3" sx={theme.temperature}>
                    {entry.temperature.toFixed(0)}
                    <Typography variant="h6">{"\u2103"}</Typography>
                </Typography>
            </Box>
            <Box sx={theme.imageBox}>
                <img src={entry.icon_url} alt="" style={theme.image} />
            </Box>
            <Box sx={theme.conditions}>
                <Typography variant="h6">{entry.conditions}</Typography>
                <Typography variant="body1" sx={theme.summary}>
                    {entry.summary}
                </Typography>
            </Box>
            <WeatherInfo entry={entry} />
        </Paper>
    )
}

const theme = createTheme({
    box: {
        display: "flex",
        justifyContent: "space-between",
    },
    imageBox: { display: "flex", justifyContent: "center", marginTop: -3 },
    date: { fontSize: 25 },
    image: { height: 150, marginTop: -5 },
    paper: { padding: 2, borderRadius: 4, maxWidth: 220 },
    conditions: { marginBottom: 1, marginTop: -3 },
    temperature: { display: "flex", fontSize: 30 },
    summary: { marginTop: -1, height: 30 },
})
