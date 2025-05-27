"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const notFound = () => {

    const pathname = usePathname();
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4]

    return (
        <div className='mt-[10rem]'>
            <h1 className='text-center text-[3rem] text-[red]'>404</h1>
            <h2 className='text-center text-[2rem]'>REVIEW: 
                <span className='text-[red]'>{reviewId}</span> NOT FOUND for product: 
                <span className='text-[green]'>{productId}!</span></h2>

        </div>
    )
}

export default notFound
