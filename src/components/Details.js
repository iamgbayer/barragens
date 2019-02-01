import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
`

export const Details = ({ data }) => {
  const { name } = data

  return (
    <Container>
      <h2>{name}</h2>
    </Container>
  )
}

Details.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    capacity: PropTypes.number,
    city: PropTypes.string,
    coords: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    }),
    dpa: PropTypes.string,
    inspector: PropTypes.string,
    purpose: PropTypes.string,
    risk: PropTypes.string,
    snisb: PropTypes.number,
    state: PropTypes.string
  })
}
