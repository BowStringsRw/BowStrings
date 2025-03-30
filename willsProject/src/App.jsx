import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import AOS from 'aos'
import NavBar from "./Components/Navbar"
import Home from "./Components/LandingPage"
import Signup from "./Components/Signup"
import Footer from "./Components/Footer"
import "aos/dist/aos.css"

function App() {
  const [theme, setTheme]= useState("light")
  useEffect(()=>{
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <div>
      <NavBar theme ={theme} setTheme={setTheme}/>
      <Routes>
      <Route path="/" element={<Home theme={theme}/>} />
      <Route path="/Signup" element={<Signup theme={theme}/>} />
      {/* <Route path="/Navbar" element={<NavBar theme ={theme} setTheme={setTheme}/>} /> */}
       {/* <Homepage2 theme={theme}/> */}
     {/* <Footer theme={theme}/> */}
    </Routes>
    <Footer theme={theme}/>
    </div>
  
  )
}

export default App
