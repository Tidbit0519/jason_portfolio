import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Sparkles, OrbitControls, Preload, useGLTF, Float, Decal } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Programmer = ({ isMobile }) => {
  const computer = useGLTF("./lost_programmer/scene.gltf")

  return (
    <>
      <Sparkles
        count={isMobile? 50 : 100}
        color="violet"
        scale={isMobile? 3.6 : 7.2}
        size={isMobile? 7.5 : 10}
        speed={0.5}
        position={[0, 0, 0]}
      />
      <Float
        speed={1.75}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <mesh>
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.75 : 1.5}
            position={[0, 0, 0]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </mesh>
      </Float>
    </>
  )
}

const ProgrammerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      camera={{ position: [17.5, 0, 3], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
        <Programmer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ProgrammerCanvas
