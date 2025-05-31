import React from 'react'
import { notFound } from 'next/navigation';

const ProductReview = async ({ params }: {
    params: Promise<{ productId: string, reviewId: string }>
}) => {

    const { productId, reviewId } = (await params);

    if (parseInt(reviewId) > 1000) {
        notFound()
    }

    const getRandomInt = (count: number) => {
        return Math.floor(Math.random() * count)
    }

    const random = getRandomInt(2)

    if (random == 1) {
        throw new Error("error loading review!")
    }

    return (
        <div className='main flex h-100 justify-center align-center'>
            <h2 className='text-[1.5rem]'>Product review page, another dynamic subroute nested within the product Details subroute</h2>
            <p className='text-[1.8rem]'>
                review: <span className='text-[purple]'>{reviewId}</span> for
                product:<span className='text-[orange]'>{productId}</span>
            </p>
        </div>
    )
}

export default ProductReview




