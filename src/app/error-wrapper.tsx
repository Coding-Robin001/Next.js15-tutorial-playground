"use client"

import React, { useState } from 'react'

interface WrapperProps {
  children: React.ReactNode
}

const ErrorSimulator = ({ message = "an error occured" }: { message?: string }) => {

  const [error, setError] = useState(false)

  if (error) {
    throw new Error(message)
  }

  return (
    <button
      title='Simulate an error'
      onClick={() => setError(true)}
    >
      Click me to simulate Error
    </button>
  )
}


export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <div className='flex justify-center'>
        <ErrorSimulator message='simulated error in layout component' />
      </div>
      {children}
    </div>
  )
}
