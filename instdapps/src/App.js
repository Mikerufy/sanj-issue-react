import logo from './logo.svg';
import './App.css';
import {Grid, Typography} from '@mui/material'
import Appbar from './components/Appbar'

function App() {
  return (
    <div className="App">
      <Grid container direction = "column">
        <Grid item xs = {12}>
          <Appbar/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
