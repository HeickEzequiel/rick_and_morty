export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>Nombre: {props.name}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Especie: {props.species}</h2>
         <h2>Genero: {props.gender}</h2>
         <h2>Origen: {props.origin}</h2>
         <img src={props.image} alt= {props.name} />
      </div>
   );
}
