"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';

const SearchHeader = () => {
    return (
        <header className='sticky top-0 bg-white'>
            <div className='
                    flex
                    w-full
                    p-6 
                    items-center
                    justify-between
                '
            >
                <Link href={"/"}>
                    <Image 
                        alt='Google Logo'
                        width={120}
                        height={40}
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"}
                    />
                </Link>

                <div className='flex-1 text-center'>
                    <SearchBox />
                </div>

                <div className='hidden md:inline-flex space-x-2'>
                    <RiSettings3Line className="header-icon"/>
                    <TbGridDots className="header-icon" />
                </div>

                <button className='
                        bg-blue-500
                        text-white
                        px-6 py-2 ml-2
                        font-medium
                        rounded-md
                        hover:brightness-105
                        hover:shadow-md
                        transition-all
                    '
                >
                    Sing In
                </button>
            </div>

            <SearchHeaderOptions />

        </header>
    )
}

export default SearchHeader