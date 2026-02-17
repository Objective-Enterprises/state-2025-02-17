import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import GuestList from "./GuestList";

export interface RouterProps {
  guests: string[]
  setGuests: (guests: string[]) => void
}

export default function Router ({ guests, setGuests }: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Home guests={guests} setGuests={setGuests} />} />
      <Route path="/guests" element={<GuestList guests={guests} />} />
    </Routes>
  )
}