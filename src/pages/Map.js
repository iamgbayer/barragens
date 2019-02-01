import React from 'react'
import styled from 'styled-components'
import { Map as Mapeable, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

import { LocationConsumer } from '../providers/LocationProvider'
import { DamsConsumer } from '../providers/DamsProvider'
import { Dams } from '../components/Dams'

const Container = styled(Mapeable)`
  width: 100%;
  height: 100vh;
`

export const Map = () => {
  return (
    <DamsConsumer>
      {({ data }) => (
        <LocationConsumer>
          {({ lat, lng }) => (
            <Container center={{ lat, lng }} zoom={5} maxZoom={15}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <MarkerClusterGroup
                showCoverageOnHover={false}
                spiderfyDistanceMultiplier={2}
              >
                <Dams data={data} />
              </MarkerClusterGroup>
            </Container>
          )}
        </LocationConsumer>
      )}
    </DamsConsumer>
  )
}
