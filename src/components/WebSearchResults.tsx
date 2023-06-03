import HTMLReactParser from 'html-react-parser'
import Link from 'next/link'
import React from 'react'
import PaginationButtons from './PaginationButtons'

interface WebSearchResultsProps {
    results: {
        searchInformation: any[], 
        items: any[]
    }
}

const WebSearchResults: React.FC<WebSearchResultsProps> = ({results}) => {

    return (
        <div className='
                w-full 
                mx-auto 
                px-3 pb-40
                sm:pb-24 sm:pl-[5%]
                md:pl-[14%]
                lg:pl-52
            '
        >

            <p 
                className="
                    text-gray-600 
                    text-sm 
                    mb-5 mt-3
                "
            >
                About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
            
            </p>

            { results && results.items?.map(result => (
                <div className='mb-8 max-w-xl' key={result.link}>
                    <div className='group flex flex-col'>
                        <Link className="text-sm truncate text-green-700" href={result.link} target='_blank'>
                            {result.formattedUrl}
                        </Link>
                        <Link className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800" href={result.link} target='_blank'>
                            {result.title}
                        </Link>
                    </div>
                    <p  className="text-gray-600">{HTMLReactParser(result.htmlSnippet)}</p>
                </div>
            ))}

            <div className='ml-16'>
                <PaginationButtons />
            </div>
        </div>
        
    )
}

export default WebSearchResults