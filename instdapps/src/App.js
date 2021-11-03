import logo from './logo.svg';
import './App.css';
import {Grid, Typography} from '@mui/material'
import Appbar from "./components/Appbar/Appbar";
import Part1 from './components/Part1/Part1';
import NewPart1 from './components/Part1/NewPart1';
import { makeStyles } from "@mui/styles";
import Parent from './components/Parent/Parent';


function App() {
  return (
    <div className="App">
      <Grid container >
        <Grid item xs={12} md = {12}>
          <Appbar/>
        </Grid>
        <Grid item xs={12} md={12} container >
          <Grid item xs = {0} md={2}></Grid>
          <Grid item xs = {12} md={8}>
          <Parent/>
            
          </Grid>
          <Grid item xs = {0} md={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
