

import React from 'react'
import Link from 'next/link'

const PhotoFeedLayout = (
    { children,
        modal
    }: {
        children: React.ReactNode, modal: React.ReactNode
    }) => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "PhotoFeed", href: "/photo-feed" },
    ]
    return (
        <>
            <header className="header gap-10 p-[1.1rem] bg-orange-300 text-[white] text-[1rem] text-center">
                {
                    navLinks.map((element, index) => {
                        return (
                            <Link
                                key={index}
                                className="font-bold"
                                href={element.href}
                            >
                                <li>{element.name}</li>
                            </Link>
                        )
                    })
                }
            </header>

            <div className="bg-[#4d2408] min-h-[100vh] p-[3rem] border-8 border-orange-300 p-4" >
                {children}
                {modal}
            </div>
        </>
    )
}

export default PhotoFeedLayout
