import React, { useState, useEffect, useContext } from "react"
import Confetti from "react-confetti"
import { useNavigate } from "react-router-dom"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

const Success = () => {
  let navigate = useNavigate()
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const { setQuantity, setTotal, setItems } = useContext(ShoppingCartContext)

  setQuantity(0)
  setTotal(0)
  setItems([])
  localStorage.clear()

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })
  })

  setTimeout(() => {
    navigate("/", { replace: true })
  }, 5000)
  return (
    <div>
      <Confetti width={width} height={height} numberOfPieces={400} />
      <h2>Success has never looked this good!</h2>
      <h3>And so will you with your new onesie!</h3>
      <p>
        If your browser does not redirect you, please click <a href="/">here</a>
      </p>
    </div>
  )
}

export default Success
