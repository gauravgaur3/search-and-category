import React,{useState,useEffect} from "react";
import FilterContext from "./filterContext";
import { imagesData } from "../data";


const FilterState = (props) => {
   const [state, setState] = useState([])
   useEffect(() => {
       setState(imagesData);
   }, [])

    return(
    <FilterContext.Provider value={state}>
        {props.children}
    </FilterContext.Provider>
)}

export default FilterState;