import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./components/HomePage/Home"

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" />
          <Route path="/checkout" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
