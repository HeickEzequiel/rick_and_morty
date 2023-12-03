import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

 function Nav(props) {
    return (
       <div>
         <SearchBar onSearch = {props.onSearch}/>
       
       
         <button>
            <Link to= '/about'>
               About
            </Link>
         </button>
         <button>
            <Link to= '/home'>
               Home
            </Link>
         </button>
         <button>
            <Link to= '/favorites'>
               Favorites
            </Link>
         </button>
         <button onClick={props.logout} >Logout ❌</button>
       
       </div>
    );
 }
 export default Nav