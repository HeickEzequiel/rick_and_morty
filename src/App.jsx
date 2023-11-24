import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState } from 'react';
import axios from "axios";
import { Routes, Route, useNavigate} from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/error.jsx';

const URL = "https://rym2.up.railway.app/api/character"
const KEY = "henrystaff"

function App() {

   const [characters, setCharacters] = useState([])
   const navigate = useNavigate()
   
   function onSearch(id) {
      const characterId = characters.filter(
         (char) => char.id === Number(id)
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

         navigate("/home")
   
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== Number(id)))
   }
  

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <Routes>
            <Route path='/home'
                   element= {<Cards characters = {characters} onClose = {onClose}/>}
                   />
            <Route path='/about'
                   element={<About />}
                   />
            <Route path='/detail/:id'
                   element={<Detail />}
                   />
            <Route path="*"
                   element = {<Error />}
                   />

         </Routes>
         <hr/>
         

      </div>
   );
}

export default App;
