import React from "react";
import s from "./Section.module.css"
    
const Section = ({children, title}) => {
    return (<div>
        <h3>{s.title}</h3>
        {s.children}
    </div>)
}
export default Section