import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Part1img from "../../images/Part1.png";
import { makeStyles } from "@mui/styles";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from "@mui/material/Button";
import "./Part1.css";

const useStyles = makeStyles((theme) => ({
    part1: {
      marginTop:"5rem",
      padding:"2rem"
    },
  }));

const NewPart1 = () => {

    const classes = useStyles();

  return (
    <Grid container justifyContent="space-between" className={classes.part1}>
      <Grid item md={6}>
      <Grid container>
          <div style={{lineHeight:"4rem"}}>
                <Grid style={{textAlign:"left"}} item xs={12} md={12}><Typography className="building">Building <span className="defi">DeFi </span></Typography></Grid>
                <Grid style={{textAlign:"left"}} item xs={12} md={12}><Typography className="building">Infrastructure</Typography></Grid> 
  
        </div>
              <Grid style={{textAlign:"left"}} item md={12}>
                  <Typography>The world's most advanced platform to start leveraging the full potential of Decentralised Finance.</Typography>
              </Grid>
              <Grid item style={{textAlign:"left"}} md={12}>
                <Grid container spacing = {1}>
                    <Grid style={{textAlign:"left"}} item md = {6}><Button style={{textTransform: 'titlecase'}} variant = "outlined">Dashboard</Button></Grid>
                    <Grid style={{textAlign:"left"}} item md = {6}><Button style={{textTransform: 'titlecase'}} variant = "outlined">Dashboard</Button></Grid>
                </Grid>
                </Grid>
              </Grid>
      </Grid>
      <Grid item md={6}>
        <img src = {Part1img} width = "100%"></img>
      </Grid>
    </Grid>
  );
};

export default NewPart1;
