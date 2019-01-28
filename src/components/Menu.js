import React from 'react'
import styled from 'styled-components'
import { Menu as Menuable, Icon } from 'antd'

const Container = styled.div``

export const Menu = () => (
  <Menuable>
    <Menuable.Item>
      <Icon type="alert" />
      Barragens
    </Menuable.Item>
    <Menuable.Item>
      <Icon type="question" />
      Sobre
    </Menuable.Item>
  </Menuable>
)
