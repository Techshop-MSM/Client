import { useState, useContext, useEffect } from 'react'
import { Button, Container, Col, Row, Form, Modal, Tabs, Tab } from 'react-bootstrap'
import { DataContext } from '../../global/useContext'
import { createCompare } from './createCompare'
import { getDetails } from './getDetails'

export function ComparingModal() {
  const { articles, compare, setCompare, category } = useContext(DataContext)
  const [lgShow, setLgShow] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log(items)
  }, [items])

  compare &&
  compare.map((item, i) => {
    items.push(articles.find((elem) => elem._id == item))
    setCompare([])
  })

  return (
    <>
      {items.length > 0 && (
        <button
          type="button"
          className="hvr-rectangle-out testbtn btn btn-sm"
          onClick={() => setLgShow(true)}
          style={{
            marginTop: '10px',
          }}
        >
          <img src="../../../../public/images/compare.svg" alt="" style={{ width: '2rem' }} />
        </button>
      )}
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header className="bg-dark border">
          <Modal.Title id="example-modal-sizes-title-lg">Deine Vergleichsauswahl</Modal.Title>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={() => (setLgShow(false), setCompare([]))}
          />
        </Modal.Header>
        <Modal.Body>
          <div id="myDIV" onScroll={() => myFunction()}>
            <div id="content">
              <div
                style={{
                  maxWidth: '100%',
                  height: '60vh',
                  display: 'inline-block',
                  padding: '1rem',
                }}
                className="bg-dark"
              >
                <img
                  src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                  width="20%"
                  alt=""
                />
                {createCompare(items)}
              </div>
            </div>
          </div>
          <div className="modal-footer bg-dark">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {setItems([]), setLgShow(!lgShow)}}>
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
