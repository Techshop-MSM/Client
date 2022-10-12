import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function SoundCardsFilter() {
  return (
    <>
      <Container fluid>
        <Row>
          <Accordion
            defaultActiveKey={['1']}
            alwaysOpen
            style={{ paddingLeft: '0', paddingRight: '0' }}
          >
            <Accordion.Item eventKey="">
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Kanäle</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="2.0">2.0</option>
                        <option value="5.1">5.1 </option>
                        <option value="7.1">7.1</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>max. Wiedergabequalität</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">48KHz / 16 bit</option>
                        <option value="2">95KHz / 24 bit</option>
                        <option value="3">192KHz / 24 bit</option>
                        <option value="1">384KHz / 32 bit</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Standard / Späzifikation</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">USB 2.0</option>
                        <option value="2">USB 3.0</option>
                        <option value="3">PCIe</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Stromversorgung</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">Kein PCIe Stromkabel</option>
                        <option value="2">Micro.USB</option>
                        <option value="3">1* 6-Pin PCIe</option>
                        <option value="4">USB</option>
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
        </Row>
      </Container>
    </>
  )
}
