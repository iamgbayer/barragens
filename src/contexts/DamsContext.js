import React, { useState, useEffect } from 'react'
import config from '../config'

export const DamsContext = React.createContext()

export function DamsProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(config.JSON)
      .then(data => data.json())
      .then(formatter)
      .then(setData)
  }, [])

  /**
   * @todo Anti corruption method
   * @param {object} data
   */
  const formatter = data => {
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

  return <DamsContext.Provider value={data}>{children}</DamsContext.Provider>
}
