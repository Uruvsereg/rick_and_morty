import './App.css';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Details/Details.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import Form from './components/Form/Form.jsx';
import NAV from './components/NAV/NAV.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App () {
  
  const [characters, setCharacters]=useState([]);
  const location =useLocation();
  const Navigate=useNavigate();
  const [access, setAccess]=useState(false);
  
  const username="uruvsereg@hotmail.com";
  const password="Uj1726";
  
  const login=(userData)=>{
    if(userData.username === username && userData.password === password){
      setAccess(true)
      Navigate("/home");
    }
  }

  useEffect(()=>{
    !access && Navigate("/")
  },[access,Navigate])

  const onSearch = (character) => {
    // fetch(`https://rickandmortyapi.com/api/character/${character}`)
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const char = characters.find(char =>
            char.id = data.id
          )
          if(!char){
            setCharacters((char) => [...char, data]);
          }
          else{
            // if(char !== data){
            //   setCharacters((oldChars) => [...oldChars, data]);
            // }
            // else{
              window.alert("El personaje ya está agregado");
            // }
          }
        }
        else {
          window.alert("No hay personajes con ese ID");
        }
      })
    // fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.id) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //     } else {
    //       alert('No hay personajes con ese ID');
    //     }
    //   })
    //   .catch(err => console.log(err))
  }

  const onClose=(id)=>{
      setCharacters(
          characters.filter(character=>character.id !==id)
        )
      }
      
  return (
    <div className = "App" style={{ padding: "25px" }}>
      {location.pathname === "/"?<Form login={login}/>:<NAV onSearch = {onSearch}/>}
      <Routes>
        <Route path = "/home" element = {
            <Cards
             characters = {characters}
             onClose = {onClose}
            />
        }/>
        <Route path = "/favorites" element = {<Favorites/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/detail/:detailId" element = {<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App

// Hace falta
// desafío react-router