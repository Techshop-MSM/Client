import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function Netzteile() {
  return (
    <>
      <Container fluid>
        <Row>
          <Accordion defaultActiveKey={['1']} alwaysOpen>
            <Accordion.Item eventKey="">
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Formfaktor</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="sfx">Mini-ATX</option>
                        <option value="atx">ATX</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Watt</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="500">bis 500 Watt</option>
                        <option value="800">bis 800 Watt</option>
                        <option value="800">über 800 Watt</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Modular</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="full">Ja</option>
                        <option value="false">Nein</option>
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
