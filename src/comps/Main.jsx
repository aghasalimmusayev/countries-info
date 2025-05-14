import Countries from "./Countries.jsx"
import "../CSS/main.css"

function Main({ filteredCountries, setSelectedCountry, searchFiltered }) {
    return (
        <main>
            <div className="container">
                <Countries
                    filteredCountries={filteredCountries}
                    setSelectedCountry={setSelectedCountry}
                />
            </div>
        </main>
    )
}

export default Main
