import React, { useContext, useState } from 'react'
import {  Modal } from 'react-bootstrap'
import { DataContext } from '../../global/useContext'
import { randomNumber } from '../../public/shop-assets/randomNumber'

export function DetailModal() {
  const { category } = useContext(DataContext)
  const [lgShow, setLgShow] = useState(false)
  // console.log(props)
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
        <img src="../../../../public/images/infos.svg" alt="" style={{ width: '2rem' }} />
      </button>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="bg-dark"
      >
        <Modal.Header className="bg-dark border">
          <Modal.Title id="example-modal-sizes-title-lg">Produktdetails</Modal.Title>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={() => setLgShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <div className="p-5 bg-dark">
            <img
              src={`../../../../public/images/${category}/${category}_${randomNumber()}.jpeg`}
              width="53%"
              alt=""
            />
            <table className="table">
              <tbody>
                <tr>
                  <th>Formfaktor:</th>
                  <td>Mini-ITX (170 × 170 mm)</td>
                </tr>
                <tr>
                  <th>Chipsatz:</th>
                  <td> Intel B660</td>
                </tr>
                <tr>
                  <th>Sockel:</th>
                  <td>1700 (für Intel-CPUs der 12. Core-Generation)</td>
                </tr>
                <tr>
                  <th>RAM:</th>
                  <td>
                    2x DDR5 (4.800 MHz, bis zu 6.200 MHz mittels OC)
                    <br />
                    Dual-Channel
                    <br />
                    Max. 64 GB
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
