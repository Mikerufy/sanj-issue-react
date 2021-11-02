import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Part1img from "../../images/Part1.png";
import { makeStyles } from "@mui/styles";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from "@mui/material/Button";
import "./Part2.css";
const Part2 = () => {
    return ( 
        <Grid container>
            <Grid item md={3}></Grid>
            <Grid item md={6}>
                <Grid container direction = "column">
                    <Grid item><Typography className="info">Total Value Locked</Typography></Grid>
                    <Grid item><Typography className="dollar">$12,167,766,418</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item md={3}></Grid>
        </Grid>
    );
}
 
export default Part2;