import React from 'react'
import ReactDOMServer from 'react-dom/server'
import L from 'leaflet'
import styled from 'styled-components'

const Colorizable = styled.svg`
  circle {
    fill: rgba(110, 204, 57, 0.6);
  }
`

const Container = () => (
  <Colorizable width="30" height="30">
    <circle className="path" cx="15" cy="15" r="15" />
  </Colorizable>
)

export const Icon = L.divIcon({
  html: ReactDOMServer.renderToString(<Container />)
})
