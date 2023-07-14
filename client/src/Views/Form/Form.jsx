import React, { useState } from 'react'
import'./form.css'
// import {useDispatch} from 'react-redux'
// import { postVideogame } from '../../Redux/Actions';

const Form = () => {
  // const dispatch = useDispatch();

  const [input , setinput] = useState({
    name:"",
    image:"",
    description:"",
    platforms:"",
    release_data:"",
    rating:"",
    rengers:""
  });

  const[errors,setErrors]=useState({
    name:"Nombre requerido",
    image:"  Imagen requerida",
    description:"Descripcion requerida",
    platforms:"Plataforma requerida",
    release_data:"ingrese fecha de lanzamiento",
    rating:"Ingrese el rating",
    rengers:"Seleccione el /los generos"


  });
  const validate = (input, name)=>{
    if(name==="name"){
      if(input.name!=="") setErrors({...errors,name:""})
      else setErrors({...errors, name:"Nombre requerido"})
    }
    if(name==="image"){
      if(input.image!=="")setErrors({...errors,image:""})
      else setErrors({...errors, image:"Imagen requerida"})
    }
    if(name==="description"){
      if(input.description!=="")setErrors({...errors,description:""})
      else setErrors({...errors, description:"Descripcion requerida"})
    }
    if(name==="platforms"){
      if(input.platforms!=="")setErrors({...errors,platforms:""})
      else setErrors({...errors, platforms:"Plataforma requerida"})
    }
    if(name==="release_data"){
      if(input.release_data!=="")setErrors({...errors,release_data:""})
      else setErrors({...errors, release_data:"ingrese fecha de lanzamiento"})
    }
    if(name==="rating"){
      if(input.rating!=="")setErrors({...errors,rating:""})
      else setErrors({...errors, rating:"Ingrese el rating"})
    }
    if(name==="genres"){
      if(input.genres!=="")setErrors({...errors,genres:""})
      else setErrors({...errors, genres:"Seleccione el /los generos"})
    }
  };
  // const buttonDisabled =()=>{
  //   let disabled=true;
  //   for(let error in errors){
  //     if(errors[error]==="") disabled= false;
  //     else{
  //       disabled = true;
  //       break
  //     }
  //   }
  // }
  const handleChange = (e)=>{
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })
    validate({
      ...input,
      [e.target.name]: e.target.value}, e.target.name)
  };
  // const handlerSubmit =(event)=>{
  //   event.preventDefault();
  //   dispatch(postVideogame(input))
  // }

  
  return (
    <div className='form-cont'>
      <form >
        <div className='form-input-cont'>
          <label >Nombre</label>
          <input type='text' name='name' onChange={handleChange}></input>
          <p> {errors.name}</p>
        </div>
        <div className='form-input-cont'>
          <label >Imagen</label>
          <input type='text' name='image' onChange={handleChange}/>
          <p> {errors.image}</p>
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
          <input type='text' name='release_data' onChange={handleChange}/>
          <p> {errors.release_data}</p>
        </div>

        <div className='form-input-cont'>
          <label >Rating</label>
          <input type='text' name='rating' onChange={handleChange}/>
          <p> {errors.rating}</p>
        </div>

        <div className='form-input-cont'>
          <label >Generos</label>
          <input type='text' name='genres' onChange={handleChange}/>
          <p> {errors.genres}</p>
        </div>
        <input type='submit'/>

      </form>

    </div>
  )
}

export default Form