import React from 'react'

const defaultLocation = {
  lat: -13.5594465,
  lng: -46.7659922
}

const Location = React.createContext()

export const LocationConsumer = Location.Consumer

export class LocationProvider extends React.Component {
  state = defaultLocation

  componentDidMount() {}

  render() {
    return (
      <Location.Provider value={this.state}>
        {this.props.children}
      </Location.Provider>
    )
  }
}
