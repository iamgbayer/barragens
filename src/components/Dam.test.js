import React from 'react'
import { shallow } from 'enzyme'
import { Marker } from 'react-leaflet'

import { Dam } from './Dam'
import { Details } from './Details'

const data = {
  coords: {
    lat: -13.5594465,
    lng: -46.7659922
  }
}

jest.mock('uuid', () => ({
  v4: jest.fn(() => '82f934ef-65ff-4539-a656-4fac1c9eea72')
}))

it('renders without crashing', () => {
  const component = shallow(<Dam data={data} />)

  expect(component).toMatchSnapshot()
})

it('test when marker pressed', () => {
  const component = shallow(<Dam data={data} />)
  component.find(Marker).simulate('click')

  expect(component.state().isShowable).toBe(true)
})

it('test should Details component rendered', () => {
  const component = shallow(<Dam data={data} />)
  component.setState({ isShowable: true })

  expect(component.find(Details).length).toEqual(1)
})

it('test when marker was closed', () => {
  const component = shallow(<Dam data={data} />)
  component.setState({ isShowable: true })

  const instance = component.instance()
  instance.whenCloseable()

  expect(component.state().isShowable).toBe(false)
})
