import React from 'react'
import animalImages from '../imageDetails'
import Image from 'next/image'
import { AnimalImage } from '../imageDetails'

const SinglePhotoPage = async ({ params }: { params: Promise<{ photoId: string }> }) => {

  const { photoId } = await params

  const currentPhoto: AnimalImage = animalImages.find(p => p.id == photoId)!
  console.log(currentPhoto);


  return (
    <div className='w-full flex justify-center items-center gap-4 h-[500px]'>

      <div className='w-[600px] h-[400px]'>
        <Image
          className='object-contain w-[600px] h-[400px]'
          src={currentPhoto?.src}
          alt={currentPhoto?.name}
        />
      </div>
      <div className='w-[600px] '>
        <h2 className='text-[#fff] text-[1.9rem]'>{currentPhoto?.name.toUpperCase()}</h2>
        <h3 className='text-[#fff] my-[1rem] '>PHOTO BY: <span className=' text-[chocolate]'>{currentPhoto?.photographer}</span></h3>
        <p className='text-[#fff] '><span className='text-[chocolate]'>FUNFACT:</span> {currentPhoto?.randomFact}</p>
      </div>

    </div>
  )
}

export default SinglePhotoPage
