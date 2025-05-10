import React, { useEffect, useState } from 'react'
import ToggleDark from "../comps/ToggleDark.jsx"
import MenuToggle from "../comps/MenuToggle.jsx"
import "../CSS/nav.css"

function Nav({ countries, setSelectedRegion, selectedRegion }) {

    let [regions, setRegions] = useState([]);

    useEffect(() => {
        let allRegions = [... new Set(countries.map(country => country.region))];
        setRegions(allRegions);
    }, [countries])

    let showAllCountries = function () {
        setSelectedRegion("");
        window.location.hash = "";
    }

    return (
        <nav>
            <div className="navlinks">
                <i className="fa-solid fa-earth-americas" onClick={showAllCountries}></i>
                <ul className="reg_links">
                    {regions.map((reg, index) => (
                        <li key={index}>
                            <a href={`#${reg}`}
                                onClick={() => setSelectedRegion(reg)}
                                className={selectedRegion === reg ? "active" : ""}>
                                {reg}
                            </a>
                        </li>
                    ))
                    }
                </ul>
                <ToggleDark />
                <div className="toggle_box">
                    <MenuToggle />
                </div>
            </div>
        </nav>
    )
}

export default Nav
