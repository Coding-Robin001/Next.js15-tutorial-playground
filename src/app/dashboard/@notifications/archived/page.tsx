import React from 'react'
import Card from '@/components/card'
import Link from 'next/link'

const Archived = () => {
    return (
        <Card >
            <div className='flex flex-col gap-4 text-center items-center'>
                <span >archived notification </span>
                <Link className='text-[blue] 'href='/dashboard'>default</Link>
            </div>
        </Card>
    )
}

export default Archived
