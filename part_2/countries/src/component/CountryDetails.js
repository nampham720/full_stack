import React, { useState, useEffect } from "react";
import axios from "axios";


const CountryDetails = (props) => {
    const { country } = props 

    const [weather, setWeather] = useState(undefined);

    useEffect( () => {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}c&query=${country.capital}`)
        .then(response => 
          setWeather(response.data))
    }, [country])

  

    return(
      <div>
        <h2>{country.name.official}</h2>
        <div>Population {country.population}</div>
        <div>Capital {country.capital}</div>
        <h3>Spoken languages</h3>
        <ul>{Object.values(country.languages).map(x => <li key={x}>{x}</li>)}</ul>
        <img src={Object.values(country.flags)[0]} alt={country.name} width="20%"/>
        {weather
        ? <div>
            <h3>Weather in {country.name.official}</h3>
            <p><b>temperature</b>: {weather.current.temperature}</p>
            <img src={Object.values(weather.current.weather_icons)[0]} alt={country.name.official} width="20%"/>
            <p><b>wind</b>: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
        : null}
      </div>
    )
  }

  export default CountryDetails;