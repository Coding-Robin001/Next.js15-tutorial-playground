"use client"

import React from 'react'

const gl = () => {
    return (
        <html>
            <body>
                <div className='flex justify-center items-center h-[100vh]'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <h2 className='text-[3rem]'>Something went wrong!
                        </h2>
                        <h2 className='text-center text-[brown] text-[1.3rem]'>this is a global-error.tsx component that kicks in as an error boundary for our entire app
                        </h2>
                        <span className='text-center text-[green] text-[1.1rem]'>act as our last line of defence so our app dont crash</span>
                        <div>
                            <button
                                onClick={() => {
                                    window.location.reload()
                                }}
                            >
                                Refresh</button>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default gl
