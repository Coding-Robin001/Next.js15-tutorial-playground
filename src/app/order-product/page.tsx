"use client"

import React from 'react'
// import { useRouter } from 'next/router'
import { redirect, useRouter } from 'next/navigation'

const PlaceOrder = () => {
    // const router = useRouter()

    const placeOrderHandler = () => {
        alert("order placed!")
        // router.push("/")
        redirect("/")
    }

    return (
        <div className='h-[60vh]'>
            <h2 className='text-[2rem] text-center mt-[3rem] mb-[0.5rem]'>Order product</h2>
            <div className='flex justify-center'>
                <button
                    className='text-[2rem] text-center my-[3rem]'
                    onClick={placeOrderHandler}
                >
                    Place Order
                </button>
            </div>

        </div>
    )
}

export default PlaceOrder
