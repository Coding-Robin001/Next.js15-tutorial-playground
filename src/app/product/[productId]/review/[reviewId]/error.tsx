"use client"

import React, { startTransition } from 'react'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'

const ErrorBoundary = ({ error, reset }: { error: Error, reset: () => void }) => {
    const router = useRouter()

    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <div className='h-[65vh] text-center mt-[2rem]'>
            <h2 className='text-[4rem] text-[red]'>{error.message}</h2>
            <h2 className='text-[2rem] text-[blue] mb-[1.5rem]'>this error was caught by the error.tsx file in the productReview directory which served as an error boundary for the producReview page. super cool</h2>
            <button onClick={reload}>Try again</button>
        </div>
    )
}

export default ErrorBoundary
