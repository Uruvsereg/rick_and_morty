import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./acciones";

export const agregar=(character)=>{
    return {type:ADD_FAVORITE, payload: character}
}
export const eleminar=(id)=>{
    return{type:DELETE_FAVORITE, payload: id}
}
export const filterCards=(gender)=>{
    return {type:FILTER, payload: gender}
}
export const orderCards=(id)=>{
    return {type: ORDER , payload: id}
}