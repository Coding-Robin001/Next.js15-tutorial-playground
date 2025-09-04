"use client"

import React, { startTransition } from 'react'
import { useRouter } from 'next/navigation'
import Card from '@/components/card'

const ErrorBoundary = ({ error, reset }: { error: Error, reset: () => void }) => {
    const router = useRouter()

    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <Card>
            <div className='flex justify-center items-center mt-[15rem]'>
                <div className='flex flex-col gap-3 items-center justify-center mt-'>
                    <h2 className='text-[2rem] text-[red]'>error loading notification!</h2>
                    <button className='' onClick={reload}>Try again</button>
                </div>
            </div>
            <p className='text-center text-[red] mt-[1.7rem]'>(data fetching failed)</p>

        </Card>
    )
}

export default ErrorBoundary
