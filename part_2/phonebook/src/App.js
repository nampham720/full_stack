import React, { useState, useEffect } from 'react'
import { FilterForm, PersonForm  } from './components/components'
import personService from './services/persons'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas'}]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ char, filteredChar ] = useState('')


  useEffect(() => {
      personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
   

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find(element => element.name === newName)
  
    if (!person) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }

      personService
      .create(personObject)
      .then( response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
    } else {
      
      if (window.confirm(`${newName} is already added to phonebook. Do you want to change number?`))
      {
        const personObject = {
          ...person,
          number: newNumber,
        }
        personService.update(personObject, personObject.id).then(response => setPersons(persons.map(ps => ps.id !== personObject.id? ps : response.data)))
      }
    }
  }

  const filterChar = (event) => {
    event.preventDefault()
    filteredChar(event.target.value)
  }

  const handleDelete = (id) => {
    const deletedPerson = persons.find(x => x.id === id)
    if (deletedPerson.id && window.confirm(`deleted ${deletedPerson.name}?`))
    {
      personService.remove(id).then(response => setPersons(persons.filter(x => x.id !== id)))
    }
  }

  const personsToShow = persons.filter(x => x.name.toLowerCase().includes([char]))

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm value={char} onChange={filterChar}/>
      <br></br>
      <h3>Add a new person</h3>
      <PersonForm onSubmit={addPerson} name={newName} nameChange={handleNameChange} number={newNumber} numberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      {personsToShow.map(x => <div key={x.id}>{x.name} {x.number} <button onClick={() => handleDelete(x.id)}>Delete</button></div>)}
    </div>
  )
}

export default App