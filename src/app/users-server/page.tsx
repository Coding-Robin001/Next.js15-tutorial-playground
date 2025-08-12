import React from 'react'
import { setTimeout } from 'timers'

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

const UsersServer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: User[] = await response.json()

    console.log(users);

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
        </div>)
}

export default UsersServer
