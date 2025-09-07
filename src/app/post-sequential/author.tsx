import React from 'react'

type Author = {
    id: number,
    name: string,
}

const Author = async ({ userId }: { userId: number }) => {
    
     await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay to simulate loading UI!")
        }, 5000);
    })
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user: Author = await response.json()

    return (
        <div className='flex gap-4 text-[gray]'>
            <span>Written by : </span>
            <p>{user.name}</p>
        </div>
    )
}

export default Author
