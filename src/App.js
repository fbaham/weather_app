import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer'
import './App.css';

const cities = [
  'Santiago,cl',
  'Buenos Aires,ar',
  'Bogota,col',
  'Puerto Montt,cl',
]
const theme = createMuiTheme(()=> {});


class App extends Component {
  
  constructor() {
    super();
    this.state = { city: null};
  }
  
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='h3' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper>
                <div className="details">
                  <ForecastExtendedContainer></ForecastExtendedContainer>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  };
};

export default App;