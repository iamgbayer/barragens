import React from 'react'
import styled from 'styled-components'
import { Menu as Menuable, Icon } from 'antd'
import { Link } from 'react-router-dom'

const Container = styled(Menuable)`
  width: 100%;
  max-width: 260px;
`

export const Menu = () => (
  <Container>
    <Link to="/">
      <Menuable.Item>
        <Icon type="alert" />
        Barragens
      </Menuable.Item>
    </Link>
    <Link to="/about">
      <Menuable.Item>
        <Icon type="question" />
        Sobre
      </Menuable.Item>
    </Link>
  </Container>
)
