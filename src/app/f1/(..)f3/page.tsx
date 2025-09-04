import Link from 'next/link'
import React from 'react'

const InterceptedF3 = () => {
    return (
        <div className='main'>
            <div className='text-center'>
                <p className='text-[1.7rem] text-[brown]' >(..)intercepted F3 page</p>
                <p className='text-[1.2rem] text-[green]'>jumps in when user try to navigate to f3 page from f1 page. very impulsive page</p>
                <h2 className='text-[1.2rem]' >also shares the same url with the original f3 page</h2>
            </div>
            <div>
                <Link className='text-[blue] text-[1.1rem]' href="/f1/f2" replace>
                    refresh for main f3 page
                </Link>
            </div>
        </div>
    )
}

export default InterceptedF3
