import React from 'react'
import { Map as Mapeable, TileLayer } from 'react-leaflet'

export const Map = props => {
  return (
    <Mapeable zoom={17} style={{ height: 'calc(100vh - 50px)' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {props.children}
    </Mapeable>
  )
}
