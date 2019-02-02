import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const wasDataLoading = data => {
  console.log(data.length === 0)
  return data.length === 0
}

const Spineable = styled(Spin)`
  width: 100%;

  .ant-spin-nested-loading {
    width: 100%;
  }
`

export const Loading = ({ children, data }) => (
  <Spineable size="large" spinning={wasDataLoading(data)}>
    {children}
  </Spineable>
)
