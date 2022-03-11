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

  useEffect(() => {
    fetchData()
  }, [])

  let url2 = 'https://api.kuroganehammer.com/api/characters/name/' + newName + '/throws' 

  const [charThrows, setUsers2] = useState([])

  const fetchData2 = () => {
    fetch(url2)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers2(data)
      })
  }

  console.log(charThrows)

  useEffect(() => {
    fetchData2()
  }, [])

  let url3 = 'https://api.kuroganehammer.com/api/characters/name/' + newName + '/moves?expand=false'

  const [charMoves, setUsers3] = useState([])

  const fetchData3 = () => {
    fetch(url3)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers3(data)
      })
  }

  console.log(charMoves)

  useEffect(() => {
    fetchData3()
  }, [])
 
    return (

    
      <div className="smash-bio-cont">
        <Header />
        <div className="smash-4-char-cont">
          <div className="stat-panel">
          <img src={charData.MainImageUrl} />
          </div>

          <div className="smash-4-stats">
          <h2 className="smash-4-title">THROWS</h2>
              <div className="smash-4-throws-cont">
              {charThrows.length > 0 && (
                  <ul className="smash-4-throws">
                       {charThrows.map(char => (
                           <div char-item key={char.id}>
                        <h3>{char.Name}</h3>
                        <li>Move Type: {char.MoveType}</li>
                        <li>Auto Cancel: {char.AutoCancel}</li>
                        <li>Base Damage: {char.BaseDamage}</li>
                        <li>Base Knock Back: {char.BaseKnockBackSetKnockback}</li>
                        <li>Is Weight Dependent: {char.IsWeightDependent}</li>
                        <li>Knock Back Growth: {char.KnockbackGrowth}</li>
                        <li>Landing Lag: {char.LandingLag}</li>
                        <li>Hitbox Active: {char.HitboxActive}</li>
                        </div>
                        ))}
                  </ul>
                 )}
                 
              </div>

              <h2 className="smash-4-title">MOVES</h2>
              <div className="smash-4-throws-cont">
              {charMoves.length > 0 && (
                  <ul className="smash-4-throws">
                       {charMoves.map(char => (
                           <div char-item key={char.id}>
                        <h3>{char.Name}</h3>
                        <li>Move Type: {char.MoveType}</li>
                        <li>Auto Cancel: {char.AutoCancel}</li>
                        <li>Base Damage: {char.BaseDamage}</li>
                        </div>
                        ))}
                  </ul>
                 )}

                </div>

          </div>
          </div>
          <Footer />
      </div>

  

    );
  };
  
  export default Smash4Bio;