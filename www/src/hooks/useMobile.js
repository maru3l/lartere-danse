import React, { useState, useEffect } from "react"

const windowWidth = () => {
  if (typeof window === undefined) return 0

  return window.innerWidth
}

export default (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(windowWidth() < breakpoint)

  const handleResize = () => {
    const width = windowWidth()

    setIsMobile(width < breakpoint)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return isMobile
}
