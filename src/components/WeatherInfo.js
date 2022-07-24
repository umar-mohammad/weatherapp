import React from "react"
import { Tooltip, Typography, Grid, Box, createTheme } from "@mui/material"
import PressureIcon from "@mui/icons-material/Compress"
import HumidityIcon from "@mui/icons-material/Opacity"
import WindIcon from "@mui/icons-material/Air"
import CloudIcon from "@mui/icons-material/FilterDrama"

export default function WeatherInfo({ entry }) {
    return (
        <Grid container>
            <Grid item xl={6} xs={6}>
                <Tooltip title="Pressure (kPa)" placement="top">
                    <Box sx={theme.box}>
                        <PressureIcon fontSize="small" />
                        <Typography sx={theme.typography}>
                            {Math.round(entry.pressure / 10)}
                        </Typography>
                    </Box>
                </Tooltip>
            </Grid>
            <Grid item xl={6} xs={6}>
                <Tooltip title="% Humidity" placement="top">
                    <Box sx={theme.box}>
                        <HumidityIcon fontSize="small" />
                        <Typography sx={theme.typography}>{entry.humidity}</Typography>
                    </Box>
                </Tooltip>
            </Grid>
            <Grid item xl={6} xs={6}>
                <Tooltip title="Wind (Km/h)" placement="top">
                    <Box sx={theme.box}>
                        <WindIcon fontSize="small" />
                        <Typography sx={theme.typography}>{entry.wind.toFixed(1)}</Typography>
                    </Box>
                </Tooltip>
            </Grid>
            <Grid item xl={6} xs={6}>
                <Tooltip title="% Cloudiness" placement="top">
                    <Box sx={theme.box}>
                        <CloudIcon fontSize="small" />
                        <Typography sx={theme.typography}>{entry.cloudiness}</Typography>
                    </Box>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

const theme = createTheme({
    box: {
        display: "flex",
        justifyContent: "left",
    },
    typography: { marginLeft: 0.5 },
})
