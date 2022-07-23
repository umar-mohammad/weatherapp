import React, { useState } from "react"
import { Box, Typography, Paper } from "@mui/material"
import AirIcon from "@mui/icons-material/Air"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export default function WeatherCard({ data }) {
    const { day_of_week, date, min_temp, max_temp, conditions, summary, wind_speed, icon_url } =
        data

    const [elevation, setElevation] = useState(3)

    return (
        <Paper
            sx={{
                maxWidth: 300,
                borderRadius: 3,
                "&:hover": {
                    background: "rgb(253,253,255)",
                },
            }}
            elevation={elevation}
            onMouseOver={() => {
                setElevation(12)
            }}
            onMouseOut={() => {
                setElevation(3)
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "right",
                    paddingTop: 1,
                    paddingRight: 2,
                }}
            >
                <Typography variant="h5">{day_of_week}</Typography>
                <Typography variant="h5" sx={{ marginLeft: 0.5 }}>
                    {date}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "right",
                    marginRight: 2,
                }}
            >
                <Box sx={{ display: "flex" }}>
                    <KeyboardArrowUpIcon fontsSize="small" sx={{ color: "red" }} />
                    <Typography variant="h6" sx={{ marginLeft: -0.5, fontSize: 20 }}>
                        {max_temp}
                        {"\u00B0"}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", marginLeft: 0.5 }}>
                    <KeyboardArrowDownIcon fontsSize="small" sx={{ color: "blue" }} />
                    <Typography variant="h6" sx={{ marginLeft: -0.5, fontSize: 20 }}>
                        {min_temp}
                        {"\u00B0"}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "right",
                    marginRight: 2.5,
                    alignItems: "center",
                }}
            >
                <AirIcon fontSize="small" sx={{ color: "rgb(51,255,255)" }} />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "baseline",
                    }}
                >
                    <Typography variant="h6" sx={{ marginLeft: 0.5, fontSize: 18 }}>
                        {wind_speed}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ marginLeft: 0.25, fontSize: 10, fontWeight: "400" }}
                    >
                        Km/h
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: -3 }}>
                <img src={icon_url} alt="" style={{ height: 200 }} />
            </Box>
            <Box sx={{ paddingX: 1, height: 100, marginLeft: 1 }}>
                <Typography variant="h4">{conditions}</Typography>
                <Typography variant="h5">{summary}</Typography>
            </Box>
        </Paper>
    )
}
