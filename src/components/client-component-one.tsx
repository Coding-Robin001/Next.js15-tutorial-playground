"use client"

import React, { useState } from 'react'
import ClientComponentTwo from './client-component-two'
import { ServerComponentOne } from './server-component-one'

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState("batman")
    return (
        <div>
            <h1>{name}</h1>
            <p>client component one</p>
            {/* <ClientComponentTwo /> */}
            {/* <ServerComponentOne /> */}
            {children}
        </div>
    )
}

export default ClientComponentOne
