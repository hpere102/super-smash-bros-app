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

  const name6 = charMoves && charMoves[1] && charMoves[1].Name
  const moveType6 = charMoves && charMoves[1] && charMoves[1].MoveType
  const baseDmg6 = charMoves && charMoves[1] && charMoves[0].BaseDamage
  const hitBox6 = charMoves && charMoves[1] && charMoves[1].HitboxActive

  const name7 = charMoves && charMoves[2] && charMoves[2].Name
  const moveType7 = charMoves && charMoves[2] && charMoves[2].MoveType
  const baseDmg7 = charMoves && charMoves[2] && charMoves[2].BaseDamage
  const hitBox7 = charMoves && charMoves[2] && charMoves[2].HitboxActive

  const name8 = charMoves && charMoves[3] && charMoves[3].Name
  const moveType8 = charMoves && charMoves[3] && charMoves[3].MoveType
  const baseDmg8 = charMoves && charMoves[3] && charMoves[3].BaseDamage
  const hitBox8 = charMoves && charMoves[3] && charMoves[3].HitboxActive

  const name9 = charMoves && charMoves[4] && charMoves[4].Name
  const moveType9 = charMoves && charMoves[4] && charMoves[4].MoveType
  const baseDmg9 = charMoves && charMoves[4] && charMoves[4].BaseDamage
  const hitBox9 = charMoves && charMoves[4] && charMoves[4].HitboxActive

  const name10 = charMoves && charMoves[5] && charMoves[5].Name
  const moveType10 = charMoves && charMoves[5] && charMoves[5].MoveType
  const baseDmg10 = charMoves && charMoves[5] && charMoves[5].BaseDamage
  const hitBox10 = charMoves && charMoves[5] && charMoves[5].HitboxActive

  const name11 = charMoves && charMoves[6] && charMoves[6].Name
  const moveType11 = charMoves && charMoves[6] && charMoves[6].MoveType
  const baseDmg11 = charMoves && charMoves[6] && charMoves[6].BaseDamage
  const hitBox11 = charMoves && charMoves[6] && charMoves[6].HitboxActive

  const name12 = charMoves && charMoves[7] && charMoves[7].Name
  const moveType12 = charMoves && charMoves[7] && charMoves[7].MoveType
  const baseDmg12 = charMoves && charMoves[7] && charMoves[7].BaseDamage
  const hitBox12 = charMoves && charMoves[7] && charMoves[7].HitboxActive

  const name13 = charMoves && charMoves[8] && charMoves[8].Name
  const moveType13 = charMoves && charMoves[8] && charMoves[8].MoveType
  const baseDmg13 = charMoves && charMoves[8] && charMoves[8].BaseDamage
  const hitBox13 = charMoves && charMoves[8] && charMoves[8].HitboxActive

  const name14 = charMoves && charMoves[9] && charMoves[9].Name
  const moveType14 = charMoves && charMoves[9] && charMoves[9].MoveType
  const baseDmg14 = charMoves && charMoves[9] && charMoves[9].BaseDamage
  const hitBox14 = charMoves && charMoves[9] && charMoves[9].HitboxActive

  const name15 = charMoves && charMoves[10] && charMoves[10].Name
  const moveType15 = charMoves && charMoves[10] && charMoves[10].MoveType
  const baseDmg15 = charMoves && charMoves[10] && charMoves[10].BaseDamage
  const hitBox15 = charMoves && charMoves[10] && charMoves[10].HitboxActive

  const name16 = charMoves && charMoves[11] && charMoves[11].Name
  const moveType16 = charMoves && charMoves[11] && charMoves[11].MoveType
  const baseDmg16 = charMoves && charMoves[11] && charMoves[11].BaseDamage
  const hitBox16 = charMoves && charMoves[11] && charMoves[11].HitboxActive

  const name17 = charMoves && charMoves[12] && charMoves[12].Name
  const moveType17 = charMoves && charMoves[12] && charMoves[12].MoveType
  const baseDmg17 = charMoves && charMoves[12] && charMoves[12].BaseDamage
  const hitBox17 = charMoves && charMoves[12] && charMoves[12].HitboxActive

  const name18 = charMoves && charMoves[13] && charMoves[13].Name
  const moveType18 = charMoves && charMoves[13] && charMoves[13].MoveType
  const baseDmg18 = charMoves && charMoves[13] && charMoves[13].BaseDamage
  const hitBox18 = charMoves && charMoves[13] && charMoves[13].HitboxActive



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