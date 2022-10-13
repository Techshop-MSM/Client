import { useContext } from 'react'
import { DataContext } from '../../global/useContext'

export const createCompare = (items) => {
  const { category } = useContext(DataContext)
    console.log("ITEMS", items)
  switch (category) {
    case 'case':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{flexDirection: 'column'}}>
            <th scope="row" style={{ width: '10rem'}}>Type</th>
            <th scope="row">Farbe</th>
            <th scope="row">Drive</th>
            <th scope="row">Netzteil</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody className="d-flex border" style={{flexDirection: 'column'}}>
                <tr>
                  <td key={`a${i}`}>{item.type}</td>
                </tr>
                <tr>
                  <td key={`b${i}`}>{item.color}</td>
                </tr>
                <tr>
                  <td key={`c${i}`}>{item.drive}</td>
                </tr>
                <tr>
                  <td key={`d${i}`}>{item.powerSupply}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break
    case 'cpu':
      return (
        <tr>
          <td>Type</td>
          <td>{art.cpuTyp}</td>
          <td>Model</td>
          <td>{art.model}</td>
          <td>Sockel</td>
          <td>{art.socket}</td>
          <td>Kerne</td>
          <td>{art.cores}</td>
          <td>TDP</td>
          <td>{art.tdp}</td>
        </tr>
      )
      break
    case 'gpu':
      return (
        <tr>
          <td>Type</td>
          <td>{art.type}</td>
          <td>Model</td>
          <td>{art.model}</td>
          <td>Chipsatz</td>
          <td>{art.chip}</td>
          <td>Speicher</td>
          <td>{art.memory}</td>
        </tr>
      )
      break
    case 'mainboard':
      return (
        <tr>
          <td>Type</td>
          <td>{art.typeModelVersion[0]}</td>
          <td>Model</td>
          <td>{art.typeModelVersion[1]}</td>
          <td>Formfaktor</td>
          <td>{art.form}</td>
          <td>max. Speicher</td>
          <td>{art.maxMemory}</td>
        </tr>
      )
      break
    case 'powerAdapter':
      return (
        <tr>
          <td style={{ width: '100%', backgroundColor: 'gold' }}>{art.effiClass}</td>
          <td>Formfaktor</td>
          <td>{art.form}</td>
          <td>Leistung</td>
          <td>{art.maxPower}</td>
          <td>Effizienz</td>
          <td>{`${art.efficiency}%`}</td>
        </tr>
      )
      break
    case 'ram':
      return (
        <tr>
          <td>Form</td>
          <td>{art.form}</td>
          <td>Geschwindigkeit</td>
          <td>{art.capacity}</td>
          <td>Modtre</td>
          <td>{art.modtres}</td>
          <td>Farbe</td>
          <td>{art.color}</td>
        </tr>
      )
      break
    case 'storage':
      return (
        <tr>
          <td>Form</td>
          <td>{art.form}</td>
          <td>Type</td>
          <td>{art.type}</td>
          <td>Kapazität</td>
          <td>{art.capacity}</td>
        </tr>
      )
      break
    case 'soundcard':
      return (
        <tr>
          <td>Soundchip</td>
          <td>{art.soundchip}</td>
          <td>Kanäle</td>
          <td>{art.channels}</td>
          <td>Lautstärke</td>
          <td>{art.audio}</td>
          <td>Rate</td>
          <td>{art.sampleRate}</td>
        </tr>
      )
      break

      defatrt: break
  }
}
