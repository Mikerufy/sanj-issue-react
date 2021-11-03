import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Part1img from "../../images/Part1.png";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import "./Part2.css";
const Part2 = () => {
    return ( 
        <Grid container className = "p2-container">
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={6}>
                <Grid container direction = "column">
                    <Grid item><Typography className="p2-info">Total Value Locked</Typography></Grid>
                    <Grid item><div className="p2-spin"></div></Grid>
                </Grid>
            </Grid>
            <Grid item xs={0} md={3}></Grid>
        </Grid>
    );
}
 
export default Part2;