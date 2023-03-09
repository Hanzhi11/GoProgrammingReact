import Album from './Album'
import Home from './Home'
import Navbar from './Navbar'
import Registration from './Registration'
import Persons from './Persons'
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

function App() {
    const [persons, setPersons] = useState([])

    const updatePersons = async () => {
        const res = await fetch('http://localhost:8080/persons', { headers: { 'content-type': 'application/json' } })
        const data = await res.json()
        setPersons(data)    
    }

    useEffect(() => {
        updatePersons()
      }, [])



    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/album' element={<Album></Album>} />
            <Route path='/registration' element={<Registration updatePersons={updatePersons}></Registration>} />
            <Route path='/persons' element={<Persons persons={persons}></Persons>} />
            <Route path='*' element={<h1>Page not found!</h1>} />
        </Routes>
        </>
    )
}

export default App