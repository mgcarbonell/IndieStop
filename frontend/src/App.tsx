import React from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import RouteConfig from "./config/Routes"

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <RouteConfig />
    </div>
  )
}

export default App
