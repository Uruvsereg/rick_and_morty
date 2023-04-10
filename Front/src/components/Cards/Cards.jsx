import style from './Cards.module.css';
import Card from '../Card/Card';

export default function Cards({characters, onClose}) {

   return (
      <div>
         <p></p>
         <div className = {style.c}>
            {
               characters.map(({id,name,species,gender,image})=>{
                  return <Card
                  id={id}
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={()=>onClose(id)}
                  />
               })
            }
         </div>
      </div>
   )
}