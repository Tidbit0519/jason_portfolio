import React from "react"
import { BrowserRouter } from "react-router-dom"

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Rocket
} from "./components"


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Tech />
        <Experience />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Rocket />
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
