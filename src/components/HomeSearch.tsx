'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

const HomeSearch = () => {

    const router = useRouter();

    const [ input, setInput ] = useState('');
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)

    const handleSubmit = (e: any) => {

        e.preventDefault();

        if(!input.trim()) return;

        router.push(`/search/web/?searchTerm=${input}`);

    }

    const randomSearch = async () => {
        setRandomSearchLoading(true)

        const response = await fetch('https://random-word-api.herokuapp.com/word')
            .then((res) => res.json())
            .then((data) => data[0])

        if(!response) return;

        router.push(`/search/web/?searchTerm=${response}`)

        setRandomSearchLoading(false)
    }

    return (
        <>
            <form 
                onSubmit={handleSubmit}
                className='
                    flex
                    w-full
                    mt-5
                    mx-auto
                    max-w-[90%]
                    border-gray-200
                    border
                    px-5
                    py-3
                    rounded-full
                    hover:shadow-md
                    focus-within:shadow-md
                    transition-shadow
                    sm:max-w-xl
                    lg:max-w-2xl
                '
            >
                <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>

                <input
                    type='text'
                    className='flex-grow focus:outline-none'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <BsFillMicFill className='text-lg'/>

            </form>

            <div className='
                    flex 
                    flex-col 
                    space-y-2 
                    sm:space-y-0 
                    sm:space-x-4 
                    justify-center 
                    sm:flex-row 
                    mt-8
                '
            >
                <button 
                    className='btn' 
                    onClick={handleSubmit}
                >
                    Google Search
                </button>
                <button 
                    disabled={randomSearchLoading}
                    className='btn flex items-center justify-center disabled:opacity-80'
                    onClick={randomSearch}
                >
                    { randomSearchLoading ? (
                        <Image src='spinner.svg' alt='loading...'
                            width={35} height={35}
                            className='h-6 text-center'
                        />
                    ) : (
                        "I am Feeling Lucky"
                    ) }
                </button>
            </div>
        </>
    )
}

export default HomeSearch