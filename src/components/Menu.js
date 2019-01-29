import React from 'react'
import styled from 'styled-components'
import { Menu as Menuable, Icon } from 'antd'

const Container = styled(Menuable)`
  width: 100%;
  max-width: 260px;
`

export const Menu = () => (
  <Container>
    <Menuable.Item>
      <Icon type="alert" />
      Barragens
    </Menuable.Item>
    <Menuable.Item>
      <Icon type="question" />
      Sobre
    </Menuable.Item>
  </Container>
)
