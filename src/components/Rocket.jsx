import React, { useEffect, useRef, useState } from "react"
import { rocket } from "../assets"

const offset = 65

const Rocket = () => {
  const rocketRef = useRef(null)
  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [pointerX, setPointerX] = useState(0)
  const [pointerY, setPointerY] = useState(0)

  const updateRotation = (event) => {
    const posX =
      event.clientX -
      (rocketRef.current.getBoundingClientRect().left +
        rocketRef.current.width / 2)
    const posY =
      event.clientY -
      (rocketRef.current.getBoundingClientRect().top +
        rocketRef.current.height / 2)

    const rad = Math.atan2(posY, posX)
    const deg = rad * (180 / Math.PI) + 180 - offset
    setRotation(deg)
  }

  const updatePosition = (event) => {
    const newPointerX = event.clientX - rocketRef.current.width / 2
    const newPointerY = event.clientY - rocketRef.current.height / 2

    setPointerX(newPointerX)
    setPointerY(newPointerY)

    setPosition({ x: newPointerX, y: newPointerY })
  }

  const animateRocket = () => {
    // Update the position using requestAnimationFrame for smooth animation
    setPosition((prevPosition) => ({
      x: prevPosition.x + (pointerX - prevPosition.x) / 15,
      y: prevPosition.y + (pointerY - prevPosition.y) / 15,
    }))

    // Call the animateRocket function on the next animation frame
    requestAnimationFrame(animateRocket)
  }

  useEffect(() => {
    window.addEventListener("pointermove", updateRotation)
    window.addEventListener("pointerdown", updatePosition)
    animateRocket() // Start the animation loop

    return () => {
      window.removeEventListener("pointermove", updateRotation)
      window.removeEventListener("mousedown", updatePosition)
    }
  }, [pointerX, pointerY])

  return (
    <div className="rocket-move-area">
      <img
        className="rocket"
        ref={rocketRef}
        src={rocket}
        alt="Rocket"
        style={{
          transform: `rotate(${rotation}deg)`,
          width: "100px",
          left: position.x + "px",
          top: position.y + "px",
          transition: "0.3s",
        }}
      />
    </div>
  )
}

export default Rocket
