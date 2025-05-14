import Nav from "./Nav.jsx"
import Search from "./Search.jsx"
import "../CSS/header.css"

function Header({ countries, setSelectedRegion, selectedRegion, setSelectedCountry, searchFiltered, setSearchFiltered }) {
    return (
        <header>
            <Nav
                countries={countries}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setSelectedCountry={setSelectedCountry}
            />
            <div className="header_content">
                <h1 className="heading">Welcome to CountryApp Website</h1>
                <p className="heading_text">You can find data of any country in this website.</p>
                <Search
                    searchFiltered={searchFiltered}
                    setSearchFiltered={setSearchFiltered}
                />
            </div>
        </header>
    )
}

export default Header
