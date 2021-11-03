import React from "react";
import { Grid, Typography } from "@mui/material";
import toggle from "./toggle.png";
import "./Part3.css";
const Part3 = () => {
    return ( 
        <Grid container md={12} spacing={2} className = "p3-container">
            <Grid item md={4}>
                <Grid container direction="column" className = "p3-div">

                    <Grid item xs={12} md={12} style={{textAlign:"left"}}>
                    <img src = {toggle}></img>
                    </Grid>
                    <Grid item xs={12} md={12}style={{textAlign:"left"}}>
                        <div className="p3-title">
                        DeFi Smart Accounts
                        </div>
                    
                    </Grid><Grid item xs={12} md={12}>
                    <Typography className="info">Smart contract account owned by the users to manage & optimize funds across any number of protocols</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4}>
                <Grid container direction="column" className = "p3-div">
                    <Grid item xs={12} md={12} style={{textAlign:"left"}}>
                    <img src = {toggle}></img>
                    </Grid>
                    <Grid item xs={12} md={12}style={{textAlign:"left"}}>
                    <div className="p3-title">
                        DeFi Smart Accounts
                        </div>
                    </Grid><Grid item xs={12} md={12}>
                    <Typography className="info">Smart contract account owned by the users to manage & optimize funds across any number of protocols</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4}>
                <Grid container direction="column" className = "p3-div">
                    <Grid item xs={12} md={12} style={{textAlign:"left"}}>
                    <img src = {toggle}></img>
                    </Grid>
                    <Grid item xs={12} md={12}style={{textAlign:"left"}}>
                    <div className="p3-title">
                        DeFi Smart Accounts
                        </div>
                    </Grid><Grid item xs={12} md={12}>
                    <Typography className="info">Smart contract account owned by the users to manage & optimize funds across any number of protocols</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default Part3;