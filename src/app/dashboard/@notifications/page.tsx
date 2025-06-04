import React from 'react'
import Card from '@/components/card'
import Link from 'next/link'

const UserNotification = () => {
  return (
    <Card >
      <div className='flex flex-col gap-4 text-center items-center'>
        <span > notification </span>
        <Link className='text-[blue] ' href='/dashboard/archived'>Archived</Link>
      </div>
    </Card>
  )
}

export default UserNotification
