import React from "react";
import "../CSS/countries.css"

function Countries({ filteredCountries, setSelectedCountry }) {
  return (
    <div className="countries">
      {filteredCountries.map((country, index) => (
        <div key={index} className="country-card" onClick={() => setSelectedCountry(country)}>
          <div>
            <img src={country.flags?.png} alt="flag" />
          </div>
          <h3>{country.name}</h3>
          <p className="region">Region: {country.region}</p>
          <p className="capital">Capital: {country.capital}</p>
          <div className="pop-area">
            <p className="area">Area: {country.area}</p>
            <p className="population">Population: {country.population}</p>
          </div>
          <p className="currency">Currency: {country.currencies?.[0]?.code || "N/A"}</p>
        </div>
      ))}
    </div>
  );
}

export default Countries;
