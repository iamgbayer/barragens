import React, { useState } from 'react'

const defaultLocation = {
  lat: -13.5594465,
  lng: -46.7659922
}

export const LocationContext = React.createContext()

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(defaultLocation)

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  )
}
