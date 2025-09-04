import React from 'react'
import Card from '@/components/card'
import Link from 'next/link'

const UserNotification = () => {

  const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count)
  }

  const random = getRandomInt(2)

  if (random == 1) {
    throw new Error("error loading review!")
  }

  return (
    <Card>
      <div className='flex flex-col gap-4 text-center items-center text-[green] text-[2rem]'>
        <span > notification </span>
        <Link className='text-[blue] ' href='/dashboard/archived'>Archived</Link>
      </div>
    </Card>
  )
}

export default UserNotification
