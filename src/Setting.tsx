interface SettingProps {
  guests: string[]
  name: string
  setGuests: (guests: string[]) => void
}

export default function Setting({ guests, name, setGuests }: SettingProps) {
  const invited = guests.includes(name)
  return (
    <button
      onClick={() => {
        if (invited) {
          const newGuests = guests.filter(guest => guest !== name)
          setGuests(newGuests)
        } else {
          const newGuests = [...guests, name]
          setGuests(newGuests)
        }
      }}
    >
      {name}: {invited ? 'invited' : 'uninvited'}
    </button>
  )
}