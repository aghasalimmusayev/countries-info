import "../CSS/details.css"

function Details({ country, setSelectedCountry }) {

    return (
        <div className="co_details">
            <button onClick={() => setSelectedCountry(null)}>← Back</button>
            <div className="every_details">
                <div className="co_details_img">
                    <img src={country.flags?.png} alt="flag" />
                </div>
                <div className="co_details_info">
                    <h2 className="co_details_name">{country.name}</h2>
                    <p className="co_details_region"><strong>Region:</strong> {country.region}</p>
                    <p className="co_details_capital"><strong>Capital:</strong> {country.capital}</p>
                    <p className="co_details_population"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                    <p className="co_details_area"><strong>Area:</strong> {country.area}</p>
                    <p className="co_details_currency"><strong>Currency:</strong> {country.currencies?.[0]?.code || "N/A"}</p>
                    <p className="co_details_lang"><strong>Languages:</strong> {country.languages?.map(l => l.name).join(", ")}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;
