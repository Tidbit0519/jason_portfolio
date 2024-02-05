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
        <Rocket />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="relative">
          <About />
          <Tech />
          <Experience />
          <Works />
          <Feedbacks />
        </div>

        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
