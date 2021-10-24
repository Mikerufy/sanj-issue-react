import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Grid, Typography} from '@mui/material'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
              <Grid item xs ={2}></Grid>
              <Grid item xs ={8} style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Typography>
                      Hello
                  </Typography>
                  </Grid>
              <Grid item xs ={2}></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
