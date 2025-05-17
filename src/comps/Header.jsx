import Nav from "./Nav.jsx"
import Search from "./Search.jsx"
import "../CSS/header.css"
import RandCountry from "./RandCountry.jsx"
import { useState } from "react"

function Header({ countries, filteredCountries, setSelectedRegion, selectedRegion, setSelectedCountry, searchFiltered, setSearchFiltered }) {

    let [searchShow, setSearchShow] = useState(false)

    function handleSearchInp() {
        setSearchShow(!searchShow)
    }

    return (
        <header>
            <Nav
                countries={countries}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setSelectedCountry={setSelectedCountry}
            />
            <div className="container">
                <div className="header_content">
                    <h1 className="heading">Welcome to CountryApp Website</h1>
                    <p className="heading_text">You can find data of any country in this website.</p>
                    <div className="search_btns">
                        <button className='look'>have a look</button>
                        <button className='search' onClick={handleSearchInp}>search</button>
                    </div>
                    {searchShow == true && <Search
                        searchFiltered={searchFiltered}
                        setSearchFiltered={setSearchFiltered}
                    />}
                    {searchShow == false && <RandCountry filteredCountries={filteredCountries} setSelectedCountry={setSelectedCountry} />}
                </div>
            </div>
        </header>
    )
}

export default Header
