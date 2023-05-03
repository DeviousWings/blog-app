import React from 'react';
import Image from 'next/image';


const Author = ({ author }) => {
  return (
    <div className="author-container">

      <div className='container'>

        <Image
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          className='imageContainer rounded-full'
          src={author.photo.url}
        />
      </div>
        <h3>{author.name}</h3>
        <p>{author.bio}</p>
    </div>
  )
}

export default Author