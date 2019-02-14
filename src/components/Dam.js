import React, { useState } from 'react'
import { v4 } from 'uuid'
import { Marker } from 'react-leaflet'

import { Icon } from './Icon'
import { Details } from './Details'
import posed, { PoseGroup } from 'react-pose'

const Transition = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
})

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
          <Transition key="transition">
            <Details whenCloseable={whenCloseable} data={props.data} />
          </Transition>
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
