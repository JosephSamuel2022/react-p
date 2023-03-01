import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from "react"
//import './App.css'
import AddContact from './AddContact'
import ContactList from './ContactList'
import Header from './Header'



function App() {
  const [contacts, setContacts] = useState([])

  return (
   <div>
    <Header />
     <AddContact />
   <ContactList contacts={contacts}/> 
   </div>
  )
}

export default App
