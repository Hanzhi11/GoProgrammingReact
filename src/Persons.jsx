import './Persons.css'

function Persons({ persons }) {
    return (
        <>
            <h1 className="title">PERSONS</h1>
            {persons.length > 0 ?
                <ul className='list'>
                    {persons.map((p, index) => (
                        <li className='name' key={index}>{p.firstName} {p.lastName}</li>
                    ))
                    }
                </ul>
                :
                <h2 className='noRecord'>No person registered yet!</h2>
            }
        </>
    )
}

export default Persons