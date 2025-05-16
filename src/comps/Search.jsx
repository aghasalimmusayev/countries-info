import React, { useEffect, useState } from 'react'
import { FcSearch } from "react-icons/fc";

function Search({searchFiltered, setSearchFiltered}) {

    let [searchText, setSearchText] = useState("")

    useEffect(() => {
        setSearchFiltered(searchText);
    }, [searchText])

    return (
        <div className='container'>
            <div className="search_content">
                <div className="search_inp">
                    <input
                        type="text" placeholder='Search country'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} />
                    <div className="search_icon">
                        <FcSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
