import React, { useState } from 'react'
import { v4 } from 'uuid'
import { Marker } from 'react-leaflet'
import { PoseGroup } from 'react-pose'

import { Icon } from './Icon'
import { Details } from './Details'

export function Dam(props) {
  const [isShowable, setIsShowable] = useState(false)

  const whenMarkerPressed = () => setIsShowable(!isShowable)
  const whenCloseable = () => setIsShowable(false)

  const { coords } = props.data
  const { lat, lng } = coords

  return (
    <>
      <PoseGroup>
        {isShowable && (
          <Details
            key="details"
            isShowable={isShowable}
            whenCloseable={whenCloseable}
            data={props.data}
          />
        )}
      </PoseGroup>

      <Marker
        icon={Icon}
        onClick={whenMarkerPressed}
        key={v4()}
        position={[lat, lng]}
      />
    </>
  )
}
