import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Typography } from "@mui/material";
import logo from "./logo.svg";
import { makeStyles } from "@mui/styles";
import "./Appbar.css";

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
          <Grid container md={12}>
            <Grid item xs={0} md={2} ></Grid>
            <Grid item xs={12}md={8} container>
              <Grid item xs={5}md={2} >
                <img src={logo} width="100%"className="nav-img"></img>
              </Grid>
              <Grid item xs={7}md = {6}></Grid>
              <Grid item xs={0}md={4} container spacing={2}>
                  <Grid item md = {6}>
                    <Button className="nav-buttons">Tokenomics</Button>
                  </Grid>
                  <Grid item md= {6}>
                    <Button variant = "outlined" className="nav-buttons">Dashboard</Button>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0} md={2} ></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
