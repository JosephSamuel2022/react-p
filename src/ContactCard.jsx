import React from "react"
import user from "./images/user.png"
const ContactCard=(props)=>{
    //destructuring
    const {id,name,number}=props.contact;

    return(<div className="item">
        <img className="ui avatar image" src={user} alt="user"></img>
    <div className="content">
        
    <div className="header">{name}</div>
 
    <div>{number}
    <i className="trash alternate outline icon" style={{color:"red" ,marginLeft:"10px"}} onClick={()=>props.clickHandler(id)}></i></div>
    
    </div>
    </div>)
}

export default ContactCard;