import Setting from "./Setting"
import GuestList from "./GuestList"

export default function Home() {
  return (
    <>
      <GuestList />
      <Setting name="dorothy" />
      <Setting name="zelda" />
      <Setting name="tallulah" />
    </>
  )
}