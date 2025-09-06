import React from 'react'
import Users from './users'

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

const UsersServer = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: User[] = await response.json()

    console.log(users);

    return <Users initialUsers={users}/>

}

export default UsersServer
