import{GET_VIDEOGAME} from"./actionTypes"

let initialState={
    videogames:[]

};
function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_VIDEOGAME:
            return{...state, videogames: action.payload}
            
        default:
            return{ ...state}
    }
 

}
export default rootReducer