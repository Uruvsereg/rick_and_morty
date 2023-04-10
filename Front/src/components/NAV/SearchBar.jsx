import { useState } from "react";
import style from './Searchbar.module.css';

function SearchBar({onSearch}) {
   const [character,setCharacter]=useState('');

   const hadleChange=(event)=>{
      setCharacter(event.target.value);
   }

   const handleKeyPress = (event) => {
      if(event.key === "Enter"){
        onSearch(character)
        setCharacter("")
      }
   }

   return (
      <div className = {style.bg}>
         <input type = "search" value = {character} onChange = {hadleChange} onKeyDown = {handleKeyPress}/>
         <button onClick = {()=>onSearch(character)} className = {style.bg}>Agregar</button>
      </div>
   );
} 
export default SearchBar;