import React, { useState, useEffect } from "react"

const windowWidth = () => {
  if (typeof window === "undefined") return 0

  return window.innerWidth
}

export default (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(windowWidth() < breakpoint)
  let ticking = false
  let lastKnownWindowWidth = 0

  const handleResize = () => {
    lastKnownWindowWidth = windowWidth()

    if (!ticking) {
      window.requestAnimationFrame(function() {
        setIsMobile(lastKnownWindowWidth < breakpoint)
        ticking = false
      })

      ticking = true
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return isMobile
}
