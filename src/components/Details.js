import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { Icon } from 'antd'

import config from '../config'

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
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.45);
  }
`

const Header = styled.div`
  background: #fafafa;
  padding: 12px 10px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Body = styled.div`
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Close = styled(Icon)`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.45);
  transform: rotate(315deg);
`

const Item = styled.div`
  margin-bottom: 15px;
  flex: 50%;

  strong {
    margin-right: 5px;
  }
`

export const Details = ({ data, whenCloseable }) => {
  const { name, state, risk, purpose, inspector, city, lng, lat } = data

  ReactGA.pageview(`${config.resources.dam}/${name}`)

  return (
    <Container>
      <Header>
        <h4>{name}</h4>
        <Close onClick={whenCloseable} type="plus-circle" />
      </Header>
      <Body>
        <Item>
          <strong>Estado</strong>
          <span>{state}</span>
        </Item>
        <Item>
          <strong>Cidade</strong>
          <span>{city}</span>
        </Item>
        <Item>
          <strong>Orgão responsável</strong>
          <span>{inspector}</span>
        </Item>
        <Item>
          <strong>Propósito da barragem</strong>
          <span>{purpose}</span>
        </Item>
        <Item>
          <strong>Risco</strong>
          <span>{risk}</span>
        </Item>
        <Item>
          <strong>Latitude</strong>
          <span>{lat}</span>
        </Item>
        <Item>
          <strong>Longitude</strong>
          <span>{lng}</span>
        </Item>
      </Body>
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
