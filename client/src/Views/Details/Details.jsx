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
        
          <div className='alinear'>
            <h1>Nombre: {details.name}</h1>
          </div>
          
          <ul class ="custom-list">
            <div class="element"><h5>Plataformas:</h5>
                {details.platforms && details.platforms.map((el) => {return <li key={el}>{el}</li>;})}
            </div><br/>
          </ul> 
          
              <div class ="alinear"><h5>Fecha de lanzamiento:  </h5> {details.landingDate}
              </div>
              <div className='alinear'>
              <h5>Id:</h5> {details?.id}
          </div>
          <div class="element">
            <h5>Calificacion: </h5>{details.rating}</div>
            
          <div><h5>Descripcion: </h5>
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