import React from 'react'

const PhotoFeedLayout = (
    { children,
        modal
    }: {
        children: React.ReactNode, modal: React.ReactNode
    }) => {
    return (
        <div className="bg-[#4d2408] min-h-[100vh] p-[3rem]" >
            {/* <header className='p-[1.5rem] bg-[chocolate] text-center mb-[1.5rem] text-[#fff] text-[2.5rem]'>
                Animal Photofeed layout
            </header> */}
            {children}
            {modal}
        </div>
    )
}

export default PhotoFeedLayout
