import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AllPosts from './AllPosts';



const Header = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block  py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-white bg-slate-500 p-2 rounded-lg'>
                        Space Jounral
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                <Link href='/AllPosts'>
                    All Blogs
                </Link>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md: float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header