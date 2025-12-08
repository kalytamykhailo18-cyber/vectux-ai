'use client'
import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    // protect SSR
    if (typeof window === 'undefined') return

    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 3)), 
      smooth: true,
      smoothTouch: false, 
      wheelMultiplier: 1,
    })

    const update = (time) => {
      lenisRef.current.raf(time)

      const scroll = lenisRef.current.scroll
      const els = document.querySelectorAll('[data-parallax]')
      if (els.length) {
        els.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax) || 0.2
          el.style.transform = `translateY(${-(scroll * speed)}px)`
          el.style.willChange = 'transform'
        })
      }

      rafRef.current = requestAnimationFrame(update)
    }

    rafRef.current = requestAnimationFrame(update)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
    }
  }, [])

  return (
    <div id="lenis-scroll-container">
      {children}
    </div>
  )
}

