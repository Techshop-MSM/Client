import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function NetzteilFilter() {
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
                <Col lg={2} style={{ display: 'inline-block', zIndex: '40000000' }}>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option>Hersteller</option>
                        <option value="1">Corsair</option>
                        <option value="2">Akasa</option>
                        <option value="3">ASUS</option>
                        <option value="4">be quiet!</option>
                        <option value="5">EVGA</option>
                        <option value="6">Lian</option>
                        <option value="7">Thermaltake</option>
                        <option value="8">Zalman</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Formfaktor</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">Micro-ATX</option>
                        <option value="2">Mini-ATX</option>
                        <option value="3">ATX</option>
                        <option value="4">Extended-ATX</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Watt</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">bis 500 Watt</option>
                        <option value="2">bis 800 Watt</option>
                        <option value="3">über 800 Watt</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Modular</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">Ja</option>
                        <option value="2">Nein</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Effizienz</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">80 Plus</option>
                        <option value="2">80 Plus Bronze</option>
                        <option value="3">80 Plus Gold</option>
                        <option value="4">80 Plus Platinum</option>
                        <option value="5">80 Plus Titanium</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>Netzteil Format</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">ATX</option>
                        <option value="2">ITX</option>
                        <option value="3">SFX-L</option>
                        <option value="4">SFX</option>
                        <option value="5">Flex-ATX</option>
                        <option value="6">TFX</option>
                        <option value="7">Extern</option>
                        <option value="8">Sonstige</option>
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
