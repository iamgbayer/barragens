import React from 'react'
import { LocationProvider } from './providers/LocationProvider'
import { BarrageProvider } from './providers/BarrageProvider'

export const Provider = props => (
  <LocationProvider>
    <BarrageProvider>{props.children}</BarrageProvider>
  </LocationProvider>
)
