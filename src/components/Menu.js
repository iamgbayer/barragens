import React from 'react'
import styled from 'styled-components'
import { Menu as Menuable, Icon } from 'antd'
import { Link } from 'react-router-dom'

const Navigation = styled(Menuable)`
  display: flex;
  justify-content: flex-end;
  height: 48px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const Menu = props => (
  <Container>
    <Navigation mode="horizontal">
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
    </Navigation>

    {props.children}
  </Container>
)
