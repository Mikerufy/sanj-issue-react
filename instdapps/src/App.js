import logo from './logo.svg';
import './App.css';
import {Grid, Typography} from '@mui/material'
import Appbar from './components/Appbar'
import Part1 from './components/Part1/Part1';

function App() {
  return (
    <div className="App">
      <Grid container direction = "column">
        <Grid item xs = {12}>
          <Appbar/>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Part1/>
            
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
