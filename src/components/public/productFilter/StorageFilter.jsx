import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function StorageFilter() {
  return (
    <>
      <Container fluid>
        <Row>
<<<<<<< HEAD
            <Accordion defaultActiveKey={['1']} alwaysOpen style={{paddingLeft: '0', paddingRight: '0'}}>
      <Accordion.Item eventKey="">
        <Accordion.Header>Filter</Accordion.Header>
        <Accordion.Body>
            <Col lg={2} style={{display: 'inline-block', zIndex: '40000000'}} >
        <Accordion.Item eventKey="2">
        <Accordion.Header>Hersteller</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">AKASA</option>
      <option value="2">ASUS</option>
      <option value="3">AXAGON</option>
      <option value="4">be quite!</option>
      <option value="5">Corsair</option>
      <option value="6">Cruical</option>
      <option value="7">DeLock</option>
      <option value="8">Gigabyte</option>
      <option value="9">Intel</option>
      <option value="10">Kingston</option>
      <option value="11">LG</option>
      <option value="12">Samsung</option>
      <option value="13">Seagate</option>
      <option value="14">Silverstone</option>
      <option value="15">Toshiba</option>
      <option value="16">Western Digital</option>

    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="3">
        <Accordion.Header>Speichergröße</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">2 GB</option>
      <option value="2">4 GB</option>
      <option value="3">6 GB</option>
      <option value="4">8 GB</option>
      <option value="5">12 GB</option>
      <option value="6">16 GB</option>
      <option value="7">32 GB</option>
      <option value="8">64 GB</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
        <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="4">
        <Accordion.Header>Formfaktor</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">2,5 Zoll </option>
      <option value="2">3,5 Zoll</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="5">
        <Accordion.Header>Display Anschluss
        </Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">VGA</option>
      <option value="2">DVI</option>
      <option value="3">HDMI</option>
      <option value="1">Displayport</option>
      <option value="2">Thunderbold</option>
      <option value="3">USB</option>
      <option value="1">Mini- Displayport</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Type</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">HDD intern</option>
      <option value="2">SSD intern</option>
      <option value="3">HDD Extern</option>
      <option value="4">SSD Extern</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>      
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Kapazität</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">64GB</option>
      <option value="2">128GB</option>
      <option value="3">256GB</option>
      <option value="4">512GB</option>      
      <option value="5">1000GB</option>
      <option value="6">2000GB</option>
      <option value="7">4000GB</option>
      <option value="8">8000GB</option>
      <option value="9">12000GB</option>
      <option value="10">18000GB</option>
      <option value="11">240000GB</option>
      <option value="12">48000GB</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>      
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Umdrehungen</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">5200</option>
      <option value="2">6400</option>
      <option value="3">7200</option>
      <option value="4">10000</option>      
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>                       
      <Col lg={12} >
      <h6 className='pt-3'>Wähle mindestens 1 Element aus</h6>
      </Col>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
=======
          <Accordion
            defaultActiveKey={['1']}
            alwaysOpen
            style={{ paddingLeft: '0', paddingRight: '0' }}
          >
            <Accordion.Item eventKey="">
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <Col lg={2} style={{ display: 'inline-block', zIndex: '40000000' }}>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Hersteller</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">AKASA</option>
                        <option value="2">ASUS</option>
                        <option value="3">AXAGON</option>
                        <option value="4">be quite!</option>
                        <option value="5">Corsair</option>
                        <option value="6">Cruical</option>
                        <option value="7">DeLock</option>
                        <option value="8">Gigabyte</option>
                        <option value="9">Intel</option>
                        <option value="10">Kingston</option>
                        <option value="11">LG</option>
                        <option value="12">Samsung</option>
                        <option value="13">Seagate</option>
                        <option value="14">Silverstone</option>
                        <option value="15">Toshiba</option>
                        <option value="16">Western Digital</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Speichergröße</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">2 GB</option>
                        <option value="2">4 GB</option>
                        <option value="3">6 GB</option>
                        <option value="4">8 GB</option>
                        <option value="5">12 GB</option>
                        <option value="6">16 GB</option>
                        <option value="7">32 GB</option>
                        <option value="8">64 GB</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Formfaktor</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">2,5 Zoll </option>
                        <option value="2">3,5 Zoll</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Display Anschluss</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">VGA</option>
                        <option value="2">DVI</option>
                        <option value="3">HDMI</option>
                        <option value="1">Displayport</option>
                        <option value="2">Thunderbold</option>
                        <option value="3">USB</option>
                        <option value="1">Mini- Displayport</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Type</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">HDD intern</option>
                        <option value="2">SSD intern</option>
                        <option value="3">HDD Extern</option>
                        <option value="4">SSD Extern</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Kapazität</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">64GB</option>
                        <option value="2">128GB</option>
                        <option value="3">256GB</option>
                        <option value="4">512GB</option>
                        <option value="5">1000GB</option>
                        <option value="6">2000GB</option>
                        <option value="7">4000GB</option>
                        <option value="8">8000GB</option>
                        <option value="9">12000GB</option>
                        <option value="10">18000GB</option>
                        <option value="11">240000GB</option>
                        <option value="12">48000GB</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Umdrehungen</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">5200</option>
                        <option value="2">6400</option>
                        <option value="3">7200</option>
                        <option value="4">10000</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={12}>
                  <h6 className="pt-3">Wähle mindestens 1 Element aus</h6>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
>>>>>>> dev
        </Row>
      </Container>
    </>
  )
}
