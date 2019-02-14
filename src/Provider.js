import React from 'react'
import { LocationProvider } from './contexts/LocationContext'
import { DamsProvider } from './contexts/DamsContext'

export const Provider = props => (
  <LocationProvider>
    <DamsProvider>{props.children}</DamsProvider>
  </LocationProvider>
)
