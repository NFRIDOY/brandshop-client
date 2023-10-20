import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
// import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <>
      {/* <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      /> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
