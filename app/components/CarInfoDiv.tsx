import React, { useState } from 'react'

import car1 from "../images/car1.jpg"
import car2 from "../images/car2.jpg"
import car3 from "../images/car3.jpg"
import car4 from "../images/car4.jpg"
import car5 from "../images/car5.jpg"
import car6 from "../images/car6.jpg"
import car7 from "../images/car7.jpg"
import car8 from "../images/car8.jpg"
import car9 from "../images/car9.jpg"

import CarInfoDivFormat from './CarInfoDivFormat'


const CarInfoDiv = () => {
 


  return (
    <div className="all-brand-imgs">
      <CarInfoDivFormat src={car1.src} title='Porsche' />
      <CarInfoDivFormat src={car2.src} title='Audi' />
      <CarInfoDivFormat src={car3.src} title='Nissian' />
      <CarInfoDivFormat src={car4.src} title='BMW' />
      <CarInfoDivFormat src={car5.src} title='McClaren' />
      <CarInfoDivFormat src={car6.src} title='Mustang' />
      <CarInfoDivFormat src={car7.src} title='Mercedes' />
      <CarInfoDivFormat src={car8.src} title='Catalytic' />
      <CarInfoDivFormat src={car9.src} id='honda' title='Honda' />
    </div>
  )
}

export default CarInfoDiv
