import React from "react";
import "../CSS/countries.css"

function Countries({ filteredCountries }) {
  return (
    <div className="countries">
      {filteredCountries.map((country, index) => (
        <div key={index} className="country-card">
          <div>
            <img src={country.flags?.png} alt="flag" />
          </div>
          <h3>{country.name}</h3>
          <p className="region">Region: {country.region}</p>
          <div className="pop-area">
            <p className="capital">Capital: {country.capital}</p>
            <p className="population">Population: {country.population.toLocaleString()}</p>
          </div>
          <p className="area">Area: {country.area}</p>
          <p className="currency">Currency: {country.currencies?.[0]?.code || "N/A"}</p>
        </div>
      ))}
    </div>
  );
}

export default Countries;
