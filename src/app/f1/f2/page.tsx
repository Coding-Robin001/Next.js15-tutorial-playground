import Link from 'next/link'
import React from 'react'

const f2 = () => {
    return (
        <div className='main'>
            <p className='text-[1.5rem] text-[brown]'>
                main f2 page
            </p>
            <p className='text-[1.5rem] text-[green]'>
                nested subroute within the f1 page
            </p>
            <Link href="/f4">Navigate to f4 page</Link>
        </div>
    )
}

export default f2
