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
      duration: 0.8,
      easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)),
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 1.2,
      autoResize: true,
      syncTouch: true,
      infinite: false,
    })

    const update = (time) => {
      lenisRef.current?.raf(time)

      const scroll = lenisRef.current?.scroll || 0
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

    // Handle resize events to recalculate scroll dimensions
    const handleResize = () => {
      lenisRef.current?.resize()
    }

    window.addEventListener('resize', handleResize)

    // Recalculate dimensions after dynamic content loads
    const resizeTimeout = setTimeout(() => {
      lenisRef.current?.resize()
    }, 1000)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
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

