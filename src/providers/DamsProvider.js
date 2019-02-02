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
      .then(data => data.json())
      .then(this.formatter)
      .then(data => this.setState({ data }))
  }

  /**
   * @todo Anti corruption method
   * @param {object} data
   */
  formatter(data) {
    const format = dam => ({
      height_above_foundation: dam['Altura Acima da Fundação (m)'],
      height_above_ground: dam['Altura Acima do Terreno (m)'],
      capacity: dam['Capacidade (hm3)'],
      risk: dam['Categoria de Risco'],
      dpa: dam['Classe de DPA'],
      snisb: dam['Código SNISB'],
      inspector: dam['Fiscalizador'],
      city: dam['Município'],
      name: dam['Nome da Barragem'],
      state: dam['UF'],
      purpose: dam['Uso Principal'],
      lng: dam['Longitude'],
      lat: dam['Latitude'],
      coords: {
        lat: dam['Latitude (Graus)'],
        lng: dam['Longitude (Graus)']
      }
    })

    return data.map(format)
  }

  render() {
    return (
      <Dams.Provider value={this.state}>{this.props.children}</Dams.Provider>
    )
  }
}
