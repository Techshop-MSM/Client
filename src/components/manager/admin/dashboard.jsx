import { useContext, useEffect, useState } from 'react'
import { AppContext, DataContext } from '../../global/useContext'
import { Col, Container, Row } from 'react-bootstrap'
import { databaseManager } from '../../global/databaseManager'

export const DashboardAdmin = () => {
  const { userData } = useContext(AppContext)
  const { category, setCategory, articles, setArticles } = useContext(DataContext)
  const [file, setFile] = useState(null)
  const [jsonData, setJsonData] = useState(null)

  const buttonStyle = {
    backgroundColor: '#ededed',
    width: '2rem',
    margin: '0.5rem 0.5rem 0.5rem 2rem',
    padding: '0.2rem 0.3rem',
    borderRadius: '0.5rem',
    border: 'solid 0.1rem',
  }

  const deleteButton = {
    backgroundColor: '#ededed',
    width: '1.5rem',
    margin: '0.1rem 0.1rem 0.1rem 0.5rem',
    padding: '0.3rem 0.3rem',
    borderRadius: '0.5rem',
  }

  useEffect(() => {
    jsonData && console.log('json', jsonData)
  }, [file, jsonData, articles])

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
  }

  const cat = (e) => {
    setCategory(e.target.value)
    return cat
  }

  const selectField = () => {
    return (
      <select name="" id="" onChange={cat} className="" style={{ width: '40%', padding: '0.2rem 0.5rem' }}>
        <option>Kategorie wählen...</option>
        <option value="case">Gehäuse</option>
        <option value="cpu">CPU</option>
        <option value="gpu">Grafikkarte</option>
        <option value="mainboard">Mainboard</option>
        <option value="powerAdapter">Netzteil</option>
        <option value="ram">Arbeitsspeicher</option>
        <option value="storage">HDD/SSD Festplatte</option>
        <option value="soundCard">Soundkarte</option>
      </select>
    )
  }

  const innerFieldAnalyse = (value) => {
    switch (value) {
      case 'ratingCounter':
        return false
        break
      case 'ratings':
        return false
        break
      case 'comments':
        return false
        break
      default:
        return true
        break
    }
  }

  return (
    <Container className="bg-dark">
      <Row>
        <Col>
          <form onSubmit={onSubmit} style={{ textAlign: 'center', borderBottom: 'solid' }}>
            <input
              type="file"
              id="file"
              onChange={detectFile}
              accept=".json"
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
            {selectField()}
            <img
              src="../../../../public/images/add.svg"
              alt=""
              onClick={() => databaseManager({ reason: 'add', setArticles })}
              style={buttonStyle}
            />
            <img
              src="../../../../public/images/upload.svg"
              alt=""
              onClick={() => databaseManager({ reason: 'upload', setArticles })}
              style={buttonStyle}
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
                        onClick={() => databaseManager({ reason: 'delete', setArticles })}
                        style={deleteButton}
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
              {selectField()}
              <img
                src="../../../../public/images/load.svg"
                alt=""
                onClick={() => databaseManager({ reason: 'load', setArticles })}
                style={buttonStyle}
              />
              <img
                src="../../../../public/images/clear.svg"
                alt=""
                onClick={() => databaseManager({ reason: 'clear', setArticles })}
                style={buttonStyle}
              />
            </div>
          </div>
          <table style={{ width: '100%', padding: '1.5rem', border: 'solid 0.1rem' }}>
            <thead>
              {articles && (
                <tr>
                  {Object.keys(articles[0]).map((field, i) =>
                    field === 'baseData'
                      ? Object.keys(articles[0].baseData).map(
                          (innerField, i) =>
                            innerFieldAnalyse(innerField) && (
                              <td name="an" style={{ border: 'solid' }} key={`kb_${i}`}>
                                {innerField}
                              </td>
                            )
                        )
                      : field != '_id' && (
                          <td name="an" style={{ border: 'solid' }} key={`ke_${i}`}>
                            {field}
                          </td>
                        )
                  )}
                </tr>
              )}
            </thead>
            <tbody style={{ lineHeight: '1.6rem', border: 'solid lightgreen' }}>
              {articles ? (
                articles.map((article, index) => (
                  <tr key={`row_${index}`} name={article._id}>
                    {Object.entries(article).map((entry, i) =>
                      entry[0] === 'baseData'
                        ? Object.values(entry[1]).map(
                            (innerEntry, bi) =>
                              category && (
                                <td
                                  name="an"
                                  key={`b_${bi}`}
                                  style={{ padding: '0.1rem 0.2rem', textAlign: 'center' }}
                                >
                                  {innerEntry}
                                </td>
                              )
                          )
                        : entry[0] != '_id' && (
                            <td name="an" key={`e_${i}`}>
                              {entry[1]}
                            </td>
                          )
                    )}
                    {/* Object.entries(entry).map((innerEntry) => innerEntry[1]) */}
                    <td>
                      <img
                        src="../../../../public/images/edit.svg"
                        alt=""
                        onClick={() => databaseManager({ reason: 'edit', setArticles })}
                        style={deleteButton}
                      />
                    </td>
                    <td>
                      <img
                        src="../../../../public/images/delete.svg"
                        alt=""
                        onClick={() => databaseManager({ reason: 'delete', setArticles })}
                        style={deleteButton}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={{ textAlign: 'center', padding: '2rem' }}>Load Category ...</td>
                </tr>
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}
