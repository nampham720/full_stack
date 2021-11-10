import React from 'react'

const FilterForm = (props) => {
  return(
    <form>
      <div>filter shown with: <input value={props.value} onChange={props.onChange}/></div>
    </form>
  )
}

const PersonForm = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <div>
        name: <input value={props.name} onChange={props.nameChange}/>
      </div>
      <div>number: <input value={props.newNumber} onChange={props.numberChange}/></div>
      <div>
        <button  onClick={props.numberUpdate}>add</button>
      </div>
   </form>
  )
}

export { FilterForm, PersonForm }