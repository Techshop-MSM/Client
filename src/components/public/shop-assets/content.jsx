import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { DataContext } from '../../global/useContext'
import { ComparingModal } from '../../reusables/parts/ComparingModal'
import { DetailModal } from '../../reusables/parts/DetailModal'
import { Whishlist } from '../../reusables/parts/whishlist'

export const ShopContent = () => {
  const { articles } = useContext(DataContext)

  const rating = (count, ratings) => {
    const sum = ratings.reduce((acc, value) => {
      return acc + value
    }, 0)
    return sum / count
  }

  return (
    <Container fluid>
      <Row className="px-5">
        {articles &&
          articles.map((article, i) => (
            <Col xl={3} lg={4} md={6} className="mt-4" key={`Container_{i}`}>
              <div
                className="cardcontainer"
                key={i}
                style={{
                  backgroundColor: 'hsla(350,50%,50%,0.0)',
                  height: '30rem',
                  border: 'solid red',
                  padding: '1rem',
                  overflow: 'hidden',
                }}
              >
                <div key={`a_{i}`} className="photo">
                  <img
                    src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                    className="img-fluid"
                  ></img>
                </div>
                <div
                  key={`b_{i}`}
                  className="content"
                  style={{ width: '100%', margin: '0.5rem 0' }}
                >
                  <p
                    className="txt4"
                    style={{
                      color: 'black',
                      position: 'absolute',
                      top: '-1.5rem',
                      left: '12.5rem',
                    }}
                  >
                    {article.baseData.stock ? 'Lieferbar' : 'ausverkauft'}
                  </p>
                  <div className="d-flex flex-wrap" style={{ paddingBottom: '1rem' }}>
                    <p className="txt4 w-100 text-center">
                      {rating &&
                        `${rating(article.baseData.ratingCounter, article.baseData.ratings)} STARS`}
                    </p>
                    <p className="txt4" style={{ width: 'auto' }}>
                      {article.baseData.articleName}
                    </p>
                    <p className="txt4 w-100">{article.info}</p>
                    <p className="txt4" style={{ marginLeft: 'auto' }}>
                      {(article.baseData.priceEK * 1.19).toFixed(2)} €
                    </p>
                  </div>
                </div>
                <div className="footer" style={{ maxHeight: '80%', margin: '0.5rem 0' }}>
                  <Col
                    lg={12}
                    style={{
                      width: '20%',
                      position: 'relative',
                      top: '-7.5rem',
                      right: '-15.1rem',
                    }}
                  >
                    <DetailModal />
                    <ComparingModal />
                    <Whishlist />
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
                  <ul style={{ listStyleType: 'none', padding: '0', marginTop: '-7rem' }}>
                    <li>Detail 01: {article.info}</li>
                    <li>Detail 02: {article.info}</li>
                    <li>Detail 03: {article.info}</li>
                    <li>Detail 04: {article.info}</li>
                    <li>Detail 05: {article.info}</li>
                    <li>Detail 06: {article.info}</li>
                    <li>Detail 07: {article.info}</li>
                    <li>Detail 08: {article.info}</li>
                    <li>Detail 09: {article.info}</li>
                    <li>Detail 10: {article.info}</li>
                  </ul>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  )
}
