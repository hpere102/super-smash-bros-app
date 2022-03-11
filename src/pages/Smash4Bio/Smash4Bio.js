import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import smash from '../../images/smash-logo.png'

import './smash4bio.css'

const Smash4Bio = (props) => {

    console.log()
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

  let url4 = 'https://api.kuroganehammer.com/api/characters/name/' + newName + '/movements'

  const [charMovements, setUsers4] = useState([])

  const fetchData4 = () => {
    fetch(url4)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers4(data)
      })
  }

  console.log(charMovements)

  useEffect(() => {
    fetchData4()
  }, [])

  let url5 = 'https://api.kuroganehammer.com/api/characters/name/' + newName + '/characterattributes'

  const [attributes, setUsers5] = useState([])

  const fetchData5 = () => {
    fetch(url5)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers5(data)
      })
  }

  console.log(attributes)

  useEffect(() => {
    fetchData5()
  }, [])


  const renderDiv = function() {
      if (newName === 'DonkeyKong' ||  newName === 'BowserJr' || newName === 'Kirby' ||
       newName === 'KingDedede' || newName === 'Lucario' || newName === 'Peach' || newName === 'Palutena' 
       || newName === 'Olimar' || newName === 'Wario') {
      return  `#1d3b4e` 
      } else return charData.ColorTheme
  }
  
 
    return (

    
      <div className="smash-bio-cont">
        <Header />

            <nav className="bio-cont">
                <div className='bio-nav-cont'>
                <a href="#throws">Throws</a><a href="#moves">Moves</a><a href="#movements">Movements</a><a href="#attributes">Attributes</a>
                </div>
                <p><img style={{width: '25px', marginRight: '6px'}} src={smash} />{newName}</p>
            </nav>

        <div className="smash-4-char-cont">
          <div className="stat-panel">
          <img src={charData.MainImageUrl} />
          </div>

          <div className="smash-4-stats">
          <h2 id="throws" className="smash-4-title">THROWS</h2>
              <div className="smash-4-throws-cont">
              {charThrows.length > 0 && (
                  <div className="smash-4-throws">
                       {charThrows.map(char => (
                          
                           <div style={{backgroundColor: renderDiv() }} className="stat-cont" char-item key={char.id}>
                        <h3>{char.Name}</h3>
                        <li><span>Move Type:</span> {char.MoveType}</li>
                        <li><span>Auto Cancel:</span> {char.AutoCancel}</li>
                        <li><span>Base Damage:</span> {char.BaseDamage}</li>
                        <li><span>Base Knock Back:</span> {char.BaseKnockBackSetKnockback}</li>
                        <li><span>Is Weight Dependent:</span> {char.IsWeightDependent}</li>
                        <li><span>Knock Back Growth:</span> {char.KnockbackGrowth}</li>
                        <li><span>Landing Lag:</span> {char.LandingLag}</li>
                        <li><span>Hitbox Active:</span> {char.HitboxActive}</li>
                        </div>
                        ))}
                  </div>
                 )}
                 
              </div>

              <h2 id="moves" className="smash-4-title">MOVES</h2>
              <div className="smash-4-throws-cont">
              {charMoves.length > 0 && (
                  <div className="smash-4-throws">
                       {charMoves.map(char => (
                           
                           <div style={{ backgroundColor: renderDiv()}} className="stat-cont" char-item key={char.id}>
                        
                        <h3>{char.Name}</h3>
                        <li><span>Move Type:</span> {char.MoveType}</li>
                        <li><span>Base Damage:</span> {char.BaseDamage}</li>
                        <li><span>Base Knock Back:</span> {char.BaseKnockBackSetKnockback}</li>
                        <li><span>Hitbox Active:</span> {char.HitboxActive}</li>
                        </div>
                        ))}
                  </div>
                 )}

                </div>

                <h2 id="movements" className="smash-4-title">MOVEMENTS</h2>
              <div className="smash-4-throws-cont">
              {charMovements.length > 0 && (
                  <div className="smash-4-throws">
                       {charMovements.map(char => (
                           
                           <div style={{ backgroundColor: renderDiv()}} className="stat-cont" char-item key={char.id}>
                        
                        <h3>{char.Name}</h3>
                        <li><span>Value:</span> {char.Value}</li>
                        
                        </div>
                        ))}
                  </div>
                 )}

                </div>

                <h2 id="attributes" className="smash-4-title">ATTRIBUTES</h2>
              <div className="smash-4-throws-cont">
              {attributes.length > 0 && (
                  <div className="smash-4-throws">
                       {attributes.map(char => (
                           
                           <div style={{ backgroundColor: renderDiv()}} className="stat-cont" char-item key={char.id}>
                        
                        <h3>{char.Name}</h3>
                        <li><span>{char.Values[0].Name}</span>: {char.Values[0].Value}</li>
                        
                        </div>
                        ))}
                  </div>
                 )}

                </div>

          </div>
          </div>
          <Footer />
      </div>

  

    );
  };
  
  export default Smash4Bio;