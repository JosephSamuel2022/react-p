import React from "react"
const ContactList=(props)=>{//props is a keyword used for passing arguments to child from the parent 
    console.log(props)
    const renderContactList = props.contacts.map((contact)=>{//for every contact do this
        return (
            <div className="item">
            <div className="content">
                
            <div className="header">{contact.name}</div>
         
            <div>{contact.number}</div>
            
            <i className="trash alternate outline icon" ></i></div>
            </div>//return must have a parent tag
           
           
        )
    })
    return <div className="ui celled list">{renderContactList}</div>//curly brackets to reference to the function
}

export default ContactList;