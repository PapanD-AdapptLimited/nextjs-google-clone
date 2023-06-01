import React from 'react'

interface WebSearchResultsProps {
    results: {items: any[]}
}

const WebSearchResults: React.FC<WebSearchResultsProps> = ({results}) => {



    return (
        <div>

            { results && results.items.map(result => <h1>{result.title}</h1>)}

            <hr/>

            <div>{JSON.stringify(results.items[0])}</div>
        </div>
        
    )
}

export default WebSearchResults