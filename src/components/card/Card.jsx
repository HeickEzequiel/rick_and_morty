import { Link } from "react-router-dom"

function Card(props) {
   return (
      <div>
        
         <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>Nombre: {props.name}</h2>
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