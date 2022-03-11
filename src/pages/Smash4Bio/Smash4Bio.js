import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

import './smash4bio.css'

const Smash4Bio = (props) => {

  

    const { name: displayName } = useParams();
    const newName = displayName.replace(/ /g, '')
     console.log(newName); 

    

    let url = 'https://api.kuroganehammer.com/api/characters/name/' + newName

  const [charData, setUsers] = useState([])

  const fetchData = () => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  console.log(charData)

  let url2 = 'https://api.kuroganehammer.com/api/characters/name/' + newName + '/throws' 

  const [charMoves, setUsers2] = useState([])

  const fetchData2 = () => {
    fetch(url2)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers2(data)
      })
  }

  console.log(charMoves)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData2()
  }, [])
 

    return (

    
      <div className="smash-bio-cont">
        <Header />
        <div className="smash-4-char-cont">
          <div className="stat-panel">
          <img src={charData.MainImageUrl} />
          </div>

          <div className="smash-4-stats">
              <div className="smash-4-throws-cont">
                  <div className="smash-4-throws">
                      
                  </div>
                  <div className="smash-4-throws"></div>
                  <div className="smash-4-throws"></div>
                  <div className="smash-4-throws"></div>
              </div>
              

          </div>
          </div>
          <Footer />
      </div>

  

    );
  };
  
  export default Smash4Bio;