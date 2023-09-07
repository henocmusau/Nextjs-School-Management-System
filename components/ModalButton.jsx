'use client'

import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function ModalButton({ openModal }) {
  const portalRef = useRef()
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const portalElement = document.createElement('div')
      portalElement.classList.add('shadow-xl', 'z-50', 'absolute', 'right-4', 'bottom-20', 'md:right-20')
      document.body.appendChild(portalElement)
      portalRef.current = portalElement

      // return () => {
      //   document.body.removeChild(portalElement)
      // }

    }

  }, [])

  return (
    <button ref={portalRef} onClick={openModal} className='rounded-full p-6 h-16 w-16 bg-blue-700 hover:bg-blue-500 duration-300 text-white flex items-center justify-center text-2xl'>+</button>,
    portalRef.current
  )
}
