import axios from 'axios'
import{ CLEAN_DETAIL, DETAIL, FILTRO, FILTRO_GENRES, GET_GENRES, GET_VIDEOGAME, ORDER_NAME, ORDER_RATING, PAGINATE, SEARCH} from './actionTypes'

export function postVideogame(input){
    return async function(dispatch){
        try {console.log(input)
            const response =await axios.post("http://localhost:3001/videogames/", input)
            alert(`Video-juego ${response.data.name} ha sido creado con exito`)
            console.log(response.data);
        } catch (error) {
           alert(error.response.data.error)
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
export function filtroGenres(orden){
    return async function(dispatch){
        try {
            dispatch({
                type: FILTRO_GENRES,
                payload:orden
            })
        } catch (error) {
            alert(error.response.data.error)  
        }
    };
};
export function getGenres(){
    return async (dispatch) => {
        console.log("estoy en aaction de get genres");
        let response = await axios('http://localhost:3001/genres')
        return dispatch({ type: GET_GENRES, payload: response.data })
      }
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
        export const getDetail = (id) => {
          
            return async (dispatch) => {try {
                const response = await axios(`http://localhost:3001/videogames/${id}`)
                console.log("estoy en la action");
                return dispatch({ type: DETAIL, payload: response.data })
            } catch (error) {
                alert(error.response.data.error)  
            } 
            }
        };
        export const cleanDetail = () => {
            return { type:  CLEAN_DETAIL}}