import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from "react"
//import './App.css'
import AddContact from './AddContact'
import ContactList from './ContactList'
import Header from './Header'



function App() {
  const [count, setCount] = useState(0)
const contacts=[{
 
  name: "sam",
  number: 8925139905

},
{
  
  name: "eni",
  number: 9940581995

}

];
  return (
   <div>
    <Header />
     <AddContact />
   <ContactList contacts={contacts}/> 
   </div>
  )
}

export default App
