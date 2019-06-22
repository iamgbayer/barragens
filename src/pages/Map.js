import React, { useContext } from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { Map as Mapeable, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

import config from '../config'
import { LocationContext } from '../contexts/LocationContext'
import { DamsContext } from '../contexts/DamsContext'
import { Dams } from '../components/Dams'

const Container = styled(Mapeable)`
  width: 100%;
  height: 100vh;

  .icon {
    border: none;
    background: transparent;
  }
`

export const Map = () => {
  ReactGA.pageview(config.resources.dams)

  const data = useContext(DamsContext)
  const { lat, lng } = useContext(LocationContext)

  return (
    <Container center={{ lat, lng }} zoom={5} maxZoom={15}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup
        showCoverageOnHover={false}
        spiderfyDistanceMultiplier={2}
      >
        <Dams data={data} />
      </MarkerClusterGroup>
    </Container>
  )
}
