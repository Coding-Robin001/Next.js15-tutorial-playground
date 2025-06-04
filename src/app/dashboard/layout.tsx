import React from 'react'

const layout = ({
    children,
    notifications,
    revenue,
    user,
    login,
}: {
    children: React.ReactNode
    notifications: React.ReactNode
    revenue: React.ReactNode
    user: React.ReactNode
    login: React.ReactNode
}) => {
    const isUserLoggedIn = false

    return isUserLoggedIn ? (
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
    ) :
        (
            <div>
                {login}
            </div>
        )
}

export default layout
