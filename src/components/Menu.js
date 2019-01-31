import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Menu as Menuable, Icon } from 'antd'
import { Link } from 'react-router-dom'

const Container = styled(Menuable)`
  width: 100%;
  max-width: 220px;
`

export const Menu = props => (
  <Fragment>
    <Container>
      <Menuable.Item>
        <Link to="/">
          <Icon type="alert" />
          Barragens
        </Link>
      </Menuable.Item>
      <Menuable.Item>
        <Link to="/about">
          <Icon type="question" />
          Sobre
        </Link>
      </Menuable.Item>
    </Container>

    {props.children}
  </Fragment>
)
