import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import { Dam } from './Dam'

export const Dams = ({ data }) => {
  return (
    <>
      {data.map(dam => (
        <Dam key={v4()} data={dam} />
      ))}
    </>
  )
}

Dams.propTypes = {
  data: PropTypes.array
}
