import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import Smash4Card from '../../components/Smash4Card/Smash4Card'
import './smash.css'


const Smash = () => {

  let url = 'https://api.kuroganehammer.com/api/characters'

  const [smashData, setUsers] = useState([])

  const fetchData = () => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
console.log(smashData.slice(1))

  useEffect(() => {
    fetchData()
  }, [])
 
  const newData = smashData.slice(1);


 
    return (

    
      <div className="smash-cont">
        <Header />
          <div className='body-cont'>
          {newData.length > 0 && (
             <ul className="char-list">
             {newData.map(char => (
               <Link className="smash-4-card-link" to={`/smash-4-bio/${char.DisplayName}`} char-item key={char.id}>
                 <Smash4Card name={char.DisplayName}
                             game={char.Game}
                             avi={char.ThumbnailUrl}
                             color={char.ColorTheme}/>
               </Link>
             ))}
           </ul>
         )}
          </div>
          <Footer />
      </div>

  

    );
  };
  
  export default Smash;