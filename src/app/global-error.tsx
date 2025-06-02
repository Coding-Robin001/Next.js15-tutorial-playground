"use client"

import React from 'react'

const gl = () => {
    return (
        <html>
            <body>
                <div className='flex justify-center items-center h-[100vh]'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <h2 className='text-[2rem]'>Something went wrong!
                        </h2>
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
