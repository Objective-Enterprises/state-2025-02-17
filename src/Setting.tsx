import { useGlobalContext } from "./globalContext"

interface SettingProps {
  name: string
}

export default function Setting({ name }: SettingProps) {
  const value = useGlobalContext()
  const invited = value.guests.includes(name)
  return (
    <button
      onClick={() => {
        if (invited) {
          const newGuests = value.guests.filter(guest => guest !== name)
          value.setGuests(newGuests)
        } else {
          const newGuests = [...value.guests, name]
          value.setGuests(newGuests)
        }
      }}
    >
      {name}: {invited ? 'invited' : 'uninvited'}
    </button>
  )
}