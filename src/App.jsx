import { useState, useEffect } from "react"
import getData from "./JS/service.js"
import Header from "./comps/Header.jsx"
import Main from "./comps/Main.jsx"
import Details from "./comps/Details.jsx"
import './App.css'

function App() {

  let [countries, setCountries] = useState([]);
  let [selectedRegion, setSelectedRegion] = useState("");
  let [filteredCountries, setFilteredCountries] = useState([]);
  let [selectedCountry, setSelectedCountry] = useState(null);
  let [searchFiltered, setSearchFiltered] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let data = await getData();
        setCountries(data);
        setFilteredCountries(data);
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    if (selectedRegion) {
      setFilteredCountries(
        countries.filter((country) => country.region === selectedRegion)
      );
    }
    else if (searchFiltered) {
      let result = countries.filter((country) =>
        country.name.toLowerCase().includes(searchFiltered.toLowerCase())
      );
      setFilteredCountries(result);
    }
    else {
      setFilteredCountries(countries);
    }
  }, [selectedRegion, countries, searchFiltered]);

  return (
    <>
      <Header
        countries={countries}
        filteredCountries={filteredCountries}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        setSelectedCountry={setSelectedCountry}
        searchFiltered={searchFiltered}
        setSearchFiltered={setSearchFiltered}
      />
      {selectedCountry
        ? <Details setSelectedCountry={setSelectedCountry} country={selectedCountry} />
        : <Main
          filteredCountries={filteredCountries}
          setSelectedCountry={setSelectedCountry}
        />
      }
    </>
  )
}

export default App
