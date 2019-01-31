import React from 'react'
import { LocationProvider } from './providers/LocationProvider'
import { DamsProvider } from './providers/DamsProvider'

export const Provider = props => (
  <LocationProvider>
    <DamsProvider>{props.children}</DamsProvider>
  </LocationProvider>
)
