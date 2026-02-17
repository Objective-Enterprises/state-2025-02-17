import { useGlobalContext } from "./globalContext"


export default function GuestList() {
  const value = useGlobalContext()
  return (
    <ul>
      {value.guests.map((guest) => {
        return <li key={guest}>{guest}</li>
      })}
    </ul>
  )
}