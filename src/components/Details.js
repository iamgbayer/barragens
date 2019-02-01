import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: calc(100% - 20px);
  height: 200px;
  display block;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 999;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  background: #fff;

  h4 {
    font-size: 15px;
    background: #fafafa;
    padding: 12px 10px;
    color: rgba(0, 0, 0, 0.45);
    border-bottom: 1px solid #e8e8e8;
  }
`

export const Details = ({ data }) => {
  const { name } = data

  return (
    <Container>
      <h4>{name}</h4>
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
