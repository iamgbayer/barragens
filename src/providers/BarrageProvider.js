import React from 'react'
import config from '../config'

const Barrage = React.createContext()

export const BarrageConsumer = Barrage.Consumer

export class BarrageProvider extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(config.CSV)
  }

  render() {
    return (
      <Barrage.Provider value={this.state}>
        {this.props.children}
      </Barrage.Provider>
    )
  }
}
