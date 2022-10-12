import { useState, useContext } from 'react'
import { Button, Container, Col, Row, Form, Modal, Tabs, Tab } from 'react-bootstrap'
import { DataContext } from '../../global/useContext'
import { getDetails } from './getDetails'

export function ComparingModal() {
  const { articles, category, compare, setCompare } = useContext(DataContext)
  const [lgShow, setLgShow] = useState(false)

  const findArr = [1, 2, 3]
  const searchArr = [
    { id: 1, name: 'Martin' },
    { id: 2, name: 'Marc' },
    { id: 3, name: 'Sven' },
    { id: 4, name: 'Ben' },
  ]

  // findArr.map((item, i) => {
  //   searchArr.find(item => {
  //     return item
  //   })
  // })

  const newArr = searchArr.filter(findArr[0])
  console.log(newArr)

  return (
    <>
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
          <div id="myDIV" onscroll="myFunction()">
            <div id="content">
              <div style={{ maxWidth: '33%', display: 'inline-block' }} className="bg-dark">
                <img
                  src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                  width="33%"
                  alt=""
                />
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Formfaktor:</th>
                      <td>Mini-ITX (170 × 170 mm)</td>
                    </tr>
                    <tr>
                      <td>Chipsatz:</td>
                      <td> Intel B660</td>
                    </tr>
                    <tr>
                      <td>Sockel:</td>
                      <td>1700 (für Intel-CPUs der 12. Core-Generation)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="modal-footer bg-dark">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
