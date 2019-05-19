/* eslint-disable import/no-named-as-default */
import NavbarTop from './Navbar';
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarTop />
      </div >
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
