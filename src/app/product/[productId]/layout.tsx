import React from 'react'

const ProductDetailsLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='prod-layout bg-[chocolate] P-[2rem]'>
            <div className='w-[200px] bg-[#fff] text-[1.2rem] flex justify-center items-center'>
                NESTED LAYOUT
            </div>
            <div className='w-[100%]'>
                {children}
                <h2 className='text-center text-[2rem] bg-[#fff] p-[1rem]'>
                    NESTED LAYOUT
                </h2>
            </div>
        </div>
    )
}

export default ProductDetailsLayout
