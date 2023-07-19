import React, { useState } from 'react'
import'./form.css'
import {useDispatch} from 'react-redux'
import { postVideogame } from '../../Redux/action';


const Form = () => {
  const dispatch = useDispatch();

  const [input , setinput] = useState({
    name:"",
    imagen:"",
    description:"",
    platforms:"",
    landingDate:"",
    rating:"",
    genre:""
  });

  const[errors,setErrors]=useState({
    name:"Nombre requerido",
    imagen:"  Imagen requerida",
    description:"Descripcion requerida",
    platforms:"Plataforma requerida",
    landingDate:"ingrese fecha de lanzamiento",
    rating:"Ingrese el rating",
    genre:"Seleccione el /los generos"


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
      if(input.rating!=="")setErrors({...errors,rating:""})
      else setErrors({...errors, rating:"Ingrese el rating"})
    }
    if(name==="genre"){
      if(input.genre!=="")setErrors({...errors,genre:""})
      else setErrors({...errors, genre:"Seleccione el /los generos"})
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
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })
    validate({
      ...input,
      [e.target.name]: e.target.value}, e.target.name)
  };
  const handlerSubmit =(event)=>{
    event.preventDefault();
    dispatch(postVideogame(input))
  }

  
  return (
    <div className='form-cont'>
      <form onSubmit={handlerSubmit}>{console.log(errors)}
        <div className='form-input-cont'>
          <label >Nombre</label>
          <input type='text' name='name' onChange={handleChange}></input>
          <p> {errors.name}</p>
        </div>
        <div className='form-input-cont'>
          <label >Imagen</label>
          <input type='text' name='imagen' onChange={handleChange}/>
          <p> {errors.imagen}</p>
        </div>

        <div className='form-input-cont'>
          <label >Descripción</label>
          <input type='text'name='description' onChange={handleChange}/>
          <p> {errors.description}</p>
        </div>

        <div className='form-input-cont'>
          <label >Plataformas</label>
          <input type='text' name='platforms' onChange={handleChange}/>
          <p> {errors.platforms}</p>
        </div>

        <div className='form-input-cont'>
          <label >Fecha de lanzamiento</label>
          <input type="date" name='landingDate' onChange={handleChange}/>
          <p> {errors.landingDate}</p>
        </div>

        <div className='form-input-cont'>
          <label >Rating</label>
          <input type='text' name='rating' onChange={handleChange}/>
          <p> {errors.rating}</p>
        </div>

        <div className='form-input-cont'>
          <label >Generos</label>
          <input type='text' name='genre' onChange={handleChange}/>
          <p> {errors.genre}</p>
        </div>
        <input  type='submit' disabled={buttonDisabled()}/>
        
      </form>

    </div>
  )
}

export default Form