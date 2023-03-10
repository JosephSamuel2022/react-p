import React from "react"
import ContactCard from './ContactCard';
const ContactList=(props)=>{//props is a keyword used for passing arguments to child from the parent 
    console.log(props)
    const deletecontacthandler=(id)=>{props.getcontactid(id)}
    const renderContactList = props.contacts.map((contact)=>{//for every contact do this
        return (
            <ContactCard contact={contact} clickHandler={deletecontacthandler} key={contact.id}></ContactCard>
           
           
        )
    })
    return <div className="ui celled list">{renderContactList}</div>//curly brackets to reference to the function
}

export default ContactList;