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
       
       
       </div>
    );
 }
 export default Nav