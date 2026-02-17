import { createContext, useContext } from "react";

export interface GlobalContextValue {
  guests: string[]
  setGuests: (guests: string[]) => void
}

export const GlobalContext = createContext<GlobalContextValue | undefined>(undefined)

export function useGlobalContext () {
  const value = useContext(GlobalContext)
  if (!value) {
    throw new Error('Not in context')
  }
  return value
}