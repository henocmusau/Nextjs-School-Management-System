'use client'
import React, { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitButton({ text }) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      className='bg-blue-700 disabled:bg-slate-300 px-4 py-2 rounded-lg text-white mt-4 w-full'
    >
      {text || 'Enregistrer'}
    </button>
  )
}
