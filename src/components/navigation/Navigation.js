import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Hero from '../hero/Hero';
import listingForm from '../listingform/listingForm';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <NavLink activeClassName="active" exact to="/">
          LISTez
        </NavLink>
        <NavLink activeClassName="active" exact to="/about">About</NavLink>
        <NavLink activeClassName="active" exact to="/signin">Sign In</NavLink>
        <Route exact path="/" component={Hero} />
        <Route exact path="/listingform" component={listingForm} />
        <Route exact path="/about" render={() => (<h1>About</h1>)} />
        <Route exact path="/signin" render={() => (<h1>Sign In Form</h1>)} />
      </div>
    )
  }
}

export default Navigation;