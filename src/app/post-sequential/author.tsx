import React from 'react'

type Author = {
    id: number,
    name: string,
}

const Author = async ({ userId }: { userId: number }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user: Author = await response.json()

    return (
        <div>
            <span>Written by : </span>
            <p>{user.name}</p>
        </div>
    )
}

export default Author
