import React from 'react';

import './home.css'

import smash4 from '../../images/smash-4.png'
import ultimate from '../../images/ultimate.png'



const Home = () => {

 
    return (

        <div>
    
      <div className="home-cont">
       <div className='left-cont'>
       <div className="img-cont">
       <img className="img-left" src={smash4} />
       </div>
       </div>
      

      <div className='right-cont'>
      <div className="img-cont">
      <img className="img-right" src={ultimate} />
      </div>
      </div>

      <div className='left-border'> <div className='l-b-text'> YOOO</div> </div>
        <div className='right-border'><div className='r-b-text'> YOOO</div></div>
        <div className='top-border'> <div className='t-b-text'> YOOO</div></div>
        <div className='bottom-border'><div className='b-b-text'> YOOO</div></div>

  </div>

  </div>
    );
  };
  
  export default Home;