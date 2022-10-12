import { Col, Row } from 'react-bootstrap'

export const ratingSystem = (avg) => {
  const arr = []
  for (let i = 0; i < avg; i++) {
    arr.push(
      <label className="rating star-1" htmlFor="star-1-2" style={{ margin: 'auto' }}></label>
    )
  }
  return arr
}
