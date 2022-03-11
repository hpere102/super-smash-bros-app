import React from 'react';

import './home.css'

import smash4 from '../../images/smash-4.png'
import ultimate from '../../images/ultimate.png'
import kirby from '../../images/kirby.png'
import mario from '../../images/mario.webp'
import link from '../../images/link.png'
import sheik from '../../images/sheik.png'
import charizard from '../../images/charizard.png'



const Home = () => {

 
    return (

    
      <div className="home-cont">
       <div className='left-cont'>
       <div className="img-cont">
       <img className="img-left" src={smash4} />
       <p>SUPER SMASH BROS. 4</p>
       </div>
       </div>
      

      <div className='right-cont'>

      <img className="kirby" src={kirby} />

      <div className="img-cont">
      <img className="img-right" src={ultimate} />
      <p className='ult-p'>SUPER SMASH BROS. ULTIMATE</p>
      </div>

      <img className="kirby" src={kirby} />
      <img className="mario" src={mario} />
      <img className="link" src={link} />
      <img className="sheik" src={sheik} />
      <img className="charizard" src={charizard} />

      </div>

      

      
    
  </div>

  

    );
  };
  
  export default Home;