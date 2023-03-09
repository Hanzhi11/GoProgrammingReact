import './Album.css'
import React, { useState, useEffect } from 'react'

function Album() {
  const [contents, setContents] = useState([])
  console.log(contents)

  useEffect(() => {
    async function fetchContents() {
      const res = await fetch('http://localhost:8080/contents', { headers: { 'content-type': 'application/json' } })
      const data = await res.json()
      setContents(data)
    }
    fetchContents()
  }, [])

  console.log(1)
  console.log(contents)
  return (
    <div className="album">
      <h1 className="title">ALBUM</h1>
      <main className="images">
        {contents.map(content => (
          <div className='card' key={content.id}>
            <img src={`src/assets/${content.id}.jpg`} className="image" alt={`Image ${content.id}`} />
            <h2>{content.content}</h2>
          </div>
        )
        )}
      </main >
    </div >
  )
}

export default Album
