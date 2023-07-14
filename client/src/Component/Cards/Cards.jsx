import React from 'react'
import { Card } from '../Card/Card'
import "./cards.css"

export const Cards = () => {
  return (
    <div className='card-main-cont'>
      <h3>Contenedor de Cartas</h3>
      <div className='cards-cont'>
        <Card name={"ecref"} genero={"cdf"}></Card>
        <Card name={"otro"} genero={"otro"}></Card>
      </div>

    </div>
  )
}
