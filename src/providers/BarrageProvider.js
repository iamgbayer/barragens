import React from 'react'
import config from '../config'

const Barrage = React.createContext()

export const BarrageConsumer = Barrage.Consumer

export class BarrageProvider extends React.Component {
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
    const format = barrage => {
      return {
        height_above_foundation: barrage['Altura Acima da Fundação (m)'],
        height_above_ground: barrage['Altura Acima do Terreno (m)'],
        capacity: barrage['Capacidade (hm3)'],
        risk: barrage['Categoria de Risco'],
        dpa: barrage['Classe de DPA'],
        snisb: barrage['Código SNISB'],
        inspector: barrage['Fiscalizador'],
        city: barrage['Município'],
        name: barrage['Nome da Barragem'],
        state: barrage['UF'],
        purpose: barrage['Uso Principal'],
        coords: {
          lat: barrage['Latitude (Graus)'],
          lng: barrage['Longitude (Graus)']
        }
      }
    }

    return data.map(format)
  }

  render() {
    return (
      <Barrage.Provider value={this.state}>
        {this.props.children}
      </Barrage.Provider>
    )
  }
}
