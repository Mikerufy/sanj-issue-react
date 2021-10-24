import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Typography } from "@mui/material";
import logo from "../images/logo.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    background: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} className={classes.nav} position="static">
        <Toolbar>
          <Grid container xs={12}>
            <Grid item xs={2} ></Grid>
            <Grid item xs={8} container>
              <Grid item xs={2} >
                <img src={logo} width="100%"></img>
              </Grid>
              <Grid item xs = {6}></Grid>
              <Grid item xs={4} container spacing={2}>
                  <Grid item xs = {6}>
                    <Button >Tokenomics</Button>
                  </Grid>
                  <Grid item xs= {6}>
                    <Button variant = "outlined">Dashboard</Button>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} ></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
