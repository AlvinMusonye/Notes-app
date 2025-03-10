import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateNote from './Pages/CreateNote'
import SignIn from './Pages/SignIn'


import Footer from './components/Footer'

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/createNote' element ={<CreateNote />}/>
      <Route path='/signin' element ={<SignIn />}/>
    </Routes>
    <Footer />
  </Router>
  )
}

export default App