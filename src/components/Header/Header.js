import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css'
import smash from '../../images/smash-logo.png'
import lucas from '../../images/lucas.webp'


const HeaderSmash = () => {

 
    return (

    
      <div className="header-cont">
        <Link to="/"><img className="header-smash" alt="smash-logo" src={smash} /></Link>
          <nav className="nav-link-cont">
              <NavLink className="nav-link" activeClassName='active' to="/">Home</NavLink>
              <NavLink className="nav-link" activeClassName='active' to="/smash-4">Smash 4</NavLink>
              <NavLink className="nav-link" activeClassName='active' to="/ultimate">Ultimate</NavLink>    
        </nav>
        <img className="lucas" alt="lucas"  src={lucas} />
      </div>

  

    );
  };
  
  export default HeaderSmash;