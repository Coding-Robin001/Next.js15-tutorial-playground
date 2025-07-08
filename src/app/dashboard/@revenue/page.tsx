import Card from '@/components/card'
import React from 'react'

const RevenueMetrics = async () => {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay to simulate loading UI!")
        }, 20000);
    })

    return (
        <Card>
            <div >
                <h2 className='text-[1.7rem] text-[#a04402]'>Revenue Metrics Data </h2>
                <p className='text-[1.2rem] my-[1rem] text-[#a04402]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum blanditiis, doloribus, architecto delectu
                </p>
                <span className='text-[#a04402] text-center'>(data fetching complete)</span>
            </div>
        </Card>)
}

export default RevenueMetrics
