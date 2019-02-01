import React, { Fragment } from 'react'
import { v4 } from 'uuid'
import { Marker } from 'react-leaflet'

import { Details } from './Details'

export class Dam extends React.PureComponent {
  state = {
    isShowable: false
  }

  whenMarkerPressed = () => this.setState({ isShowable: true })

  render() {
    const { coords } = this.props.data
    const { lat, lng } = coords
    const { isShowable } = this.state

    return (
      <Fragment>
        {isShowable && <Details data={this.props.data} />}

        <Marker key={v4()} position={[lat, lng]} />
      </Fragment>
    )
  }
}
