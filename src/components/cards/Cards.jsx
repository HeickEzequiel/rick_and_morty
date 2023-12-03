import Card from '../card/Card';
import styles from "./Cards.module.css"

function Cards({characters, onClose}) {
   return <div className={styles.container}>
      {
            !characters.length ? <h2>Por favor ingrese un id</h2>
            :
            characters.map(character => (
            <Card
               key = {character.id}
               id = {character.id}
               name = {character.name}
               status = {character.status}
               species = {character.species}
               gender = {character.gender}
               origin = {character.origin.name}
               image = {character.image}
               onClose = { onClose }
           /> 
         ))
      }
   </div>;
}
export default Cards