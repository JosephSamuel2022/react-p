import { useState,useEffect } from 'react'
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
    setContacts([...contacts,contact])
  }

  useEffect(()=>{
    const retrived=JSON.parse(localStorage.getItem(localstoragekey))
    if (retrived) setContacts(retrived)

    
  },[])
 

  useEffect(()=>{
    localStorage.setItem(localstoragekey,JSON.stringify(contacts))

  },[contacts])

  

  return (
   <div>
    <Header />
    
     <AddContact addcontacthandler={addcontacthandler}/>
   <ContactList contacts={contacts}/> 
   </div>
  )
}

export default App
