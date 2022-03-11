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
 
  const name1 = charThrows && charThrows[0] && charThrows[0].Name
  const moveType1 = charThrows && charThrows[0] && charThrows[0].MoveType
  const cancel1 = charThrows && charThrows[0] && charThrows[0].AutoCancel
  const baseDmg1 = charThrows && charThrows[0] && charThrows[0].BaseDamage
  const baseKnock1 = charThrows && charThrows[0] && charThrows[0].BaseKnockBackSetKnockback
  const weight1 = charThrows && charThrows[0] && charThrows[0].IsWeightDependent
  const knockGrowth1 = charThrows && charThrows[0] && charThrows[0].KnockbackGrowth
  const landingLag1 = charThrows && charThrows[0] && charThrows[0].LandingLag
  const hitBox1 = charThrows && charThrows[0] && charThrows[0].HitboxActive

  const name2 = charThrows && charThrows[1] && charThrows[1].Name
  const moveType2 = charThrows && charThrows[1] && charThrows[1].MoveType
  const cancel2 = charThrows && charThrows[1] && charThrows[1].AutoCancel
  const baseDmg2 = charThrows && charThrows[1] && charThrows[1].BaseDamage
  const baseKnock2 = charThrows && charThrows[1] && charThrows[1].BaseKnockBackSetKnockback
  const weight2 = charThrows && charThrows[1] && charThrows[1].IsWeightDependent
  const knockGrowth2 = charThrows && charThrows[1] && charThrows[1].KnockbackGrowth
  const landingLag2 = charThrows && charThrows[1] && charThrows[1].LandingLag
  const hitBox2 = charThrows && charThrows[1] && charThrows[1].HitboxActive

  const name3 = charThrows && charThrows[2] && charThrows[2].Name
  const moveType3 = charThrows && charThrows[2] && charThrows[2].MoveType
  const cancel3 = charThrows && charThrows[2] && charThrows[2].AutoCancel
  const baseDmg3 = charThrows && charThrows[2] && charThrows[2].BaseDamage
  const baseKnock3 = charThrows && charThrows[2] && charThrows[2].BaseKnockBackSetKnockback
  const weight3 = charThrows && charThrows[2] && charThrows[2].IsWeightDependent
  const knockGrowth3 = charThrows && charThrows[2] && charThrows[2].KnockbackGrowth
  const landingLag3 = charThrows && charThrows[2] && charThrows[2].LandingLag
  const hitBox3 = charThrows && charThrows[2] && charThrows[2].HitboxActive

  const name4 = charThrows && charThrows[3] && charThrows[3].Name
  const moveType4 = charThrows && charThrows[3] && charThrows[3].MoveType
  const cancel4 = charThrows && charThrows[3] && charThrows[3].AutoCancel
  const baseDmg4 = charThrows && charThrows[3] && charThrows[3].BaseDamage
  const baseKnock4 = charThrows && charThrows[3] && charThrows[3].BaseKnockBackSetKnockback
  const weight4 = charThrows && charThrows[3] && charThrows[3].IsWeightDependent
  const knockGrowth4 = charThrows && charThrows[3] && charThrows[3].KnockbackGrowth
  const landingLag4 = charThrows && charThrows[3] && charThrows[3].LandingLag
  const hitBox4 = charThrows && charThrows[3] && charThrows[3].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive

  const name5 = charMoves && charMoves[0] && charMoves[0].Name
  const moveType5 = charMoves && charMoves[0] && charMoves[0].MoveType
  const baseDmg5 = charMoves && charMoves[0] && charMoves[0].BaseDamage
  const hitBox5 = charMoves && charMoves[0] && charMoves[0].HitboxActive



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

                  <ul className="smash-4-throws">
                        <h3>{name1}</h3>
                        <li>Move Type: {moveType1}</li>
                        <li>Auto Cancel: {cancel1}</li>
                        <li>Base Damage: {baseDmg1}</li>
                        <li>Base Knock Back: {baseKnock1}</li>
                        <li>Is Weight Dependent: {weight1}</li>
                        <li>Knock Back Growth: {knockGrowth1}</li>
                        <li>Landing Lag: {landingLag1}</li>
                        <li>Hitbox Active: {hitBox1}</li>
                    
                  </ul>

                  <ul className="smash-4-throws">
                  <h3>{name2}</h3>
                        <li>Move Type: {moveType2}</li>
                        <li>Auto Cancel: {cancel2}</li>
                        <li>Base Damage: {baseDmg2}</li>
                        <li>Base Knock Back: {baseKnock2}</li>
                        <li>Is Weight Dependent: {weight2}</li>
                        <li>Knock Back Growth: {knockGrowth2}</li>
                        <li>Landing Lag: {landingLag2}</li>
                        <li>Hitbox Active: {hitBox2}</li>
                  </ul>

                  <ul className="smash-4-throws">
                  <h3>{name3}</h3>
                        <li>Move Type: {moveType3}</li>
                        <li>Auto Cancel: {cancel3}</li>
                        <li>Base Damage: {baseDmg3}</li>
                        <li>Base Knock Back: {baseKnock3}</li>
                        <li>Is Weight Dependent: {weight3}</li>
                        <li>Knock Back Growth: {knockGrowth3}</li>
                        <li>Landing Lag: {landingLag3}</li>
                        <li>Hitbox Active: {hitBox3}</li>
                  </ul>

                  <ul className="smash-4-throws">
                  <h3>{name4}</h3>
                        <li>Move Type: {moveType4}</li>
                        <li>Auto Cancel: {cancel4}</li>
                        <li>Base Damage: {baseDmg4}</li>
                        <li>Base Knock Back: {baseKnock4}</li>
                        <li>Is Weight Dependent: {weight4}</li>
                        <li>Knock Back Growth: {knockGrowth4}</li>
                        <li>Landing Lag: {landingLag4}</li>
                        <li>Hitbox Active: {hitBox4}</li>
                  </ul>
              </div>

              <h2 className="smash-4-title">MOVES</h2>
              <div className="smash-4-throws-cont">

                <ul className="smash-4-throws">
                    <h3>{name5}</h3>
                    <li>Move Type: {moveType5}</li>
                    <li>Base Damage: {baseDmg5}</li>
                    <li>Hitbox Active: {hitBox5}</li>
                
                </ul>

                </div>

          </div>
          </div>
          <Footer />
      </div>

  

    );
  };
  
  export default Smash4Bio;