import axios from 'axios'
import{GET_VIDEOGAME} from './actionTypes'
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
