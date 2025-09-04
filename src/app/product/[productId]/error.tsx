"use client"

import React, { startTransition } from 'react'
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
        </div>
    )
}

export default ErrorBoundary
