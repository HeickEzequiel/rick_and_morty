import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState } from 'react';
import axios from "axios";

const URL = "https://rym2.up.railway.app/api/character"
const KEY = "henrystaff"

function App() {

   const [characters, setCharacters] = useState([])

   
   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
         )
         if(characterId.length){
            return alert(`El personaje con id ${id} ya existe`)
         }
      axios(`${URL}/${id}?key=${KEY}`).then(
         ({ data }) => {
            if(data.name) {
               setCharacters([...characters, data])
         } else {
            window.alert('¡No hay personajes con este ID!')
         }
         }
      )
   }

const onClose = id => {
   setCharacters(characters.filter(char => char.id !== Number(id)))
}
  

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <hr/>
         <Cards characters = {characters} onClose = {onClose}/>

      </div>
   );
}

export default App;
