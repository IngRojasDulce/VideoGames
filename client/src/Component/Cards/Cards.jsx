import React from 'react'
import { Card } from '../Card/Card'

import "./cards.css"
// genres={game.genres.map((elem)=>elem.name)}
export const Cards = ({allVideogames}) => {
  return (
    <div className='card-main-cont'>
      <h3>VIDEGAMES</h3>
      <div className='cards-cont'>

        {allVideogames.map((game)=> <Card name={game.name} imagen={game.imagen}  genres={game.genres?.join(",")} id= {game.id}/>)}
        
      </div>

    </div>
  )
}
