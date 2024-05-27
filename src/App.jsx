import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { RouterProvider } from 'react-router-dom'
import { refVar } from './components/contexts/context'
import About from './components/About'
import { useScroll } from 'framer-motion'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'




function App() {
  const [count, setCount] = useState(0)
  const ulRef = useRef();
  const menuRef = useRef();

  
  
  
  return (
    < >
      <refVar.Provider value={{ulRef,menuRef}}>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <NavBar/>
      </refVar.Provider>
      
    </>
  )
}

export default App
