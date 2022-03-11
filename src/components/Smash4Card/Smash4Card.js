import React from 'react';
import { Link } from 'react-router-dom';
import './smash4card.css'


const Smash4Card = ({ name, game, avi}) => {

 
    return (

    
      <div className="smash4-card-cont">
           <img src={avi} />
           <h4>{name}</h4>
           

      </div>

  

    );
  };
  
  export default Smash4Card;