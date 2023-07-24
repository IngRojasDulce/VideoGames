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
        
        <div><h1>Nombre: {details.name}</h1></div>
        <div className='cont-im'>
          <img src={details.imagen} alt='' />
          <div><h1>Id: {details?.id}</h1></div>
          <p>Plataformas:</p>
            {details.platforms &&
              details.platforms.map((el) => {
                return <p key={el}>{el}</p>;
              })}
            <p>Fecha de lanzamiento: {details.released}</p>
          <p>Calificacion: {details.rating}</p>
          <div><p>Descripcion:</p>
          <p dangerouslySetInnerHTML={{ __html: details.description }}></p></div>
          
        </div>
      </div>


    </div>

  );
}

export default Details; // Exportación por defecto