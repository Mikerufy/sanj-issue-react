import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Part1img from "../../images/Part1.png";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import "./Part1.css";

const useStyles = makeStyles((theme) => ({
  part1: {
    marginTop: "7rem",
  },
}));

const NewPart1 = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="space-between"
      className={classes.part1}
      spacing={5}
    >
      <Grid item xs={12} md={7}>
        <Grid container>
          <div style={{ lineHeight: "4rem" }} className="part1">
            <Grid style={{ textAlign: "left" }} item xs={12} md={12}>
              <Typography className="building">
                Building <span className="defi">DeFi </span>
              </Typography>
            </Grid>
            <Grid style={{ textAlign: "left" }} item xs={12} md={12}>
              <Typography className="building">Infrastructure</Typography>
            </Grid>

            <Grid style={{ textAlign: "left" }} item md={12}>
              <Typography className="desc">
                The world's most advanced platform to start leveraging the full
                potential of Decentralised Finance.
              </Typography>
            </Grid>
            <div className="p1-but-div">
              <Grid item style={{ textAlign: "left" }} md={12}>
                <Grid container spacing={1}>
                  <Grid style={{ textAlign: "left" }} item xs={12} md={6}>
                    <Button
                      className="p1-but"
                      style={{ textTransform: "titlecase" }}
                      variant="outlined"
                    >
                      Dashboard
                    </Button>
                  </Grid>
                  <Grid style={{ textAlign: "left" }} item xs={12} md={6}>
                    <Button
                      className="p1-but"
                      style={{ textTransform: "titlecase" }}
                      variant="outlined"
                    >
                      Documentation
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>
        <img src={Part1img} height="100%" width="120%" className="p1-img"></img>
      </Grid>
    </Grid>
  );
};

export default NewPart1;
