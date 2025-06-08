import React from 'react'
import animalImages from '../../imageDetails'
import { AnimalImage } from '../../imageDetails'
import Image from 'next/image'


const PhotoFeedModal = ({
  params: { photoId },
}: {
  params: { photoId: string }
}) => {


  const currentPhoto: AnimalImage = animalImages.find(p => p.id == photoId)!
  console.log(currentPhoto);

  return (
    <div className='modal-container'>
      <div className='modal-wrapper'>
        <div className='w-[600px] h-[400px]'
          style={{
            borderRadius: "10px",
            border: "1px solid red"
          }}>
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
    </div>
  )
}

export default PhotoFeedModal
