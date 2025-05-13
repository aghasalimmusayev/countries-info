import Nav from "./Nav.jsx"

function Header({ countries, setSelectedRegion, selectedRegion, setSelectedCountry }) {
    return (
        <header>
            <Nav
                countries={countries}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setSelectedCountry={setSelectedCountry}
            />
        </header>
    )
}

export default Header
