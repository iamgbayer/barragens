import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { Map as Mapeable, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

import config from '../config'
import { LocationConsumer } from '../providers/LocationProvider'
import { DamsConsumer } from '../providers/DamsProvider'
import { Dams } from '../components/Dams'
import { Loading } from '../components/Loading'

const Container = styled(Mapeable)`
  width: 100%;
  height: 100vh;
`

export const Map = () => {
  ReactGA.pageview(config.resources.dams)

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
