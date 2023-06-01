"use client";

import { AiOutlineSearch, AiOutlineCamera} from 'react-icons/ai';

const SearchHeaderOptions = () => {
    return (
        <div className='flex'>
            <div>
                <AiOutlineSearch/>
                <p> All </p>
            </div>
            <div>
                <AiOutlineCamera />
                <p>Images</p>
            </div>
        </div>
    )
}

export default SearchHeaderOptions