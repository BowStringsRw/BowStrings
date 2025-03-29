import { useState } from "react"
import NavBar from "./Components/Navbar"
import Home from "./Components/LandingPage"
import Homepage2 from "./Components/HomePage2"
import Footer from "./Components/Footer"

function App() {
  const [theme, setTheme]= useState("light")

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
