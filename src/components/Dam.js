import React from 'react'
import { v4 } from 'uuid'
import { Marker } from 'react-leaflet'

import { Icon } from './Icon'
import { Details } from './Details'

export class Dam extends React.PureComponent {
  state = {
    isShowable: false
  }

  whenMarkerPressed = () =>
    this.setState({ isShowable: !this.state.isShowable })

  whenCloseable = () => this.setState({ isShowable: false })

  render() {
    const { coords } = this.props.data
    const { lat, lng } = coords
    const { isShowable } = this.state

    return (
      <div>
        {isShowable && (
          <Details whenCloseable={this.whenCloseable} data={this.props.data} />
        )}

        <Marker
          icon={Icon}
          onClick={this.whenMarkerPressed}
          key={v4()}
          position={[lat, lng]}
        />
      </div>
    )
  }
}
