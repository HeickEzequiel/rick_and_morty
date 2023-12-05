import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx'
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';


function App() {

   const [characters, setCharacters] = useState([])
   const navigate = useNavigate()
   const location = useLocation()
   const dispatch = useDispatch
   
   function onSearch(id) {
      const characterId = characters.filter(
         (char) => char.id === Number(id)
         )
         if(characterId.length){
            return alert(`El personaje con id ${id} ya existe`)
         }
         //axios(`https://rickandmortyapi.com/api/character/${id}`)
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
      dispatch(removeFav(id))
   }
  
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    } else {
   //       alert("Credenciales incorrectas!");
   //    }
   // }

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
         .then(({ data }) => {
            const { access } = data;
            if(access){
            setAccess(data);
            access && navigate('/home');
            // access && navigate ('/')
            } else {
               alert("Credenciales incorrectas!")
            }

      });
   }


   function logout() {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/'); // si quiero evitar el login ('/')------>('/home')
       }, [access]);


   return (
      <div className='App'>
         {
            location.pathname !== "/" ? <Nav onSearch = {onSearch} logout={logout}/> : null
         }
         
         <Routes>
            <Route path="/"
                   element= {<Form login = {login} />}
                   />
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
            <Route path="/favorites"
                   element={<Favorites onClose={onClose}/>} />

         </Routes>
         <hr/>
         

      </div>
   );
}

export default App;
