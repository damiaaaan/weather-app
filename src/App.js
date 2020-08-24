import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationList from './components/WeatherLocation/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'Cambridge,gb',
  'Finland,fi',
  'Asuncion,py',
  'Ciudad de Mexico,mx'
]


class App extends Component {

  constructor() {
    super();
    this.state = { city: 'Nueva ciudad.' };
  }

  handleLocationSelection = city => {
    console.log(city)
  };
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='inherit' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} 
            onSelectedLocation={this.handleLocationSelection} ></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtended city={ city }></ForecastExtended>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;
