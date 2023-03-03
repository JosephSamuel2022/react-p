import { useState,useEffect } from 'react'
//import { v4 as uuid } from 'uuid'
import reactLogo from './assets/react.svg'
import React from "react"
//import './App.css'
import AddContact from './AddContact'
import ContactList from './ContactList'
import Header from './Header'



function App() {
  const localstoragekey="contacts"
  const [contacts, setContacts] = useState([])
  

  const addcontacthandler=(contact)=>{
    console.log(contact);//passing functions as props
    const r=crypto.randomUUID();
    setContacts([...contacts,{id:r,...contact}])
    localStorage.setItem(
      localstoragekey,
      JSON.stringify([...contacts, contact])
    )
  }

  const removecontacthandler=(id)=>{
    const newcontactlist=contacts.filter((contact)=>{
      return contact.id!=id;
    })
    setContacts(newcontactlist)
  }

  
 /* useEffect(()=>{
    localStorage.setItem(localstoragekey,JSON.stringify(contacts))

  },[contacts])*/

  useEffect(()=>{
    const retrived=JSON.parse(localStorage.getItem(localstoragekey))
    if (retrived) setContacts(retrived)

    
  },[])
 

  

  

  return (
   <div>
    <Header />
    
     <AddContact addcontacthandler={addcontacthandler}/>
   <ContactList contacts={contacts} getcontactid={removecontacthandler}/> 
   </div>
  )
}

export default App
