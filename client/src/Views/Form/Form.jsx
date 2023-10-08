import React, { useState } from 'react'
import'./form.css'
import {useDispatch, useSelector} from 'react-redux'
import { postVideogame } from '../../Redux/action';


const Form = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres)
  const [input , setinput] = useState({
    name:"",
    imagen:"",
    description:"",
    platforms:"",
    landingDate:"",
    rating:"",
    genres:""
  });

  const[errors,setErrors]=useState({
    name:"Nombre requerido",
    imagen:"  Imagen requerida",
    description:"Descripcion requerida",
    platforms:"Plataforma requerida",
    landingDate:"ingrese fecha de lanzamiento",
    rating:"Ingrese el rating",
    // genres:"Seleccione el /los generos"


  });
  const validate = (input, name)=>{
    if(name==="name"){
      if(input.name!=="") setErrors({...errors,name:""})
      else setErrors({...errors, name:"Nombre requerido"})
    }
    if(name==="imagen"){
      if(input.imagen!=="")setErrors({...errors,imagen:""})
      else setErrors({...errors, imagen:"Imagen requerida"})
    }
    if(name==="description"){
      if(input.description!=="")setErrors({...errors,description:""})
      else setErrors({...errors, description:"Descripcion requerida"})
    }
    if(name==="platforms"){
      if(input.platforms!=="")setErrors({...errors,platforms:""})
      else setErrors({...errors, platforms:"Plataforma requerida"})
    }
    if(name==="landingDate"){
      if(input.landingDate!=="")setErrors({...errors,landingDate:""})
      else setErrors({...errors, landingDate:"ingrese fecha de lanzamiento"})
    }
    if(name==="rating"){
      if(input.rating!=="" && !isNaN(input.rating) &&input.rating<7)setErrors({...errors,rating:""})
      else setErrors({...errors, rating:"Ingrese el rating"})
    }
    
  };
  const buttonDisabled = ()=>{
    let disabled=true;
    for(let error in errors){
      if(errors[error]==="") disabled= false;
      else{
        disabled = true;
        break;
      }
    }
    return disabled;
  };
  

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value
    })
    validate({ 
      ...input,
      [name]: value}, name)
      if (name === "genres") {
        const multiple =Array.from(e.target.selectedOptions, (option)=>option.value);
        setinput({
          ...input,
          genres: multiple
        });
      }
  };
  const handlerSubmit =(event)=>{

    event.preventDefault();
    dispatch(postVideogame(input))
  }

  
  return (
    <div className='form-img-fondo'>
    <div className='form-cont'>
      <form onSubmit={handlerSubmit}>{console.log(errors)}
        <div className='form-input-cont'>
          <label >Nombre</label>
          <input type='text' name='name' onChange={handleChange}></input>
          <p className="error-message"> {errors.name}</p>
        </div>
        <div className='form-input-cont'>
          <label >Imagen</label>
          <input type='text' name='imagen' onChange={handleChange}/>
          <p className="error-message"> {errors.imagen}</p>
        </div>

        <div className='form-input-cont'>
          <label >Descripción</label>
          <input type='text'name='description' onChange={handleChange}/>
          <p className="error-message">{errors.imagen}</p>
        </div>

        <div className='form-input-cont'>
          <label >Plataformas</label>
          <input type='text' name='platforms' onChange={handleChange}/>
          <p className="error-message"> {errors.platforms}</p>
        </div>

        <div className='form-input-cont'>
          <label >Fecha de lanzamiento</label>
          <input type="date" name='landingDate' onChange={handleChange}/>
          <p className="error-message"> {errors.landingDate}</p>
        </div>

        <div className='form-input-cont'>
          <label >Rating</label>
          <input type='text' name='rating' onChange={handleChange}/>
          <p className="error-message"> {errors.rating}</p>
        </div>

        <div className='form-input-cont'>
          <label >Generos</label>
          {/* <input type='text' name='genres' onChange={handleChange}/> */}
          <div>
          <select onChange={handleChange} name='genres' >
                <option value='all'>Todos los Generos</option>
                {genres.map((item,index)=>{
                  return( <option key={index} value={item.name}> {item.name} </option>)
                })}
            </select>
        </div>

          <p className="error-message"> {errors.genres}</p>
        </div>
        <input  type='submit' disabled={buttonDisabled()}/>
        
      </form>

    </div>
    </div>
  )
}

export default Form