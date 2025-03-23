import { useState } from "react"
import NavBar from "./Components/Navbar"
import Home from "./Components/LandingPage"

function App() {
  const [theme, setTheme]= useState("light")

  return (
    <>
     <NavBar theme ={theme} setTheme={setTheme}/>
     <Home/>
    </>
  )
}

export default App
