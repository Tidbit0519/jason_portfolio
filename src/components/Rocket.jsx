import React, { useEffect, useRef, useState } from "react"
import { Tooltip } from "react-tooltip"
import { rocket } from "../assets"

const offset = 65

const Rocket = () => {
  const rocketRef = useRef(null)

  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState({
    left: window.innerWidth * 0.75,
    top: window.innerHeight * 0.25,
  })
  const [positionDrag, setPositionDrag] = useState({
    left: window.innerWidth / 0.75,
    top: window.innerHeight * 0.25,
  })

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
    setPosition({
      left: event.clientX - rocketRef.current.width / 2 + window.scrollX,
      top: event.clientY - rocketRef.current.height / 2 + window.scrollY,
    })

    console.log("Mouse click: ", event.clientX, event.clientY)
    console.log(position)
  }

  useEffect(() => {
    window.addEventListener("pointermove", updateRotation)
    window.addEventListener("pointerdown", updateRotation)
    window.addEventListener("pointerdown", updatePosition)

    return () => {
      window.removeEventListener("pointermove", updateRotation)
      window.addEventListener("pointerdown", updateRotation)
      window.removeEventListener("pointerdown", updatePosition)
    }
  }, [])

  useEffect(() => {
    let request

    const animateRocket = () => {
      setPositionDrag((prevPositionDrag) => ({
        left:
          prevPositionDrag.left + (position.left - prevPositionDrag.left) / 15,
        top: prevPositionDrag.top + (position.top - prevPositionDrag.top) / 15,
      }))

      request = requestAnimationFrame(animateRocket)
    }

    animateRocket()
    console.log(position)

    return () => {
      cancelAnimationFrame(request)
    }
  }, [position])


  return (
    <>
      <Tooltip
        className="z-50"
        anchorSelect="#rocket"
        content="Move me!"
        defaultIsOpen="true"
        openOnClick="true"
        offset={-10}
      />
      <img
        id="rocket"
        className="absolute w-[100px] z-50"
        ref={rocketRef}
        src={rocket}
        alt="Rocket"
        style={{
          transform: `rotate(${rotation}deg)`,
          left: `${positionDrag.left}px`,
          top: `${positionDrag.top}px`,
        }}
        data-tooltip-variant="dark"
        data-tooltip-place="left"
      />
    </>
  )
}

export default Rocket
