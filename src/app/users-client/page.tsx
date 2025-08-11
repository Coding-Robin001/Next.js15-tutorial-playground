"use client"

import React, { useEffect, useState } from 'react'

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

const UsersClient = () => {

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) throw new Error("failed to fetch users!")
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError("an unknown error occured!")
                }
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    if (loading) return <div>loading...</div>

    if (error) return <div>{error}</div>

    return (
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
    )
}

export default UsersClient
