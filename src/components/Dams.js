import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import { Dam } from './Dam'

export const Dams = ({ data }) => {
  return (
    <Fragment>
      {data.map(dam => (
        <Dam key={v4()} data={dam} />
      ))}
    </Fragment>
  )
}

Dams.PropTypes = {
  data: PropTypes.array
}
