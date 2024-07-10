import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className='flex'>
      <div>
        <h3>{new Date().toUTCString().slice(0,16)}</h3>
        <h1>Flavoro Foods</h1>
      </div>
      <div>
        <input type="search" name='search' placeholder='Search Here Food' />
      </div>
    </nav>
    </>
  )
}
