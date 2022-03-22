import React from 'react';
import './smash4card.css'


const Smash4Card = ({ name, game, avi, color}) => {

 
    return (

    
      <div style={{backgroundColor: color }} className="smash4-card-cont">
           <img alt="avi"  src={avi} />
           <h4>{name}</h4>
           

      </div>

  

    );
  };
  
  export default Smash4Card;