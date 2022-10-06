import React, { useState } from 'react'
import { Button, Container, Col, Row, Form, Modal, Tabs, Tab } from 'react-bootstrap'

export function ComparingModal() {
  const [lgShow, setLgShow] = useState(false)
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
            class="btn-close btn-close-white"
            aria-label="Close"
            onClick={() => setLgShow(false)}
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
                <table class="table">
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
                    <tr>
                      <td>RAM:</td>
                      <td>
                        2x DDR5 (4.800 MHz, bis zu 6.200 MHz mittels OC)
                        <br />
                        Dual-Channel
                        <br />
                        Max. 64 GB
                      </td>
                    </tr>
                    <tr>
                      <td>Slots (physisch):</td>
                      <td>1x PCIe 5.0 x16</td>
                    </tr>
                    <tr>
                      <td>Interne Anschlüsse:</td>
                      <td>
                        4x SATA 6G
                        <br />
                        1x M.2 (PCIe 4.0 x4, 2260, 2280, CPU)
                        <br />
                        1x M.2 (PCIe 4.0 x4, 2242-2280, Chipsatz)
                        <br />
                        1x USB-C (ein Header, USB 3.2 Gen 2, max. 10 Gbit/s)
                        <br />
                        2x USB 3.0 (ein Header, USB 3.2 Gen 1, max. 5 Gbit/s)
                        <br />
                        2x USB 2.0 (ein Header, max. 480 Mbit/s)
                        <br />
                        1x Front Panel Audio Header (AAFP)
                        <br />
                        1x S/PDIF Out Header
                        <br />
                        1x Speaker Header 1x 10-1 pin System Panel Header
                        <br />
                        1x Clear CMOS Header
                      </td>
                      <br />
                    </tr>
                    <tr>
                      <td>Lüfter-Header:</td>
                      <td>
                        1x CPU-Fan (4-Pin)
                        <br />
                        1x CPU-Fan OPT (4-Pin)
                        <br />
                        1x Pumpe (4-Pin)
                      </td>
                    </tr>
                    <tr>
                      <td>Externe Anschlüsse:</td>
                      <td>
                        1x USB 3.2 Typ C (USB 3.2 Gen 2x2, max. 20 Gbit/s)
                        <br />
                        1x USB 3.0 Typ C (USB 3.1 Gen 1, max. 5 Gbit/s)
                        <br />
                        3x USB 3.0 Typ A (USB 3.1 Gen 1, max. 5 Gbit/s)
                        <br />
                        3x USB 2.0 (max. 480 Mbit/s)
                        <br />
                        1x DisplayPort 1.4
                        <br />
                        1x HDMI 2.1
                        <br />
                        2x WLAN-Antenne (WiFi 6, WLAN ax, 2x2, Bluetooth 5.2)
                        <br />
                        1x RJ-45 (Intel I225-V, max. 2,5 Gbit/s)
                        <br />
                        5x 3,5 mm Klinke (Realtek ALC1220/?ASUS SupremeFX)
                      </td>
                      <br />
                    </tr>
                    <tr>
                      <td>Herstellergarantie:</td>
                      <td>3 Jahre</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ maxWidth: '33%', display: 'inline-block' }} className="bg-dark">
                <img
                  src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                  width="33%"
                  alt=""
                />
                <table class="table" style={{ color: 'red' }}>
                  <tbody>
                    <tr>
                      <td>Formfaktor:</td>
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
                    <tr>
                      <td>RAM:</td>
                      <td>
                        2x DDR5 (4.800 MHz, bis zu 6.200 MHz mittels OC)
                        <br />
                        Dual-Channel
                        <br />
                        Max. 64 GB
                      </td>
                    </tr>
                    <tr>
                      <td>Slots (physisch):</td>
                      <td>1x PCIe 5.0 x16</td>
                    </tr>
                    <tr>
                      <td>Interne Anschlüsse:</td>
                      <td>
                        4x SATA 6G
                        <br />
                        1x M.2 (PCIe 4.0 x4, 2260, 2280, CPU)
                        <br />
                        1x M.2 (PCIe 4.0 x4, 2242-2280, Chipsatz)
                        <br />
                        1x USB-C (ein Header, USB 3.2 Gen 2, max. 10 Gbit/s)
                        <br />
                        2x USB 3.0 (ein Header, USB 3.2 Gen 1, max. 5 Gbit/s)
                        <br />
                        2x USB 2.0 (ein Header, max. 480 Mbit/s)
                        <br />
                        1x Front Panel Audio Header (AAFP)
                        <br />
                        1x S/PDIF Out Header
                        <br />
                        1x Speaker Header 1x 10-1 pin System Panel Header
                        <br />
                        1x Clear CMOS Header
                      </td>
                      <br />
                    </tr>
                    <tr>
                      <td>Lüfter-Header:</td>
                      <td>
                        1x CPU-Fan (4-Pin)
                        <br />
                        1x CPU-Fan OPT (4-Pin)
                        <br />
                        1x Pumpe (4-Pin)
                      </td>
                    </tr>
                    <tr>
                      <td>Externe Anschlüsse:</td>
                      <td>
                        1x USB 3.2 Typ C (USB 3.2 Gen 2x2, max. 20 Gbit/s)
                        <br />
                        1x USB 3.0 Typ C (USB 3.1 Gen 1, max. 5 Gbit/s)
                        <br />
                        3x USB 3.0 Typ A (USB 3.1 Gen 1, max. 5 Gbit/s)
                        <br />
                        3x USB 2.0 (max. 480 Mbit/s)
                        <br />
                        1x DisplayPort 1.4
                        <br />
                        1x HDMI 2.1
                        <br />
                        2x WLAN-Antenne (WiFi 6, WLAN ax, 2x2, Bluetooth 5.2)
                        <br />
                        1x RJ-45 (Intel I225-V, max. 2,5 Gbit/s)
                        <br />
                        5x 3,5 mm Klinke (Realtek ALC1220/?ASUS SupremeFX)
                      </td>
                      <br />
                    </tr>
                    <tr>
                      <td>Herstellergarantie:</td>
                      <td>3 Jahre</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ maxWidth: '33%', display: 'inline-block' }} className="bg-dark">
                <img
                  src="https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg"
                  width="33%"
                  alt=""
                />
                <table class="table" style={{ color: 'red' }}>
                  <tbody>
                    <tr>
                      <td>Formfaktor:</td>
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
                    <tr>
                      <td>RAM:</td>
                      <td>
                        2x DDR5 (4.800 MHz, bis zu 6.200 MHz mittels OC)
                        <br />
                        Dual-Channel
                        <br />
                        Max. 64 GB
                      </td>
                    </tr>
                    <tr>
                      <td>Slots (physisch):</td>
                      <td>1x PCIe 5.0 x16</td>
                    </tr>
                    <tr>
                      <td>Interne Anschlüsse:</td>
                      <td>
                        4x SATA 6G
                        <br />
                        1x M.2 (PCIe 4.0 x4, 2260, 2280, CPU)
                        <br />
                        1x M.2 (PCIe 4.0 x4, 2242-2280, Chipsatz)
                        <br />
                        1x USB-C (ein Header, USB 3.2 Gen 2, max. 10 Gbit/s)
                        <br />
                        2x USB 3.0 (ein Header, USB 3.2 Gen 1, max. 5 Gbit/s)
                        <br />
                        2x USB 2.0 (ein Header, max. 480 Mbit/s)
                        <br />
                        1x Front Panel Audio Header (AAFP)
                        <br />
                        1x S/PDIF Out Header
                        <br />
                        1x Speaker Header 1x 10-1 pin System Panel Header
                        <br />
                        1x Clear CMOS Header
                      </td>
                      <br />
                    </tr>
                    <tr>
                      <td>Lüfter-Header:</td>
                      <td>
                        1x CPU-Fan (4-Pin)
                        <br />
                        1x CPU-Fan OPT (4-Pin)
                        <br />
                        1x Pumpe (4-Pin)
                      </td>
                    </tr>
                    <tr>
                      <td>Externe Anschlüsse:</td>
                      <td>
                        1x USB 3.2 Typ C (USB 3.2 Gen 2x2, max. 20 Gbit/s)
                        <br />
                        1x USB 3.0 Typ C (USB 3.1 Gen 1, max. 5 Gbit/s)
                        <br />
                        3x USB 3.0 Typ A (USB 3.1 Gen 1, max. 5 Gbit/s)
                        <br />
                        3x USB 2.0 (max. 480 Mbit/s)
                        <br />
                        1x DisplayPort 1.4
                        <br />
                        1x HDMI 2.1
                        <br />
                        2x WLAN-Antenne (WiFi 6, WLAN ax, 2x2, Bluetooth 5.2)
                        <br />
                        1x RJ-45 (Intel I225-V, max. 2,5 Gbit/s)
                        <br />
                        5x 3,5 mm Klinke (Realtek ALC1220/?ASUS SupremeFX)
                      </td>
                      <br />
                    </tr>
                    <tr>
                      <td>Herstellergarantie:</td>
                      <td>3 Jahre</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="modal-footer bg-dark">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
