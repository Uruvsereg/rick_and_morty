import style from './Card.module.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregar,eleminar } from '../../redux/actions';

export default function Card({name,species,gender,image,onClose,id}) {
   const dispatch = useDispatch();
   const [favorite, setFavorite]=useState(false);
   const myFavorites = useSelector(state => state.myFavorites);

   useEffect(()=>{
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setFavorite(true);
         }
      });
   },[myFavorites,id]);

   const handleFavorite=()=>{
      if(favorite){
         setFavorite(false)
         dispatch(eleminar(id))
      }
      else{
         setFavorite(true);
         dispatch(agregar({name,species,gender,image,onClose,id}))
      }
   }

   const sexo=()=>{
      if(gender==="Male"){
         return "♂";
      }
      else if(gender==="Female"){
         return "♀";
      }
      else if(gender==='Unknown'){
         return '⚥⚦⚨'
      }
      else{
         return "⚧️";
      }
   }
   const raza=()=>{
      if(species === "Human"){
         return "웃";
      }
      else if(species === "Alien"){
         return "🛸";
      }
      else if(species === "Robot"){
         return "🤖";
      }
      else if(species === "Mythological Creature"){
         return "🔱";
      }
      else if(species === "Animal"){
         return "🐾";
      }
      else if(species === "Humanoid"){
         return "유";
      }
      else if(species === "Poopybutthole"){
         return "💩";
      }
      else if(species === "Cronenberg"){
         return "☣️";
      }
      else if(species === "Disease"){
         return "🧫";
      }
      else{
         return species
      }
   }
   
   return (
      <div>
         <div className={style.card}>
            <div className={style.at}>
               <h2>{raza()}</h2>
               <h2>{sexo()}</h2>
            </div>
            <Link to={`/detail/${id}`}>
               <div>
                  <img  src={image} alt={name} className={style.im}/>
               </div>
            </Link>
            <div className={style.nom}>
               <h2>{name}</h2>
            </div>
            <div className={style.bar}>
               <div className={style.bc}>
                  <button onClick={onClose}>x</button>
               </div>
            {
               favorite ?(
                  <button onClick={handleFavorite}>❣️</button>
               ):(
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            </div>
         </div>
      </div>
   );
}