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
        <div className=' h-[320px] flex items-center justify-center'
          style={{
            borderRadius: "3px",
            border:"1px solid #353232"
          }}>
         <Image
            className="object-contain w-[450px] h-[300px]"
            src={currentPhoto.src}
            alt={`Photo of ${currentPhoto.name}`}
            width={450}
            height={300}
          />
        </div>
        <div className='w-[500px] '>
          <h2 className='text-[#fff] text-[1.6rem] font-bold text-orange-300'>{currentPhoto?.name.toUpperCase()}</h2>
          <p className='text-[#fff] '><span className='text-[chocolate]'>FUNFACT:</span> {currentPhoto?.randomFact}</p>
        </div>
      </div>
    </div>
  )
}

export default PhotoFeedModal
