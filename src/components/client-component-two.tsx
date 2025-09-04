"use client"

import React, { useState } from 'react'

const ClientComponentTwo = () => {

    const [name, setName] = useState("superman")
    return (
        <div>
            <h1>{name}</h1>
            <p>client component two</p>
        </div>
    )
}

export default ClientComponentTwo
