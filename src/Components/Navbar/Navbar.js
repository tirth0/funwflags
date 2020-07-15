import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
               <h1 className="navbar__name">Guess The Flag?</h1>
               <nav className="navbar__nav">
                   <li onClick={this.props.handleReset}>
                       Reset
                   </li>
               </nav> 
            </header>
        );
    }
}

Navbar.propTypes = {
    handleReset : PropTypes.func.isRequired
}

export default Navbar;