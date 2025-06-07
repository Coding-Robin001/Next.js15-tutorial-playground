import Link from 'next/link'
import React from 'react'

const F1 = () => {
    return (
        <div className='main'>
            <div className='text-[1.5rem]'>
                F1 page
            </div>
            <div className='flex flex-col gap-4'>
                <Link className='text-[blue] text-[1.1rem]' href="/f1/f2">
                    Navigate to F2 page
                </Link>
                <Link className='text-[blue] text-[1.1rem]' href="/f3">
                    Navigate to F3 page
                </Link>
            </div>
        </div>
    )
}

export default F1
