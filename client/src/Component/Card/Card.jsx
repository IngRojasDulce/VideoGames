import React from 'react'
import './card.css'

export const Card= (props) => {
  return (
    <div className='style-cont'>
      {console.log(props)}
      <div className=''>
        <h5>{}</h5>
      </div>
      <div className=''>
        <p>Name :{props.name}</p>
        <p>Genero:{props.genero}</p>
        
      </div>
    </div>
  
  )
}
