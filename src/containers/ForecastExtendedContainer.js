import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
  }
  render() {
    const { city, forecastData } = this.props;
    return (
      this.props.city &&
      <ForecastExtended city={city} forecastData={forecastData} ></ForecastExtended>
    )
  }
}

const mapStateToProps = ({city, cities}) => ({city, forecastData: cities[city] && cities[city].forecastData})
export default connect(mapStateToProps, null)(ForecastExtendedContainer)