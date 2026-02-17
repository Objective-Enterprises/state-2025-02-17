import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { GlobalContext } from './globalContext'
import GuestList from './GuestList'
import Home from './Home'

export default function App() {
  const [guests, setGuests] = useState(['dorothy', 'zelda', 'tallulah'])

  const value = { guests, setGuests }

  return (
    <BrowserRouter>
      <GlobalContext value={value}>
        <h1>Party App ({guests.length} guests) </h1>
        <div>
          <Link to="/">Home</Link> | <Link to="/guests">Guests</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home guests={guests} setGuests={setGuests} />} />
          <Route path="/guests" element={<GuestList guests={guests} />} />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  )
}