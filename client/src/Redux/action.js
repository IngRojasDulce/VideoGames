import axios from 'axios'
import{ FILTRO, GET_VIDEOGAME, ORDER_NAME, ORDER_RATING, PAGINATE, SEARCH} from './actionTypes'

export function postVideogame(input){
    return async function(dispatch){
        try {
            const response =await axios.post("http://localhost:3001/videogames/", input)
            alert("Video-juego creado con exito")
            
        } catch (error) {
           alert("algo fallo al crear")
        }
    }
};
export function getVideogame(){
    return async function(dispatch){
        try {
            const response =await axios.get("http://localhost:3001/videogames/")
           
            dispatch({
                type:GET_VIDEOGAME,
                payload:response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
export function paginate(orden){
    return async function(dispatch){
        dispatch({
            type: PAGINATE,
            payload:orden
        })
        
    };
};
export function filtroPorOrden(orden){
    return async function(dispatch){
        dispatch({
            type: FILTRO,
            payload:orden
        })
        
    };
};
export function search(input){
    return async function(dispatch){
        try {
            const response =await axios.get(`http://localhost:3001/videogames/?name=${input}`)
                dispatch({
                    type:SEARCH,
                    payload:response.data
                })
         } catch (error) {
             alert(error.response.data.error)
         } }
    };
    export const orderByName = (event) => {
        console.log(event);
        return async function(dispatch){
            dispatch({
                type: ORDER_NAME,
                payload:event
            })
        } 
        };
     export const orderByRating = (event) => {
        return async function(dispatch){
            dispatch({
                type: ORDER_RATING,
                payload:event
            })
        } 
        };