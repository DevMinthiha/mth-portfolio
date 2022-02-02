import React from 'react'
import Navbar from './Components/Navbar'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Profile from './Pages/Home/Profile'
import Project from './Pages/Projects/Project'
import Skills from './Pages/Skills/Skills'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App
