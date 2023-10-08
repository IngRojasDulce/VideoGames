// Details.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { cleanDetail, getDetail } from '../../Redux/action';
import './details.css'

const Details = () => {

  
  const dispatch = useDispatch();
  const {id} = useParams();
  const details = useSelector((state) => state.details);

    useEffect(() => {
      dispatch(getDetail(id));
      return () => {
        dispatch(cleanDetail());
      };
    }, [dispatch, id]);
  return (
    <div className='de-main-cont'>
        <div className='de-cont'>
        
        <div>
          <h1>Nombre: {details.name}</h1>
        
          
          Id: {details?.id}</div>
          Calificacion: {details.rating}
          <br></br>
          Plataformas:
            {details.platforms &&
              details.platforms.map((el) => {
                return <p key={el}>{el}</p>;
              })}
              
            Fecha de lanzamiento: {details.landingDate}
           
            
            <br></br>
         
          
          <div><p>Descripcion:</p>
          <p dangerouslySetInnerHTML={{ __html: details.description }}></p>
          </div>
          <div className='img-detail'>
              <img src={details.imagen} alt='' />
          </div>
        
      </div>


    </div>

  );
}

export default Details; // Exportación por defecto