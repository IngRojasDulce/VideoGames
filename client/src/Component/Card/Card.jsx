import React from 'react'
import './card.css'

export const Card= (props) => {
  return (
    <div className='style-cont'>
      <div className=''>
        <h5>{}</h5>
      </div>
      <div className=''>
        <p>Nombre :{props.name}</p>
        <p>Generos:{props.genres}</p>
        <div className='cont-imgen'>
          <img src={props.imagen} alt="Imagen" />
        </div>
        
      </div>
    </div>
  
  )
}
