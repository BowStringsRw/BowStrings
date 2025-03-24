import { useState } from "react"
import NavBar from "./Components/Navbar"
import Home from "./Components/LandingPage"
import Homepage2 from "./Components/HomePage2"

function App() {
  const [theme, setTheme]= useState("light")

  return (
    <>
     <NavBar theme ={theme} setTheme={setTheme}/>
     <Home theme={theme}/>
     <Homepage2/>
    </>
  )
}

export default App
