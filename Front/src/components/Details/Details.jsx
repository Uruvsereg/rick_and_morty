import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import style from './Details.module.css';

const Detalles=()=>{
    const [character, setCharacter]=useState({});
    const {detailId}=useParams();
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    // useEffect(() => {
    //     fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
    //       .then((response) => response.json())
    //       .then((char) => {
    //         if (char.name) {
    //           setCharacter(char);
    //         } else {
    //           window.alert("No hay personajes con ese ID");
    //         }
    //       })
    //       .catch((err) => {
    //         window.alert("No hay personajes con ese ID");
    //       });
    //     return setCharacter({});
    //   }, [detailId]);

      const sexo=()=>{
        if(character.gender === "Male"){
           return "♂";
        }
        else if(character.gender === "Female"){
           return "♀";
        }
        else if(character.gender === "Unknown"){
           return "⚥⚦⚨";
        }
        else{
           return "⚧️";
        }
     }

     const raza=()=>{
        if(character.species === "Human"){
           return "웃";
        }
        else if(character.species === "Alien"){
           return "🛸";
        }
        else if(character.species === "Robot"){
           return "🤖";
        }
        else if(character.species === "Mythological Creature"){
           return "🔱";
        }
        else if(character.species === "Animal"){
           return "🐾";
        }
        else if(character.species === "Humanoid"){
           return "유";
        }
        else if(character.species === "Poopybutthole"){
           return "💩";
        }
        else if(character.species === "Cronenberg"){
           return "☣️";
        }
        else if(character.species === "Disease"){
           return "🧫";
        }
        else{
           return character.species
        }
     }

    const estado=()=>{
      if(character.status==="Alive"){
         return "❤️";
      }
      else if(character.status==="Death"){
         return "☠️";
      }
      else{
         return "?";
      }
    }

    return (
      <body className={style.bg}>
        <div className={style.b}>
          <div className={style.cometa}/>
          <div className={style.bot}>
            <h1>DETALLES:</h1>
            <h3>NOMBRE: {character.name}</h3>
          </div>
          <div>
            <div className={style.im}>
              <div className={style.img}>
                <img src={character.image} alt={character.name} />
              </div>
            <div className={style.info}>
               <p></p>
              <div>ESPECIE: {raza()} {character.species}</div>
              <div>SEXO: {sexo()}</div>
              <div>Estatus: {estado()}</div>
              <div>ORIGEN: {character.origin?.name}</div>
            </div>
            </div>
          </div>
        </div>
      </body>
    )
}
export default Detalles;