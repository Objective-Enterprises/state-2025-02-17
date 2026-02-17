import Setting from "./Setting"
import GuestList from "./GuestList"

export interface HomeProps {
  guests: string[]
  setGuests: (guests: string[]) => void
}

export default function Home({ guests, setGuests} : HomeProps) {
  return (
    <>
      <GuestList guests={guests} />
      <Setting
        name="dorothy"
        guests={guests}
        setGuests={setGuests}
      />
      <Setting
        name="zelda"
        guests={guests}
        setGuests={setGuests}
      />
      <Setting
        name="tallulah"
        guests={guests}
        setGuests={setGuests}
      />
    </>
  )
}