import React, { useState } from 'react'
// import { Car } from '../../Component/Car/Car'
 import { Cards} from '../../Component/Cards/Cards'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogame } from '../../Redux/action'

const Home = () => {
  const allVideogames = useSelector((state)=> state.videogames)// traer infor desde el estado global
  const ITEMS_PAGE=15
  

  const dispatch = useDispatch();
    useEffect(()=>{ 
      dispatch(getVideogame());
    //si coloco return es cuando quiero   quiero que mi componente muestre cuando se desmonte
    },[dispatch])

    const [items,setItems]=useState([...allVideogames].splice(0,ITEMS_PAGE))
    const[currentPage, setCurrentPage]=useState(0);

    const adelante = ()=>{
      const next_page=currentPage+1;
      const firstIndex = next_page*ITEMS_PAGE;
      if(firstIndex >= allVideogames.length) return 
      setItems([...allVideogames].splice(firstIndex,ITEMS_PAGE))
      setCurrentPage(next_page);
     
    };
    useEffect(()=>{ 
      setItems([...allVideogames].splice(0,ITEMS_PAGE))
    
    },[allVideogames])

    const atras = ()=>{
      const pre_page=currentPage - 1;
      const firstIndex = pre_page*ITEMS_PAGE;
      if(pre_page <0 ) return
      setItems([...allVideogames].splice(firstIndex, ITEMS_PAGE))
      setCurrentPage(pre_page)
  
    };
  return (
    <>
    <div className='home-cont'>
      <h1>Video Juegos</h1>
      <div>{console.log(allVideogames)}
      <div className='home_paginete'>
        <button onClick={atras}> Atras</button>
        <button onClick={adelante}>Adelante</button>
      </div>
      <div>
          <label >Buscar videjuego</label>
          <input type="search"  placeholder ="ingrese nombre" name='Nombre' />
          <button type="button" onclick="realizarBusqueda()">Buscar</button>
        <Cards allVideogames={items}></Cards>
      </div>
      
      </div>
  
    </div>
    
    </>
  )
}

export default Home