import React from 'react'

const layout = ({
    children,
    notifications,
    revenue,
    user,
}: {
    children: React.ReactNode
    notifications: React.ReactNode
    revenue: React.ReactNode
    user: React.ReactNode
}) => {
    return (
        <div className='p-3'>
            {children}
            <div className='flex '>
                <div className='flex flex-col'>
                    {user}
                    {revenue}
                </div>
                <div className='flex flex-1'>
                    {notifications}
                </div>
            </div>

        </div>
    )
}

export default layout
