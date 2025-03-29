import { useEffect, useState } from "react"
import AOS from 'aos'
import NavBar from "./Components/Navbar"
import Home from "./Components/LandingPage"
import Homepage2 from "./Components/HomePage2"
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
    <>
     <NavBar theme ={theme} setTheme={setTheme}/>
     <Home theme={theme}/>
     <Homepage2 theme={theme}/>
     <Footer theme={theme}/>
    </>
  )
}

export default App
