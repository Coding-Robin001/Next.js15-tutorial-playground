import React from 'react'
// import { Metadata } from 'next';

type Props = {
    params: { productId: string }
}

// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

//     const id = (await params).productId
//     return {
//         title: `Product ${id}`
//     }

// }



const ProductDetails = async ({ params, }: Props) => {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay to simulate loading UI!")
        }, 5000);
    })
    // Optional safeguard
    const prodId = params?.productId;
    if (!prodId) throw new Error("Missing productId param");



    return (
        <div className='main flex h-100 justify-center align-center'>
            <h2 className='text-[1.5rem]'>Product details page, a dynamic subroute of product page</h2>
            <p className='text-[1.8rem]'>details about product: <span className='text-[purple]'>{prodId ? prodId : "loading"}</span></p>
        </div>
    )
}

export default ProductDetails
