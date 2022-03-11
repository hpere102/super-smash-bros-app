import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

import smash4 from '../../images/smash-4.png'
import ultimate from '../../images/ultimate.png'
import kirby from '../../images/kirby.png'
import luigi from '../../images/luigi.png'


const Home = () => {

 
    return (

    
      <div className="home-cont">
      <Link className='left-cont' to="/smash-4">
       <div className="img-cont">
       <img className="img-left" src={smash4} />
       <p>SUPER SMASH BROS. 4</p>
       </div>

       <img className="luigi" src={luigi} />
      
    
       </Link>
      

       <Link className='right-cont' to="/">

      <img className="kirby" src={kirby} />

      <div className="img-cont">
      <img className="img-right" src={ultimate} />
      <p className='ult-p'>SUPER SMASH BROS. ULTIMATE</p>
      <div style={{fontSize: '50px', backgroundColor: 'grey' }}>COMING SOON...</div>
      </div>

      <img className="kirby" src={kirby} />
     
      </Link>

      
    
  </div>

  

    );
  };
  
  export default Home;