import React from 'react'
import styled from 'styled-components'
import { Map as Mapeable, TileLayer } from 'react-leaflet'
import { LocationConsumer } from '../providers/LocationProvider'

const Container = styled(Mapeable)`
  width: 100%;
  height: 100vh;
`

export const Map = props => {
  return (
    <LocationConsumer>
      {({ lat, lng }) => (
        <Container center={{ lat, lng }} zoom={5}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {props.children}
        </Container>
      )}
    </LocationConsumer>
  )
}
