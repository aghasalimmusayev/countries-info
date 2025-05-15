import React, { useEffect, useState } from 'react'
import "../CSS/randCountry.css"

function RandCountry({ filteredCountries, setSelectedCountry }) {

    let [randCountry, setRandCountry] = useState(null);
    let [isLoading, setIsLoading] = useState(true); // ilk once melumatlar hele yuklenmeyib
    const randNum = Math.floor(Math.random() * filteredCountries.length);

    useEffect(() => {
        if (Array.isArray(filteredCountries) && filteredCountries.length > 0) {
            setIsLoading(false); // Məlumatlar yüklənibse, isLoading-i false et 
            let selected = filteredCountries[randNum];
            setRandCountry(selected);
        } else {
            setIsLoading(true); // Məlumatlar hələ yüklənməyibse, isLoading true olsun
        }
    }, [filteredCountries]);
    // Əgər məlumatlar hələ yüklənir və ya filteredCountries boşdursa
    if (isLoading || !randCountry) {
        return (
            <div className="rand_country">
                <div className="rand_country_card loading">
                    <h3>Ölkələr yüklənir...</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="rand_country">
            <div key={randNum} className="rand_country_card" onClick={() => setSelectedCountry(randCountry)}>
                <div className='rand_country_img'>
                    {randCountry.flags && randCountry.flags.png
                        ? (<img src={randCountry.flags.png} alt={`${randCountry.name} flag`} />)
                        : (<div className="no-flag">Bayraq mövcud deyil</div>)}
                </div>
                <div className="rand_country_info">
                    <h3 className='rand_country_name'>{randCountry.name}</h3>
                    <p className="rand_country_region"><span>Region:</span> {randCountry.region}</p>
                    <p className="rand_country_capital"><span>Capital:</span> {randCountry.capital}</p>
                    <div className="rand_country_pop_area">
                        <p className="rand_country_area"><span>Area:</span> {randCountry.area}</p>
                        <p className="rand_country_population"><span>Population:</span> {randCountry.population}</p>
                    </div>
                    <p className="rand_country_currency"><span>Currency:</span> {randCountry.currencies?.[0]?.code || "N/A"}</p>
                </div>
            </div>
        </div>
    )
}

export default RandCountry
