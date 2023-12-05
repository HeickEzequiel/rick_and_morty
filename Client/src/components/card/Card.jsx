import styles from "./Card.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { addFav, removeFav } from "../../redux/actions";

function Card(props) {

   const dispatch = useDispatch()
   const [isFav, setIsFav] = useState(false)
   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(props.id))
      }else{
         setIsFav(true)
         dispatch(addFav(props))
      }
   }
   
   
   const myFavorites = useSelector(state => state.myFavorites)
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
  
  
return (
      <div className={styles.container}>
            {
      isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
         (<button onClick={handleFavorite}>🤍</button>)
            }


         <button onClick={() => props.onClose(props.id)}>X</button>
         <h1>{props.name}</h1>
         <h2>ID: {props.id}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Especie: {props.species}</h2>
         <h2>Genero: {props.gender}</h2>
         <h2>Origen: {props.origin}</h2>
         <img src={props.image} alt= {props.name} />
         <Link to={`/detail/${props.id}`}>
         <h2>Detalles</h2>
         </Link>
      </div>
   );
}
export default Card