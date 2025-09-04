import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='card-el'>
            {children}
        </div>
    )
}

export default Card
