import React from 'react'

const LoadingPage = () => {
    return (
        <div className='flex items-center justify-center h-screen bg-gray-900'>
            <div className='animate-spin rounded-full h-[62px] w-[62px] border-t-2 border-b-2 border-blue-500'></div>
        </div>
    )
}

export default LoadingPage
