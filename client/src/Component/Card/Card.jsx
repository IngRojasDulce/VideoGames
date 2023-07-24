import React from 'react'
import './card.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export const Card= (props) => {
  return (
    <div className='style-cont'>
      <div className=''>
        <h5>{}</h5>
      </div>
      <div className=''>
        <p>Nombre  : {props.name}</p>
        <p>Generos : {props.genres}</p>
        <div className='cont-imgen'>
          <img src={props.imagen} alt="Imagen" />
        </div>
        
        <Link to={`/details/${props.id}`} >Mas detalles</Link>
        
        
           
      </div>
    </div>
  
  )
}
