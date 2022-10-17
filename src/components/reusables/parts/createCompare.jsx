export const createCompare = (items, category) => {
  switch (category) {
    case 'case':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{ flexDirection: 'column' }}>
            <th scope="row">Artikelname</th>
            <th scope="row">Bewertung</th>
            <th scope="row">Artikelnummer</th>
            <th scope="row">Preis</th>
            <th scope="row">Type</th>
            <th scope="row">Farbe</th>
            <th scope="row">Drive</th>
            <th scope="row">Netzteil</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody key={`a${i}`} className="d-flex border" style={{ flexDirection: 'column' }}>
                <tr>
                  <td>{item.baseData.articleName}</td>
                </tr>
                <tr>
                  <td>{item.baseData.ratings ? item.baseData.ratings : 'noch nicht ermittelt'}</td>
                </tr>
                <tr>
                  <td>{item.baseData.articleNr}</td>
                </tr>
                <tr>
                  <td>{item.baseData.priceEK * 1.19 * 1.2}</td>
                </tr>
                <tr>
                  <td>{item.type}</td>
                </tr>
                <tr>
                  <td>{item.color}</td>
                </tr>
                <tr>
                  <td>{item.drive}</td>
                </tr>
                <tr>
                  <td>{item.powerSupply ? item.powerSupply : 'nicht enthalten'}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break
    case 'cpu':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{ flexDirection: 'column' }}>
            <th scope="row">Artikelname</th>
            <th scope="row">Bewertung</th>
            <th scope="row">Artikelnummer</th>
            <th scope="row">Preis</th>
            <th scope="row">Type</th>
            <th scope="row">Model</th>
            <th scope="row">Sockel</th>
            <th scope="row">Kerne</th>
            <th scope="row">TDP</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody key={`b_${i}`} className="d-flex border" style={{ flexDirection: 'column' }}>
                <tr>
                  <td>{item.baseData.articleName}</td>
                </tr>
                <tr>
                  <td>{item.baseData.ratings}</td>
                </tr>
                <tr>
                  <td>{item.baseData.articleNr}</td>
                </tr>
                <tr>
                  <td>{item.baseData.priceEK * 1.19 * 1.2}</td>
                </tr>
                <tr>
                  <td>{item.cpuTyp}</td>
                </tr>
                <tr>
                  <td>{item.model}</td>
                </tr>
                <tr>
                  <td>{item.socket}</td>
                </tr>
                <tr>
                  <td>{item.cores}</td>
                </tr>
                <tr>
                  <td>{item.tdp}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break
    case 'gpu':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{ flexDirection: 'column' }}>
            <th scope="row">Artikelname</th>
            <th scope="row">Bewertung</th>
            <th scope="row">Artikelnummer</th>
            <th scope="row">Preis</th>
            <th scope="row">Type</th>
            <th scope="row">Model</th>
            <th scope="row">Chipsatz</th>
            <th scope="row">Speicher</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody key={`c_${i}`} className="d-flex border" style={{ flexDirection: 'column' }}>
                <tr>
                  <td>{item.baseData.articleName}</td>
                </tr>
                <tr>
                  <td>{item.baseData.ratings}</td>
                </tr>
                <tr>
                  <td>{item.baseData.articleNr}</td>
                </tr>
                <tr>
                  <td>{item.baseData.priceEK * 1.19 * 1.2}</td>
                </tr>
                <tr>
                  <td>{item.type}</td>
                </tr>
                <tr>
                  <td>{item.model}</td>
                </tr>
                <tr>
                  <td>{item.chip}</td>
                </tr>
                <tr>
                  <td>{item.memory}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break
    case 'mainboard':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{ flexDirection: 'column' }}>
            <th scope="row">Artikelname</th>
            <th scope="row">Bewertung</th>
            <th scope="row">Artikelnummer</th>
            <th scope="row">Preis</th>
            <th scope="row">Type</th>
            <th scope="row">Model</th>
            <th scope="row">Formfaktor</th>
            <th scope="row">max. Speicher</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody key={`d_${i}`} className="d-flex border" style={{ flexDirection: 'column' }}>
                <tr>
                  <td>{item.baseData.articleName}</td>
                </tr>
                <tr>
                  <td>{item.baseData.ratings}</td>
                </tr>
                <tr>
                  <td>{item.baseData.articleNr}</td>
                </tr>
                <tr>
                  <td>{item.baseData.priceEK * 1.19 * 1.2}</td>
                </tr>
                <tr>
                  <td>{item.typeModelVersion[0]}</td>
                </tr>
                <tr>
                  <td>{item.typeModelVersion[1]}</td>
                </tr>
                <tr>
                  <td>{item.form}</td>
                </tr>
                <tr>
                  <td>{item.maxMemory}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break
    case 'powerAdapter':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{ flexDirection: 'column' }}>
            <th scope="row">Artikelname</th>
            <th scope="row">Bewertung</th>
            <th scope="row">Artikelnummer</th>
            <th scope="row">Preis</th>
            <th scope="row"></th>
            <th scope="row">Formfaktor</th>
            <th scope="row">Leistung</th>
            <th scope="row">Effizienz</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody key={`e_${i}`} className="d-flex border" style={{ flexDirection: 'column' }}>
                <tr>
                  <td>{item.baseData.articleName}</td>
                </tr>
                <tr>
                  <td>{item.baseData.ratings}</td>
                </tr>
                <tr>
                  <td>{item.baseData.articleNr}</td>
                </tr>
                <tr>
                  <td>{item.baseData.priceEK * 1.19 * 1.2}</td>
                </tr>
                <tr>
                  <td style={{ width: '100%', backgroundColor: 'gold' }}>{item.effiClass}</td>
                </tr>
                <tr>
                  <td>{item.form}</td>
                </tr>
                <tr>
                  <td>{item.maxPower}</td>
                </tr>
                <tr>
                  <td>{item.form}</td>
                </tr>
                <tr>
                  <td>{item.efficiency}%</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break
    case 'ram':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{ flexDirection: 'column' }}>
            <th scope="row">Artikelname</th>
            <th scope="row">Bewertung</th>
            <th scope="row">Artikelnummer</th>
            <th scope="row">Preis</th>
            <th scope="row">Form</th>
            <th scope="row">Geschwindigkeit</th>
            <th scope="row">Modtre</th>
            <th scope="row">Farbe</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody key={`f_${i}`} className="d-flex border" style={{ flexDirection: 'column' }}>
                <tr>
                  <td>{item.baseData.articleName}</td>
                </tr>
                <tr>
                  <td>{item.baseData.ratings}</td>
                </tr>
                <tr>
                  <td>{item.baseData.articleNr}</td>
                </tr>
                <tr>
                  <td>{item.baseData.priceEK * 1.19 * 1.2}</td>
                </tr>
                <tr>
                  <td>{item.form}</td>
                </tr>
                <tr>
                  <td>{item.capacity}</td>
                </tr>
                <tr>
                  <td>{item.socket}</td>
                </tr>
                <tr>
                  <td>{item.modtres}</td>
                </tr>
                <tr>
                  <td>{item.color}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break
    case 'storage':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{ flexDirection: 'column' }}>
            <th scope="row">Artikelname</th>
            <th scope="row">Bewertung</th>
            <th scope="row">Artikelnummer</th>
            <th scope="row">Preis</th>
            <th scope="row">Form</th>
            <th scope="row">Type</th>
            <th scope="row">Kapazität</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody key={`g_${i}`} className="d-flex border" style={{ flexDirection: 'column' }}>
                <tr>
                  <td>{item.baseData.articleName}</td>
                </tr>
                <tr>
                  <td>{item.baseData.ratings}</td>
                </tr>
                <tr>
                  <td>{item.baseData.articleNr}</td>
                </tr>
                <tr>
                  <td>{item.baseData.priceEK * 1.19 * 1.2}</td>
                </tr>
                <tr>
                  <td>{item.form}</td>
                </tr>
                <tr>
                  <td>{item.type}</td>
                </tr>
                <tr>
                  <td>{item.capacity}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break
    case 'soundcard':
      return (
        <table className="d-flex" style={{ width: '100%', color: 'red' }}>
          <thead className="d-flex" style={{ flexDirection: 'column' }}>
            <th scope="row">Artikelname</th>
            <th scope="row">Bewertung</th>
            <th scope="row">Artikelnummer</th>
            <th scope="row">Preis</th>
            <th scope="row">Soundchip</th>
            <th scope="row">Kanäle</th>
            <th scope="row">Lautstärke</th>
            <th scope="row">Rate</th>
          </thead>
          {items &&
            items.map((item, i) => (
              <tbody key={`h_${i}`} className="d-flex border" style={{ flexDirection: 'column' }}>
                <tr>
                  <td>{item.baseData.articleName}</td>
                </tr>
                <tr>
                  <td>{item.baseData.ratings}</td>
                </tr>
                <tr>
                  <td>{item.baseData.articleNr}</td>
                </tr>
                <tr>
                  <td>{item.baseData.priceEK * 1.19 * 1.2}</td>
                </tr>
                <tr>
                  <td>{item.soundchip}</td>
                </tr>
                <tr>
                  <td>{item.channels}</td>
                </tr>
                <tr>
                  <td>{item.audio}</td>
                </tr>
                <tr>
                  <td>{item.sampleRate}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )
      break

    default:
      break
  }
}
