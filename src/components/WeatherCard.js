import React, { useState } from "react"
import { Box, Typography, Paper, createTheme } from "@mui/material"
import AirIcon from "@mui/icons-material/Air"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import DetailCards from "./DetailCards"

export default function WeatherCard({ data, detail }) {
    const [elevation, setElevation] = useState(3)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Box>
            <Paper
                sx={theme.paper}
                elevation={elevation}
                onMouseOver={() => {
                    setElevation(20)
                }}
                onMouseOut={() => {
                    setElevation(3)
                }}
                onClick={handleOpen}
            >
                <Box sx={[theme.box, { paddingTop: 1, paddingRight: 2, alignItems: "center" }]}>
                    <Typography variant="h5" sx={theme.dayOfWeek}>
                        {data.day_of_week}
                    </Typography>
                    <Typography variant="h5" sx={theme.date}>
                        {data.date}
                    </Typography>
                </Box>
                <Box sx={[theme.box, { marginRight: 2 }]}>
                    <Box sx={{ display: "flex" }}>
                        <KeyboardArrowUpIcon fontSize="small" sx={{ color: "red" }} />
                        <Typography variant="h6" sx={theme.temp}>
                            {data.max_temp}
                            {"\u00B0"}
                        </Typography>
                    </Box>
                    <Box sx={theme.tempBox}>
                        <KeyboardArrowDownIcon fontSize="small" sx={{ color: "lightblue" }} />
                        <Typography variant="h6" sx={theme.temperature}>
                            {data.min_temp}
                            {"\u00B0"}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={[theme.wind, theme.box]}>
                    <AirIcon fontSize="small" sx={theme.airIcon} />
                    <Box
                        sx={[
                            theme.box,
                            {
                                alignItems: "baseline",
                            },
                        ]}
                    >
                        <Typography variant="h6" sx={theme.windSpeed}>
                            {data.wind_speed}
                        </Typography>
                        <Typography variant="body2" sx={theme.windUnit}>
                            Km/h
                        </Typography>
                    </Box>
                </Box>
                <Box sx={theme.imageBox}>
                    <img src={data.icon_url} alt="" style={theme.image} />
                </Box>
                <Box sx={theme.conditionsBox}>
                    <Typography variant="h4" sx={theme.conditions}>
                        {data.conditions}
                    </Typography>
                    <Typography variant="h5" sx={theme.summary}>
                        {data.summary}
                    </Typography>
                </Box>
            </Paper>
            <DetailCards open={open} handleClose={handleClose} data={detail} />
        </Box>
    )
}

const theme = createTheme({
    paper: {
        maxWidth: 300,
        borderRadius: 4,
        transition: "all .3s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
            transition: "all .3s ease-in-out",
        },
        backgroundColor: "#111",
        color: "white",
        paddingY: 2,
        paddingX: 1,
    },
    box: {
        display: "flex",
        justifyContent: "right",
    },
    imageBox: {
        display: "flex",
        marginTop: -3,
        justifyContent: "center",
    },
    temperature: { marginLeft: -0.5, fontSize: 20 },
    tempBox: { display: "flex", marginLeft: 0.5 },
    wind: {
        alignItems: "center",
        marginRight: 2.5,
    },
    conditions: { fontWeight: "500" },
    windSpeed: { marginLeft: 0.5, fontSize: 18 },
    airIcon: { color: "rgb(45,255,255)" },
    windUnit: { marginLeft: 0.25, fontSize: 12, fontWeight: "500" },
    summary: { fontWeight: "400" },
    image: { height: 175 },
    dayOfWeek: { fontWeight: "500" },
    date: { marginLeft: 0.5 },
    conditionsBox: { paddingX: 1, height: 100, marginLeft: 1 },
})
