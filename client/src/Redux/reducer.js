import{FILTRO, GET_VIDEOGAME,  ORDER_NAME, ORDER_RATING, PAGINATE, SEARCH} from"./actionTypes"

let initialState={
    videogames:[],
    videogamesP:[],// Estado modificado por el paginado
    currenPage:0,
    videoPag: 0, //elimina
    videoFilter: [],
    filter : false,

};
function rootReducer(state=initialState, action){
    const ITEMS_PER_PAGE = 15;
    switch (action.type) {
        case GET_VIDEOGAME:
            return{...state, 
                videogames: action.payload,
                videogamesP: [...action.payload].splice(0,ITEMS_PER_PAGE)
            }
         
        case PAGINATE:
            
            const next_page = state.currenPage + 1;
            const prev_page = state.currenPage -1;
            const firstIndex = action.payload  ==="next"? next_page*ITEMS_PER_PAGE: prev_page*ITEMS_PER_PAGE;

            if(action.payload ==="next" && firstIndex >=state.videogames.length){return{...state}}
            else if(action.payload === "prev" && prev_page <0){return{...state}}
            
            if(state.filter){return{
                ...state,
                videoPag:[...state.videoFilter].splice(firstIndex,ITEMS_PER_PAGE),
                currenPage:action.payload === "next"? next_page:prev_page 
            }}
            return{...state,
            videogamesP : [...state.videogames].splice(firstIndex,ITEMS_PER_PAGE), 
            currenPage:action.payload === "next"? next_page:prev_page 
            }
        case FILTRO:
            if( action.payload=== "API"){
            return{...state,
                filter: true,
                videoFilter:[...state.videogames].filter((elem)=>  (typeof elem.id)==="number"  ),
                videoPag:[...state.videogames].filter((elem)=>  (typeof elem.id)==="number"  ).splice(0,ITEMS_PER_PAGE)
            }   
            }else{ 
                return{...state,
                    filter : true,
                    videoFilter:[...state.videogames].filter((elem)=> (typeof elem.id)==="string").splice(0,ITEMS_PER_PAGE),
                    videoPag:[...state.videogames].filter((elem)=> (typeof elem.id)==="string").splice(0,ITEMS_PER_PAGE)

                }

            }
        case  SEARCH:
            console.log({...state, 
                videogames: action.payload,
                videogamesP: [...action.payload].splice(0,ITEMS_PER_PAGE)
            });
            return{...state, 
                videogames: action.payload,
                videogamesP: [...action.payload].splice(0,ITEMS_PER_PAGE)
            }
        case ORDER_NAME:
            let ordenado;
            console.log(action.type);
            if(action.payload=== "Ascendente"){
                ordenado=[...state.videogamesP].sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()? 1:-1));
                console.log("mayor A-Z");
            }
           else if(action.payload=== "Descendente"){
                ordenado=[...state.videogamesP].sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()? -1:1));
                console.log("mayor Z-a");
            }
            console.log( {
                ...state,
                videogamesP:[...ordenado],
            });
            return {
                ...state,
               videogamesP:[...ordenado],
           
            }
        case ORDER_RATING:
            let ordeRating;
            console.log(action.type);
            if(action.payload=== "AscendenteRA"){
                ordeRating=[...state.videogamesP].sort((a,b) => (a.rating > b.rating? 1:-1));
                console.log("meRating");
            }
            else if(action.payload=== "DescendenteRA"){
                ordeRating=[...state.videogamesP].sort((a,b) => (a.rating > b.rating? -1:1));
                console.log("maRating");
            }
            console.log({
                ...state,
               videogamesP:[...ordeRating]});
            return {
                 ...state,
                videogamesP:[...ordeRating],
            }
        default:
            return{ ...state,   
        }
    }
    
 

}
export default rootReducer