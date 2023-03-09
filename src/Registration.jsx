import './Registration.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Registration({updatePersons}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('Female')


  const nav = useNavigate()

  async function submit(evt) {
    evt.preventDefault()

    if (firstName.length < 1) {
      return window.alert('Please provide your first name!');
    }

    if (lastName.length < 1) {
      return window.alert('Please provide your last name!');
    }

    const info = {
      firstName: firstName,
      lastName: lastName,
      gender: gender
    }

    const res = await fetch('http://localhost:8080/persons', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info)
    })

    const data = await res.json()

    if (data) {
      window.alert('Added successfully')
    }

    setFirstName('')
    setLastName('')
    setGender('Female')
    updatePersons()
    nav({ pathname: '/persons' })
  }
  return (
    <>
      <h1 className="title">REGISTRATION</h1>
      <form className="form" onSubmit={(evt) => submit(evt)}>
        <input className="input" placeholder="First Name" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
        <input className="input" placeholder="Last Name" value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
        <div className="selection">
          <label htmlFor="selection">Please select a gender: </label>
          <select id="options" className="field" value={gender} onChange={(evt) => setGender(evt.target.value)}>
            <option>Female</option>
            <option>Male</option>
          </select>
        </div>
        <button className="button" type="submit">Register</button>
      </form>
    </>
  )
}

export default Registration