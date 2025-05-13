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
    else {
      setFilteredCountries(countries);
    }
  }, [selectedRegion, countries]);

  return (
    <>
      <Header
        countries={countries}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        setSelectedCountry={setSelectedCountry}
      />
      {selectedCountry
        ? <Details setSelectedCountry={setSelectedCountry} country={selectedCountry} />
        : <Main filteredCountries={filteredCountries} setSelectedCountry={setSelectedCountry} />
      }
    </>
  )
}

export default App
