interface GuestListProps {
  guests: string[]
}

export default function GuestList({ guests }: GuestListProps) {
  return (
    <ul>
      {guests.map((guest) => {
        return <li key={guest}>{guest}</li>
      })}
    </ul>
  )
}