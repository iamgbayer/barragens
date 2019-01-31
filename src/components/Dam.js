import React, { Fragment } from 'react'
import { v4 } from 'uuid'
import { Marker } from 'react-leaflet'

export class Dam extends React.PureComponent {
  whenMarkerPressed() {}

  render() {
    const { coords } = this.props.data
    const { lat, lng } = coords

    return (
      <Fragment>
        <Marker
          key={v4()}
          onClick={this.whenMarkerPressed}
          position={[lat, lng]}
        />
      </Fragment>
    )
  }
}
