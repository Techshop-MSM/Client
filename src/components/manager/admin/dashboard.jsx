import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../global/useContext'
import { Col, Container, Row } from 'react-bootstrap'
import { backendURL } from '../../../App'

export const DashboardAdmin = () => {
  const { userData } = useContext(AppContext)

  const [file, setFile] = useState(null)
  const [jsonData, setJsonData] = useState(null)
  const [category, setCategory] = useState(null)

  useEffect(() => {
    jsonData && console.log('json', jsonData)
  }, [file, jsonData])

  function logFile(e) {
    setJsonData(JSON.parse(e.target.result))
  }

  const detectFile = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const reader = new FileReader()

    //Setup the callback event to run when the file is read
    if (file === null) {
      return
    }
    reader.onloadend = logFile
    reader.readAsText(file)
    // const reader = new FormData() // to backend
  }

  // ------------------ loadData -------------

  const loadData = () => {
    const test = 'cat'
    return `${test}: Test`
  }

  const cat = (e) => {
    setCategory(e.target.value)
    console.log('categoryState:', category, 'e.target.value:', e.target.value)
    return cat
  }

  const DatabaseManager = async (reason) => {
    // if (userData.group != admin) {
    //   return
    // }
    const upload = {
      reason: reason,
      category: category,
      group: userData.group,
      data: jsonData,
    }

    console.log(upload)

    const result = await fetch(`${backendURL}/updateDatabase`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(upload),
    })
    result && location.reload()
  }

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={onSubmit} style={{ textAlign: 'center', borderBottom: 'solid' }}>
            <input
              type="file"
              id="file"
              onChange={detectFile}
              accept=".json"
              multiple=""
              style={{
                width: '60%',
                padding: '0.2rem',
                margin: '1.5rem',
                border: 'solid 0.1rem',
                borderRadius: '0.5rem',
              }}
            />
            <button
              type="submit"
              style={{ margin: '1rem', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
            >
              Load Data
            </button>
          </form>
          <div style={{ textAlign: 'center' }}>
            <h3>Incomming data</h3>
            <select name="" id="" onChange={cat} style={{ width: '40%', padding: '0.2rem 0.5rem' }}>
              <option>Kategorie wählen...</option>
              <option value="case">Gehäuse</option>
              <option value="cpu">CPU</option>
              <option value="gpu">Grafikkarte</option>
              <option value="mainboard">Mainboard</option>
              <option value="power">Netzteil</option>
              <option value="ram">Arbeitsspeicher</option>
              <option value="storage">HDD/SSD Festplatte</option>
              <option value="sound">Soundkarte</option>
            </select>
            <img
              src="../../../../public/images/add.svg"
              alt=""
              onClick={() => DatabaseManager('add')}
              style={{
                width: '2rem',
                margin: '0.5rem 0.5rem 0.5rem 2rem',
                padding: '0.2rem 0.3rem',
                borderRadius: '0.5rem',
                border: 'solid 0.1rem',
              }}
            />
            <img
              src="../../../../public/images/edit.svg"
              alt=""
              onClick={() => DatabaseManager('edit')}
              style={{
                width: '2rem',
                margin: '0.5rem',
                padding: '0.2rem 0.3rem',
                borderRadius: '0.5rem',
                border: 'solid 0.1rem',
              }}
            />
            <img
              src="../../../../public/images/upload.svg"
              alt=""
              onClick={() => DatabaseManager('upload')}
              style={{
                width: '2rem',
                margin: '0.5rem',
                padding: '0.2rem 0.3rem',
                borderRadius: '0.5rem',
                border: 'solid 0.1rem',
              }}
            />
          </div>
          <table style={{ width: '100%', padding: '1.5rem', border: 'solid 0.1rem' }}>
            <thead>
              {jsonData && (
                <tr>
                  <td style={{ fontSize: '1.3rem', fontWeight: '600', border: 'solid' }}>NAME</td>
                  <td style={{ fontSize: '1.3rem', fontWeight: '600', border: 'solid' }}>
                    Kategorie
                  </td>
                  <td style={{ fontSize: '1.3rem', fontWeight: '600', border: 'solid' }}>Type</td>
                  <td style={{ fontSize: '1.3rem', fontWeight: '600', border: 'solid' }}>
                    Ek-Preis
                  </td>
                  <td style={{ fontSize: '1.3rem', fontWeight: '600', border: 'solid' }}>
                    Interact
                  </td>
                </tr>
              )}
            </thead>
            {jsonData ? (
              jsonData.map((data, index) => (
                <tbody key={index} style={{ lineHeight: '1.6rem', border: 'solid lightgreen' }}>
                  <tr>
                    <td name="articleName">{data.name}</td>
                    <td name={category}>{category}</td>
                    <td name="type">{data.type}</td>
                    <td name="priceEK">{data.price_usd} €</td>
                    <td name="deleteImg">
                      <img
                        src="../../../../public/images/delete.svg"
                        alt=""
                        onClick={() => DatabaseManager('delete')}
                        style={{
                          width: '1.5rem',
                          margin: '0.5rem 0.5rem 0.5rem 2rem',
                          padding: '0.1rem 0.1rem',
                          borderRadius: '0.5rem',
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td style={{ textAlign: 'center', padding: '2rem' }}>JSON preview ...</td>
                </tr>
              </tbody>
            )}
          </table>
          <div style={{ minHeight: '10rem' }}>
            <div style={{ borderBottom: 'solid', textAlign: 'center' }}>
              <h3>Database</h3>
              <select name="" id="" onChange={cat}>
                <option>Wähle eine Kategorie...</option>
                <option value="cpu">CPU</option>
                <option value="storage">HDD Festplatte</option>
                <option value="gpu">Grafikkarte</option>
                <option value="mainboard">Mainboard</option>
                <option value="case">Gehäuse</option>
                <option value="power">Netzteil</option>
                <option value="ram">Arbeitsspeicher</option>
              </select>
            </div>
          </div>
          <div style={{ minHeight: '10rem', border: 'solid' }}>{loadData('Mainboard')}</div>
        </Col>
      </Row>
    </Container>
  )
}
