import React from 'react';
import Image from 'next/image';


const Author = ({ author }) => {
  return (
    // <div className='authorBox rounded-lg'>
    <div className="authorBox text-center mt-20 mb-8 p-12 relative rounded-lg">

      {/* <div className='container'> */}
      <div className='container'>

        <Image
          alt={author.name}
          unoptimized
          loader={grpahCMSImageLoader}
          height={100}
          width={100}
          className='imageContainer rounded-full'
          src={author.photo.url}
        />
      </div>
        <h3 className=' mt-4 my-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-black text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author