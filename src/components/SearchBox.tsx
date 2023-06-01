"use client";

import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBox = () => {
    return (
        <form className='
                flex
            '
        >
            <input type="text"/>
            <RxCross2/>
            <BsFillMicFill/>
            <AiOutlineSearch />
        </form>
    )
}

export default SearchBox