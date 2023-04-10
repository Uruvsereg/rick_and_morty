import { ADD_FAVORITE, DELETE_FAVORITE,FILTER,ORDER } from "./acciones";

const initialState={
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state = initialState,action)=>{
    const {allCharacters} = state;
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...allCharacters, action.payload]
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites:state.myFavorites.filter(char => char.id !== action.payload),
                allCharacters:allCharacters.filter(char => char.id !== action.payload)
            }
        case FILTER:
            const allCharsFilter = allCharacters.filter(char => char.gender === action.payload)
            return{
                ...state,
                myFavorites:allCharsFilter
            }
        case ORDER:
            return{
                ...state,
                myFavorites:
                    action.payload === "Ascendente" ? allCharacters.sort((a,b) => a.id-b.id) : allCharacters.sort((a,b) => b.id-a.id)
            }
        default:
            return {...state}
    }
}

export default reducer;