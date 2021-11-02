import React from "react";
import { Grid, Typography } from "@mui/material";
import toggle from "./toggle.png";
import "./Part3.css";
const Part3 = () => {
    return ( 
        <Grid container md={12} spacing={1}>
            <Grid item md={4}>
                <Grid container direction="column">
                    <Grid item xs={12} md={12} style={{textAlign:"left"}}>
                    <img src = {toggle}></img>
                    </Grid>
                    <Grid item xs={12} md={12}style={{textAlign:"left"}}>
                    DeFi Smart Accounts
                    </Grid><Grid item xs={12} md={12}>
                    <Typography className="info">Smart contract account owned by the users to manage & optimize funds across any number of protocols</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4}>
                <Grid container direction="column">
                    <Grid item xs={12} md={12} style={{textAlign:"left"}}>
                    <img src = {toggle}></img>
                    </Grid>
                    <Grid item xs={12} md={12}style={{textAlign:"left"}}>
                    DeFi Smart Accounts
                    </Grid><Grid item xs={12} md={12}>
                    <Typography className="info">Smart contract account owned by the users to manage & optimize funds across any number of protocols</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4}>
                <Grid container direction="column">
                    <Grid item xs={12} md={12} style={{textAlign:"left"}}>
                    <img src = {toggle}></img>
                    </Grid>
                    <Grid item xs={12} md={12}style={{textAlign:"left"}}>
                    DeFi Smart Accounts
                    </Grid><Grid item xs={12} md={12}>
                    <Typography className="info">Smart contract account owned by the users to manage & optimize funds across any number of protocols</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default Part3;