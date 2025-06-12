import React from 'react'

const PhotoFeedLayout = (
    { children,
        modal
    }: {
        children: React.ReactNode, modal: React.ReactNode
    }) => {
    return (
        <div className="bg-[#4d2408] min-h-[100vh] p-[3rem]" >
            {children}
            {modal}
        </div>
    )
}

export default PhotoFeedLayout
