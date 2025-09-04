import React from 'react'

const notFound = () => {
    return (
        <div className='mt-[10rem]'>
            <h1 className='text-center text-[3rem] text-[red]'>404</h1>
            <h2 className='text-center text-[2rem] text-[brown]'>PAGE NOT FOUND!</h2>
            <p className='text-[purple] text-bold text-[2rem] text-center'>
                could not found requested resources
            </p>
        </div>
    )
}

export default notFound
