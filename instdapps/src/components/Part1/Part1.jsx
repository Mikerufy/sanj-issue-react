import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Part1img from "../../images/Part1.png";
import { makeStyles } from "@mui/styles";
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
    <Grid item md={12} container className={classes.part1}>
      <Grid item md={10} container spacing ={2}>
          <Grid item md = {6} container >
              <Grid item md={12}>
                <Grid container >
                <Grid item md={7}><Typography className="building">Building</Typography></Grid>
                <Grid item md={5}><Typography className="defi">DeFi</Typography></Grid></Grid>
                <Typography className="building">Infrastructure</Typography>
              </Grid>
              <Grid item md={12}>
                  <Typography>The world's most advanced platform to start leveraging the full potential of Decentralised Finance.</Typography>
              </Grid>
              <Grid item md={12} container spacing = {2}>
                <Grid item md = {6}><Button style={{textTransform: 'titlecase'}} variant = "outlined">Dashboard</Button></Grid>
                <Grid item md = {6}><Button style={{textTransform: 'titlecase'}} variant = "outlined">Dashboard</Button></Grid>
              </Grid>
          </Grid>
          <Grid item md = {6}>
              <img src = {Part1img} width = "100%"></img>
          </Grid>
      </Grid>
    </Grid>
  );
};

export default Part1;
