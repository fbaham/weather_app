import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getForecastDataFromCities, getCity} from './../reducers'
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
  }
  render() {
    const { city, forecastData } = this.props;
    return (
      this.props.city &&
      <ForecastExtended city={city} forecastData={forecastData} ></ForecastExtended>
    )
  }
}

const mapStateToProps = state => ({city : getCity(state), forecastData: getForecastDataFromCities(state)})
export default connect(mapStateToProps, null)(ForecastExtendedContainer)