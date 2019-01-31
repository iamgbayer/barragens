import React from 'react'
import config from '../config'

const Dams = React.createContext()

export const DamsConsumer = Dams.Consumer

export class DamsProvider extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(config.JSON)
      .then(result => result.json())
      .then(result => this.formatter(result))
      .then(result => this.setState({ data: result }))
  }

  /**
   * @todo Anti corruption method
   * @param {*} data
   */
  formatter(data) {
    const format = dam => {
      return {
        height_above_foundation: dam['Altura Acima da Fundação (m)'],
        height_above_ground: dam['Altura Acima do Terreno (m)'],
        capacity: dam['Capacidade (hm3)'],
        risk: dam['Categoria de Risco'],
        dpa: dam['Classe de DPA'],
        snisb: dam['Código SNISB'],
        inspector: dam['Fiscalizador'],
        city: dam['Município'],
        name: dam['Nome da damm'],
        state: dam['UF'],
        purpose: dam['Uso Principal'],
        coords: {
          lat: dam['Latitude (Graus)'],
          lng: dam['Longitude (Graus)']
        }
      }
    }

    return data.map(format)
  }

  render() {
    return (
      <Dams.Provider value={this.state}>{this.props.children}</Dams.Provider>
    )
  }
}
