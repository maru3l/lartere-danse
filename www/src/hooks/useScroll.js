// vendors
import React, { useState, useEffect } from "react"

const scrollX = () => {
  if (typeof window === "undefined") return 0

  return window.scrollX
}

const scrollY = () => {
  if (typeof window === "undefined") return 0

  return window.scrollY
}

export default () => {
  const [scroll, setSrcoll] = useState({ x: 0, y: 0 })
  let ticking = false
  let last_known_scroll_position = 0

  const handleScroll = () => {
    last_known_scroll_position = { x: scrollX(), y: scrollY() }

    if (!ticking) {
      window.requestAnimationFrame(function () {
        setSrcoll(last_known_scroll_position)
        ticking = false
      })

      ticking = true
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return scroll
}
