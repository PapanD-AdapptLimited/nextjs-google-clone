"use client";

import { AiOutlineSearch, AiOutlineCamera} from 'react-icons/ai';

const SearchHeaderOptions = () => {
    return (
        <div className='
                flex border-b space-x-3
            '
        >
            <div className='flex'>
                <AiOutlineSearch/>
                <p> All </p>
            </div>
            <div className='flex'>
                <AiOutlineCamera />
                <p>Images</p>
            </div>
        </div>
    )
}

export default SearchHeaderOptions