"use client"

import React from 'react'

const ErrorBoundary = ({ error }: { error: Error }) => {
    return (
        <div className='h-[65vh] text-center mt-[2rem]'>
            <h2 className='text-[4rem] text-[red]'>{error.message}</h2>
            <h2 className='text-[2rem] text-[blue]'>this error was caught by the error.tsx file in the productReview directory which served as an error boundary for the producReview page. super cool</h2>

        </div>
    )
}

export default ErrorBoundary
