import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';



const PostCard = ({ post }) => {
  // console.log(post);
  return (
    // bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8
    <div className='card-container'>

      <div className="fetured-image-box">
      {/* <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
       */}
          <Image
            unoptimized
            alt={post.title}
            className="fea-image"
            layout="fill"
            src={post.featuredImage.url}
          />
      </div>
      <h1 className='title'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>

      </h1>
      <div className='auther-box'>
          <div className='a-cont'>
            <img 
              alt={post.author.name}
              height="30px"
              width="30px"
              src={post.author.photo.url}
            />
            <p>
              {post.author.name}
            </p>
          </div>
          <div className='a-date'>
            <svg xmlns="http://www.w3.org/2000/svg" className="a-cal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
      </div>
      <p className='post-exerpt'>{post.exerpt}</p>
      <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="button">Continue Reading</span>
      </Link>
      </div>
    </div>
  )
}

export default PostCard