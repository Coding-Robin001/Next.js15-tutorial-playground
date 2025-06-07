import React from 'react'
import AnimalImages from './imageDetails'
import Link from 'next/link'
import Image from 'next/image'

const PhotoFeed = () => {
  return (
    <div className='photoFeed-grid '>
      <h2 className='text-center text-[#fff] text-[2.5rem] mb-[2rem]'>Animal PhotoFeed</h2>
      <div className='flex items-center gap-4 flex-wrap items-center'>
        {
          AnimalImages.map(({ id, src, name }) => {
            return (
              <div
                key={id}
                className='w-[265px]'
                style={{
                  border: "5px solid chocolate",
                  borderRadius: "10px"
                }}
              >
                <Link href={`/photofeed/${id}`}>
                  <Image
                    src={src}
                    alt={name}
                    className='w-full object-cover aspect-square'
                  />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PhotoFeed
