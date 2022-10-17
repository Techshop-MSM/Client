import { useContext } from 'react'
import { DataContext } from '../../global/useContext'

export const getDetails = (art) => {
  const { category } = useContext(DataContext)

  switch (category) {
    case 'case':
      return (
        <ul className="details">
          <li className="detailsKey">Type</li>
          <li className="detailsValue">{art.type}</li>
          <li className="detailsKey">Farbe</li>
          <li className="detailsValue">{art.color}</li>
          <li className="detailsKey">Drive</li>
          <li className="detailsValue">{art.drive}</li>
          <li className="detailsKey">Netzteil</li>
          <li className="detailsValue">{art.powerSupply}</li>
        </ul>
      )
      break
    case 'cpu':
      return (
        <ul className="details">
          <li className="detailsKey">Type</li>
          <li className="detailsValue">{art.cpuTyp}</li>
          <li className="detailsKey">Model</li>
          <li className="detailsValue">{art.model}</li>
          <li className="detailsKey">Sockel</li>
          <li className="detailsValue">{art.socket}</li>
          <li className="detailsKey">Kerne</li>
          <li className="detailsValue">{art.cores}</li>
          <li className="detailsKey">TDP</li>
          <li className="detailsValue">{art.tdp}</li>
        </ul>
      )
      break
    case 'gpu':
      return (
        <ul className="details">
          <li className="detailsKey">Type</li>
          <li className="detailsValue">{art.type}</li>
          <li className="detailsKey">Model</li>
          <li className="detailsValue">{art.model}</li>
          <li className="detailsKey">Chipsatz</li>
          <li className="detailsValue">{art.chip}</li>
          <li className="detailsKey">Speicher</li>
          <li className="detailsValue">{art.memory}</li>
        </ul>
      )
      break
    case 'mainboard':
      return (
        <ul className="details">
          <li className="detailsKey">Type</li>
          <li className="detailsValue">{art.typeModelVersion[0]}</li>
          <li className="detailsKey">Model</li>
          <li className="detailsValue">{art.typeModelVersion[1]}</li>
          <li className="detailsKey">Formfaktor</li>
          <li className="detailsValue">{art.form}</li>
          <li className="detailsKey">max. Speicher</li>
          <li className="detailsValue">{art.maxMemory}</li>
        </ul>
      )
      break
    case 'powerAdapter':
      return (
        <ul className="details">
          <li style={{ width: '100%', backgroundColor: 'gold' }}>{art.effiClass}</li>
          <li className="detailsKey">Formfaktor</li>
          <li className="detailsValue">{art.form}</li>
          <li className="detailsKey">Leistung</li>
          <li className="detailsValue">{art.maxPower}</li>
          <li className="detailsKey">Effizienz</li>
          <li className="detailsValue">{`${art.efficiency}%`}</li>
        </ul>
      )
      break
    case 'ram':
      return (
        <ul className="details">
          <li className="detailsKey">Form</li>
          <li>{art.form}</li>
          <li className="detailsKey">Geschwindigkeit</li>
          <li>{art.capacity}</li>
          <li className="detailsKey">Module</li>
          <li>{art.modules}</li>
          <li className="detailsKey">Farbe</li>
          <li>{art.color}</li>
        </ul>
      )
      break
    case 'storage':
      return (
        <ul className="details">
          <li className="detailsKey">Form</li>
          <li>{art.form}</li>
          <li className="detailsKey">Type</li>
          <li>{art.type}</li>
          <li className="detailsKey">Kapazität</li>
          <li>{art.capacity}</li>
        </ul>
      )
      break
    case 'soundcard':
      return (
        <ul className="details">
          <li className="detailsKey">Soundchip</li>
          <li>{art.soundchip}</li>
          <li className="detailsKey">Kanäle</li>
          <li>{art.channels}</li>
          <li className="detailsKey">Lautstärke</li>
          <li>{art.audio}</li>
          <li className="detailsKey">Rate</li>
          <li>{art.sampleRate}</li>
        </ul>
      )
      break

    default:
      break
  }
}
