"use client"

import React, { useState } from 'react'

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

const Users = ({ initialUsers }: { initialUsers: User[] }) => {

    const [users, setUsers] = useState(initialUsers)
    const [loading, setLoading] = useState(false)

    const reloadUsers = async () => {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data: User[] = await response.json()
        setUsers(data)
        setLoading(false)
    }


    return (
        <div >
            <button onClick={reloadUsers} className='bg-blue-500 text-white px-4 py-2 rounded mt-6'>
                {loading ? "Loading" : "Reload Users"}
            </button>

            <div className='bg-black px-[1rem]'>
                {
                    users.map((user) => (
                        <div key={user.id} className='bg-[#fff] mb-[1rem] rounded-lg py-[1rem] px-[2rem]'>
                            <div className='text-bold'>{user.name}</div>
                            <div> username: {user.username}</div>
                            <div> email: {user.email}</div>
                            <div> phone: {user.phone}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Users
