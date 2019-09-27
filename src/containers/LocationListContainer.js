import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from "./../actions";
import { getWeatherCities, getCity } from './../reducers'
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
  static propTypes = {
    setSelectedCity: PropTypes.func,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
  }

  componentDidMount(){
    const { setWeather, setSelectedCity, cities, city } = this.props;
    setWeather(cities);
    setSelectedCity(city);
  };

  handleSelectedLocation = city => {
    this.props.setSelectedCity(city);
  };
  render() {
    return (
      <LocationList cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation} />
    )
  }
}
const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});
export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);
