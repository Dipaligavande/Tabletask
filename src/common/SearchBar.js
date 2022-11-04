import React from "react";
import { FiSearch } from "react-icons/fi";
 function SearchBar({filter,setFilter}){
    return(
        <span>
             Search:{''}
             <input value={filter ||'' }
            
             onChange={(e)=>setFilter(e.target.value)}></input>
            <i ><FiSearch/></i>
            {/* <input type="text"  value placeholder="Search"> */}

            
             {/* <i ><FiSearch/></i> */}
        </span>
    )
 }
 export default SearchBar