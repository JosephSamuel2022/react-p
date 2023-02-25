import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from "react"
import './App.css'
import AddContact from './AddContact'
import './ContactList'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
     <AddContact />
   {/* <Contact List /> */}
   </div>
  )
}

export default App
