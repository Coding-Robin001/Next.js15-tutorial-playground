import Card from '@/components/card'
import React from 'react'

const loading = () => {
    return (
        <Card>
            <div className='flex flex-col items-center gap-3'>
                <div className="loader"></div>
                <h2 className='text-center text-[#a04402] text-[1.8rem]'>
                    Loading Revenue data...
                </h2>
                <span className='text-[#a04402]'>(data fetching in progress)</span>
            </div>
        </Card>

    )
}

export default loading
