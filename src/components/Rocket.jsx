import React, { useEffect, useRef, useState } from "react"
import { rocket } from "../assets"

const Rocket = () => {
  const rocketRef = useRef(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = event.target.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top
      const rad = Math.atan2(event.pageX - mouseX, event.pageY - mouseY)
      const rot = rad * (180 / Math.PI) * -1 + 180
      setRotation(rot)

      console.log("mouseX", mouseX)
      console.log("mouseY", mouseY)
      console.log("rad", rad)
      console.log("rot", rot)

    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

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
        }}
      />
    </div>
  )
}

export default Rocket
