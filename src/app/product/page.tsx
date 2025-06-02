import React from 'react'
import Link from 'next/link'

const ProductPage = () => {
    const getRandomInt = (count: number) => {
        return Math.floor(Math.random() * count)
    }

    const random = getRandomInt(2)

    if (random == 1) {
        throw new Error("error loading productPage!")
    }
    return (
        <div className='main2 flex h-50 justify-center align-center'>
            <h2 className='text-[2rem]'>Product page</h2>
            <ul>
                <Link href="/product/1"><li className='text-[1.3rem]'>Product 1</li></Link>
                <Link href="/product/2"><li className='text-[1.3rem]'>Product 2</li></Link>
                <Link href="/product/3"><li className='text-[1.3rem]'>Product 3</li></Link>
            </ul>
            <Link href="/"><p>HOME</p></Link>
        </div>
    )
}

export default ProductPage
