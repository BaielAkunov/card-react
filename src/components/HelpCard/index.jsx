import React from "react"
import Css from "./HelpCard.module.css"

export const HelpCard = ({title, background})=>{
    return(
        <div style={{background:background}} className={Css.helpcard}>{title}</div>
    )
}