"use client";

import { useState } from "react";

// https://www.youtube.com/@GouravSharma

const CountryLookUp = () => {
    
    const [country, setCountry] = useState("India")

    return (
        <div>{country}</div>
    )
}

export default CountryLookUp