import Countries from "./Countries.jsx"
import "../CSS/main.css"

function Main({ filteredCountries}) {
    return (
        <main>
            <div className="container">
                <Countries filteredCountries={filteredCountries} />
            </div>
        </main>
    )
}

export default Main
