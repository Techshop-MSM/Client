import { Col, Container, Row } from 'react-bootstrap'
import { ComparingModal } from '../../reusables/parts/ComparingModal'
import { DetailModal } from '../../reusables/parts/DetailModal'

export const ShopContent = () => {
  const baseDatas = [
    { name: 'Asus', form: 'AXT', price: 123, info: 'This Mainboard is awesome!' },
    { name: 'Gigabyte', form: 'mini-AXT', price: 213, info: 'This Mainboard is nice!' },
    { name: 'Gigabyte', form: 'AXT', price: 231, info: 'This Mainboard is great!' },
    { name: 'Asus', form: 'mini-AXT', price: 321, info: 'This Mainboard is fine!' },
  ]

  return (
    <Container>
      <Row style={{ margin: '2rem 0' }}>
        {baseDatas.map((data, i) => (
          <div
            className="cardcontainer"
            key={i}
            style={{
              backgroundColor: 'hsla(350,50%,50%,0.0)',
              width: '20rem',
              minHeight: '30rem',
              border: 'solid red',
              padding: '1rem',
              margin: '1rem 0.5rem',
            }}
          >
            <div className="photo">
              <img
                src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                className="img-fluid"
              ></img>
            </div>
            <div className="content" style={{ width: '100%', margin: '0.5rem 0' }}>
              <p className="txt4">{data.name}</p>
              <p className="txt4">{data.price} €</p>
              <p className="txt2">
                Ein E-ATX-Mainboard aus dem High-End-Bereich. Die Hauptplatine eignet sich für
                Desktop-Prozessoren der 12. und 13. Generation
              </p>
            </div>
            <div className="footer" style={{ height: '80%', margin: '0.5rem 0' }}>
              <ul style={{ listStyleType: 'none', padding: '0' }}>
                <li>Hersteller: {data.name}</li>
                <li>Formfaktor: {data.form}</li>
                <li>Preis: {data.price} €</li>
                <li></li>
                <li>Hersteller: {data.name}</li>
                <li>Formfaktor: {data.form}</li>
                <li>Preis: {data.price} €</li>
                <li></li>
                <li>Hersteller: {data.name}</li>
                <li>Formfaktor: {data.form}</li>
                <li>Preis: {data.price} €</li>
              </ul>
              <Col
                lg-1
                style={{ width: '20%', position: 'absolute', top: '-8rem', left: '15rem' }}
              >
                <DetailModal />
                <ComparingModal />
                <button
                  type="button"
                  className="hvr-rectangle-out testbtn btn btn-sm"
                  style={{
                    marginTop: '10px',
                  }}
                >
                  <img
                    src="../../../../public/images/shopBasket.svg"
                    alt=""
                    style={{ width: '2rem' }}
                  />
                </button>
              </Col>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  )
}
