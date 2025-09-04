import React from 'react'

const Documentation = async ({ params }: {
    params: { slug: string[] }
}) => {

    const { slug } = ( params)

    if (slug?.length == 2) {
        return (
            <div className='mt-[10rem]'>
                <h2 className='text-center text-[2rem]'>CATCH ALL SEGMENTS</h2>

                <h1 className='text-[1.5rem] text-center mt-[1rem]'>
                    Viewing Docs for feature:
                    <span className='text-[purple] text-bold text-[1.7rem]'> {slug[0]} </span> and
                    concept:
                    <span className='text-[red] text-bold text-[1.7rem]'> {slug[1]} </span>
                </h1>
            </div>

        )
    } else if (slug?.length == 1) {
        return (
            <h1>
                <span className='text-[purple] text-bold text-[1.7rem]'> {slug[0]} </span>
            </h1>
        )
    }

    return (
        <div className='flex justify-center align-center mt-[16rem]'>
            <h2 className='text-[3rem]'>Welcome to Docs home Page</h2>
        </div>
    )



}

export default Documentation
