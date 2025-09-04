import Link from 'next/link'
import React from 'react'

const InterceptedF2 = () => {
    return (
        <div className='main'>
            <div className='text-center'>
                <p className='text-[1.7rem] text-[brown]' >(.)intercepted F2 page</p>
                <p className='text-[1.2rem] text-[green]'>jumps in when user try to navigate to f2 page from f1 page. very alert page</p>
                <h2 className='text-[1.2rem]' >also shares the same url with the original f2 page</h2>
            </div>
            <div>
                <Link className='text-[blue] text-[1.1rem]' href="/f1/f2" replace>
                    refresh for main f2 page
                </Link>
            </div>
        </div>
    )
}

export default InterceptedF2
