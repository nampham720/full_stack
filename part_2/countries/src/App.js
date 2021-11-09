import React, { useState, useEffect } from 'react'
import { FilterForm, Country } from './component/filter'
import CountryDetails  from './component/CountryDetails'
import axios from 'axios'


function App() {

  const [ char, filteredChar ] = useState('')
  const [ countries, allCountries] = useState([]) 
  const [ flags, allFlags] = useState([])
 

  const handleSearchChar = (event) => {
    event.preventDefault()
    filteredChar(event.target.value)
  }

  const countriesToShow = countries.filter(x => x.name.official.toLowerCase().includes(char.toLowerCase())) // {} {} {}
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        allCountries(response.data)
      })
  }, [])



  
  if (countriesToShow.length === 1) {
    return (
      <div>
        <FilterForm onChange={handleSearchChar} value={char}/>
        <CountryDetails country={countriesToShow[0]} />
      </div>
    );
  }

  return (
    <div>
      <FilterForm onChange={handleSearchChar} value={char}/>
      <div>
        {countriesToShow.length > 10
          ? "Too many matches, specify another filter"
          : countriesToShow.map(country =>
              <div key={country.name.official}>
                <Country country={country} />
              </div>
            )}
      </div>
    </div>
  );
}

export default App;
