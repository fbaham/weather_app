import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
  }
  render() {
    return (
      this.props.city &&
      <ForecastExtended city={this.props.city} ></ForecastExtended>
    )
  }
}

const mapStateToProps = ({city}) => ({city})
export default connect(mapStateToProps, null)(ForecastExtendedContainer)