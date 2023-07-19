import React, { useState } from 'react'
// import { Car } from '../../Component/Car/Car'
 import { Cards} from '../../Component/Cards/Cards'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtroPorOrden, getVideogame,  orderByName,  orderByRating,  paginate, search } from '../../Redux/action'

const Home = () => {
  // const ITEMS_PAGE=15;
  // const allVideogames = useSelector((state)=> state.videogames)// traer infor desde el estado global
  const videogamesP = useSelector((state=>state.videogamesP))
  const filter = useSelector((state=>state.filter))
  const videoFilter=useSelector((state=> state.videoFilter))
  const dispatch = useDispatch();
    useEffect(()=>{ 
      dispatch(getVideogame());
    //si coloco return es cuando quiero   quiero que mi componente muestre cuando se desmonte
    },[dispatch])
    
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el valor del input
    

  const realizarBusqueda = () => {
    dispatch(search(searchTerm)); // Pasar el valor almacenado en searchTerm al dispatch
  };
    // const [items,setItems]=useState([...allVideogames].splice(0,ITEMS_PAGE))
    // const[currentPage, setCurrentPage]=useState(0);

    // const adelante = ()=>{
    //   const next_page=currentPage+1;
    //   const firstIndex = next_page*ITEMS_PAGE;
    //   if(firstIndex >= allVideogames.length) return 
    //   setItems([...allVideogames].splice(firstIndex,ITEMS_PAGE))
    //   setCurrentPage(next_page);
     
    // };
    // useEffect(()=>{ 
    //   setItems([...allVideogames].splice(0,ITEMS_PAGE))
    
    // },[allVideogames])

    // const atras = ()=>{
    //   const pre_page=currentPage - 1;
    //   const firstIndex = pre_page*ITEMS_PAGE;
    //   if(pre_page <0 ) return
    //   setItems([...allVideogames].splice(firstIndex, ITEMS_PAGE))
    //   setCurrentPage(pre_page)
  
    // };
    
    const next_page = ()=>{
      dispatch(paginate("next"))
    };
    const pre_page =()=>{
      dispatch(paginate("prev"))
    };
    const filtrado = (orden)=>{
      dispatch(filtroPorOrden(orden))
    }
  
    const handleSort = (event) => {
      event.preventDefault();
      const sortOption = event.target.value;
    
      if (sortOption === "Ascendente") {
        dispatch(orderByName(sortOption));
      } else if (sortOption === "Descendente") {
        dispatch(orderByName(sortOption));
      } else if (sortOption === "AscendenteRA") {
        dispatch(orderByRating(sortOption));
      } else if (sortOption === "DescendenteRA") {
        dispatch(orderByRating(sortOption));
      }
    };


  return (
    <>
    <div className='home-cont'>
      <h1>Video Juegos</h1>
      <div>
      <div className='home_paginete'>
        <button onClick={pre_page}> Atras</button>
        <button onClick={next_page}>Adelante</button>
      </div>
      <div>
            <label>Buscar videojuego</label>
            <input
              type="search"
              placeholder="ingrese nombre"
              name='Nombre'
              value={searchTerm} // Asociar el valor del input con el estado searchTerm
              onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado searchTerm cuando cambie el input
            />
            <button type="button" onClick={realizarBusqueda}>Buscar</button>
          
        <div>
           <select placeholder='Order' onChange={handleSort}>
              <option value="">ordenar por</option>
              <option value="Ascendente">A-Z</option>
              <option value="Descendente">Z-A</option>
              <option value="AscendenteRA">Menor rating</option>
              <option value="DescendenteRA">Mayor rating</option>
           </select>
          </div>

          { console.log(videogamesP)}
        {filter?<Cards allVideogames={videoFilter}></Cards>:<Cards allVideogames={videogamesP}></Cards>}
        
      </div>
      
      </div>
  
    </div>
    
    </>
  )
}

export default Home