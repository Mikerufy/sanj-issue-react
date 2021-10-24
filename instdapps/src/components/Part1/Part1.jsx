import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Part1img from "../../images/Part1.png";
import { makeStyles } from "@mui/styles";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from "@mui/material/Button";
import "./Part1.css";

const useStyles = makeStyles((theme) => ({
    part1: {
      marginTop:"5rem"
    },
  }));

const Part1 = () => {

    const classes = useStyles();

  return (
    <Grid item xs={12} container className={classes.part1}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10} container spacing ={2}>
          <Grid item xs = {6} container >
              <Grid item xs={12}>
                <Grid container >
                <Grid item xs={7}><Typography className="building">Building</Typography></Grid>
                <Grid item xs={5}><Typography className="defi">DeFi</Typography></Grid></Grid>
                <Typography className="building">Infrastructure</Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography>The world's most advanced platform to start leveraging the full potential of Decentralised Finance.</Typography>
              </Grid>
              <Grid item xs={12} container spacing = {2}>
                <Grid item xs = {6}><Button style={{textTransform: 'titlecase'}} variant = "outlined">Dashboard</Button></Grid>
                <Grid item xs = {6}><Button style={{textTransform: 'titlecase'}} variant = "outlined">Dashboard</Button></Grid>
              </Grid>
          </Grid>
          <Grid item xs = {6}>
              <img src = {Part1img} width = "100%"></img>
          </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Part1;