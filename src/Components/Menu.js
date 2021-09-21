import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-success navbar-expand-md">
                <div className="container">
                    <Link to="/" className="navbar-brand">Music Player</Link>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/music" className="nav-link">Music</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
