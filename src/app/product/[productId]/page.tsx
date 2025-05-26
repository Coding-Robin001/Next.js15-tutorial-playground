import React from 'react'

const ProductDetails = async ({ params, }: {
    params: Promise<{ productId: string }>
}) => {

    const prodId = (await params).productId;

    return (
        <div className='main flex h-100 justify-center align-center'>
            <h2 className='text-[1.5rem]'>Product details page, a dynamic subroute of product page</h2>
            <p className='text-[1.8rem]'>details about product: <span className='text-[purple]'>{prodId}</span></p>
        </div>
    )
}

export default ProductDetails
