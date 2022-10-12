import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { DataContext } from '../../global/useContext'
import { ComparingModal } from '../../reusables/parts/ComparingModal'
import { DetailModal } from '../../reusables/parts/DetailModal'
import { getDetails } from '../../reusables/parts/getDetails'
import { ratingSystem } from '../../reusables/parts/ratingsystem'
import { Whishlist } from '../../reusables/parts/whishlist'
import { randomNumber } from './randomNumber'
import { rating } from './ratingHandler'

export const ShopContent = () => {
  const { articles, category, compare, setCompare } = useContext(DataContext)
  const img = '../../../../public/images'
  

  useEffect(() => {
    console.log(compare)
  }, [compare])

  const onCompareHandler = (id) => {
    compare.length < 3 ? setCompare([...compare, id]) : console.log('compare is full')
  }

  return (
    <Container fluid>
      <Row className="px-5">
        {articles &&
          articles.map((article, i) => (
            <Col xl={3} lg={4} md={6} className="mt-4" key={`Container_${i}`}>
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
                    src={`${img}/${category}/${category}_${randomNumber()}.jpeg`}
                    className="img-fluid"
                  ></img>
                  <div className="preview-badge" style={{ fontSize: '0.9rem' }}>
                    {article.baseData.stock ? 'Lieferbar' : 'ausverkauft'}
                  </div>
                </div>
                <div
                  key={`b_{i}`}
                  className="content"
                  style={{ width: '100%', margin: '0.5rem 0' }}
                >
                  <div className="d-flex flex-wrap" style={{ paddingBottom: '1rem' }}>
                    {rating ? (
                      <form style={{ width: '100%', textAlign: 'center' }}>
                        {ratingSystem(
                          rating(article.baseData.ratingCounter, article.baseData.ratings)
                        )}
                      </form>
                    ) : (
                      'unbewertet'
                    )}
                    <h3 className="txt4" style={{ width: 'auto', marginTop: '-1rem' }}>
                      {article.baseData.articleName}
                    </h3>
                    <p className="txt4 w-100" style={{ height: '4.8rem', overflow: 'hidden' }}>
                      {article.info}
                    </p>
                    <h4 className="txt4" style={{ marginLeft: 'auto', fontSize: '1.5rem' }}>
                      {(article.baseData.priceEK * 1.19).toFixed(2)} €
                    </h4>
                  </div>
                </div>
                <div className="footer" style={{ maxHeight: '80%', margin: '0.5rem 0' }}>
                  <Col
                    lg={12}
                    style={{
                      width: '20%',
                      position: 'relative',
                      top: '-10.6rem',
                      right: '-15.1rem',
                    }}
                  >
                    <DetailModal />
                    <button
                      onClick={(() => onCompareHandler(article._id))}
                      className="hvr-rectangle-out testbtn btn btn-sm"
                      style={{
                        marginTop: '10px',
                      }}
                    >
                      <img
                        src="../../../../public/images/compare.svg"
                        alt=""
                        style={{ width: '2rem' }}
                      />
                    </button>
                    <Whishlist />
                    <button
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
                  {getDetails(article)}
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  )
}
