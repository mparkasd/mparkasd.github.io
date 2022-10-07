import { createContext, useContext, useState, useMemo } from 'react'

// @ts-ignore:
const SectionContext = createContext()

const initialActiveSection = 'hello'

export function useActiveSection() {
  return useContext(SectionContext)
}

export default function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState(
    initialActiveSection
  )
  const sectionProvider = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection]
  )

  return (
    <SectionContext.Provider value={sectionProvider}>
      {children}
    </SectionContext.Provider>
  )
}