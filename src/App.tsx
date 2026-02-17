import { BrowserRouter, Link } from 'react-router-dom'
import Router from './Router'
import { useState } from 'react'

export default function App () {
  const [guests, setGuests] = useState(['dorothy', 'zelda', 'tallulah'])

  return (
    <BrowserRouter>
      <h1>Party App ({guests.length} guests) </h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/guests">Guests</Link>
      </div>
      <Router guests={guests} setGuests={setGuests}/>
    </BrowserRouter>
  )
}