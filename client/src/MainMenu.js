import React, { Component } from "react";
import {Link} from 'react-router-dom';
require('./css/MainMenu.css');

class MainMenu extends Component {
    render() {
        return (
            
            <div className="mainMenu">
                <button className="menuButton">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Home </Link>
                </button>
                
              <small className = "split">|</small>
                
                <button className="menuButton">
                    <Link to="/songlist" style={{ textDecoration: 'none', color: 'white'}}>See listed songs</Link>
                </button>
                
                <small className = "split">|</small>
                
                <button className="menuButton">
                    <Link to="/addpanel" style={{ textDecoration: 'none', color: 'white'}}>Go to add songs</Link>
                
                </button>
                               
               <small className = "split">|</small>
                
            </div>
            
        );
    }
}

export default MainMenu;