import { createContext } from "react";

export interface GlobalContextValue {
  guests: string[]
  setGuests: (guests: string[]) => void
}

export const GlobalContext = createContext<GlobalContextValue | undefined>(undefined)