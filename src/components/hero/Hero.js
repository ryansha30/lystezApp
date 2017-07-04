import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

class Hero extends Component {
  render() {
    return(
      <div className={classnames('hero')}>
        <form className={classnames('hero-form')}>
          <h1>Sell Your Home, Not Your Privacy</h1>
          <h4>Find the right listing agent without sharing any personal information.</h4>
          <NavLink activeClassName="active" exact to="/listingForm">Find Agent</NavLink>
        </form>
      </div>
    )
  }
}

export default Hero