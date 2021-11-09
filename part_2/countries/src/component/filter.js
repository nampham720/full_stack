import React, { useState } from 'react'
import CountryDetails from './CountryDetails'

const Country = (props) => {
  const { country } = props 
  const [ show, showState ] = useState(false)

  const handleChange = () => showState(!show)

  if (show) {
    return (
      <div>
        {country.name.official}{" "}
        <button onClick={handleChange}>{show ? "Hide" : "Show"}</button>
        <CountryDetails country={country} />
      </div>
    );
  }

  return (
    <div>
      {country.name.official}{" "}
      <button onClick={handleChange}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};


const FilterForm = (props) => {
  return(
    <form>
      <div>find countries: <input value={props.value} onChange={props.onChange}/></div>
    </form>
  )
}


export {  FilterForm, Country }