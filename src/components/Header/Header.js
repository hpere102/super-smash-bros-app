import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
import smash from '../../images/smash-logo.png'
import lucas from '../../images/lucas.webp'


const HeaderSmash = () => {

 
    return (

    
      <div className="header-cont">
          <img className="header-smash" src={smash} />
          <nav className="nav-link-cont">
              <NavLink className="nav-link" activeClassName='active' to="/">Home</NavLink>
              <NavLink className="nav-link" activeClassName='active' to="/smash-4">Smash 4</NavLink>
              <NavLink className="nav-link" activeClassName='active' to="/ultimate">Ultimate</NavLink>    
        </nav>
        <img className="lucas" src={lucas} />
      </div>

  

    );
  };
  
  export default HeaderSmash;