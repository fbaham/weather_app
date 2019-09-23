import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'
import './App.css';

const cities = [
  'Santiago,cl',
  'Buenos Aires,ar',
  'Bogota,col',
  'Puerto Montt,cl',
]
const theme = createMuiTheme({
});
class App extends Component {

  constructor() {
    super();
    this.state = { city: null};
  }

  handleSelectedLocation = city => {
    this.setState({city});
    console.log(`handleSelectionLocation ${city}`);
  };
  
  render(){
    const {city, forecastData } = this.state
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
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper>
                <div className="details">
                  {
                    city && 
                    <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
                  }
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
