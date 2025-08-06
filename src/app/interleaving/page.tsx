import React from 'react'
import { ServerComponentOne } from '@/components/server-component-one'
import ClientComponentOne from '@/components/client-component-one'

const InterleavingPage = () => {
    return (
        <div className='h-[77vh]'>
            <h1>Interleaving Page</h1>
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
            {/* <ServerComponentOne /> */}
        </div>
    )
}

export default InterleavingPage
