import style from './NAV.module.css';
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

const NAV=({onSearch})=>{
    return(
        <nav>
            <div className={style.n}>
                <button><Link to = "/home">Inicio</Link></button>
                <button><Link to = "/favorites">Favoritos</Link></button>
                <button><Link to = "/about">Acerca de</Link></button>
                <SearchBar onSearch={onSearch}/>
                <button><Link to = "/">Salir</Link></button>
            </div>
        </nav>
    )
}
export default NAV;