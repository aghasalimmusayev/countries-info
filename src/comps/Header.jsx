import Nav from "./Nav.jsx"

function Header({ countries, setSelectedRegion, selectedRegion }) {
    return (
        <header>
            <Nav
                countries={countries}
                setSelectedRegion={setSelectedRegion}
                selectedRegion={selectedRegion}
            />
        </header>
    )
}

export default Header
