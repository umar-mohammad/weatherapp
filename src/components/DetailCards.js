import React from "react"
import { Modal, Grid, Fade, createTheme } from "@mui/material"

import DetailCard from "./DetailCard"

export default function DetailCards({ open, handleClose, data }) {
    return (
        <Modal open={open} onClose={handleClose} disableAutoFocus>
            <Fade in={open}>
                <Grid container sx={theme.grid} spacing={2}>
                    {data.map((entry) => (
                        <Grid item xl={1.5} lg={2} md={3} sm={6} xs={12}>
                            <DetailCard entry={entry} />
                        </Grid>
                    ))}
                </Grid>
            </Fade>
        </Modal>
    )
}

const theme = createTheme({
    grid: {
        height: "27vh",
        width: "90vw",
        display: "flex",
        left: "5.5%",
        top: "30%",
        position: "absolute",
    },
})
