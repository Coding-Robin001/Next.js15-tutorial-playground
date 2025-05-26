import React from 'react'

const ProductReview = async ({ params }: {
    params: Promise<{ productId: string, reviewId: string }>
}) => {

    const { productId, reviewId } = (await params);
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
