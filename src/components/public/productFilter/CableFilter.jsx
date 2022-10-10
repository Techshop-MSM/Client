import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function CableFilter() {
  return (
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
                  <Accordion.Header>Länge</Accordion.Header>
                  <Accordion.Body>
                    <Form.Select aria-label="Default select example">
                      <option value="1">30cm</option>
                      <option value="2">50cm</option>
                      <option value="3">100cm</option>
                      <option value="4">120cm</option>
                      <option value="5">150cm</option>
                      <option value="6">200cm</option>
                    </Form.Select>
                  </Accordion.Body>
                </Accordion.Item>
              </Col>
              <Col lg={2} style={{ display: 'inline-block' }}>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Farbe</Accordion.Header>
                  <Accordion.Body>
                    <Form.Select aria-label="Default select example">
                      <option value="1">Rot</option>
                      <option value="2">Grün</option>
                      <option value="3">Blau</option>
                      <option value="4">Gelb</option>
                      <option value="5">Schwarz</option>
                      <option value="6">Weiß</option>
                      <option value="7">Lila</option>
                      <option value="8">Durchsichtig</option>
                    </Form.Select>
                  </Accordion.Body>
                </Accordion.Item>
              </Col>
              <Col lg={2} style={{ display: 'inline-block' }}>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Anschlüsse</Accordion.Header>
                  <Accordion.Body>
                    <Form.Select aria-label="Default select example">
                      <option value="1">USB 2.0 </option>
                      <option value="2">USB 3.0</option>
                      <option value="3">Displayport </option>
                      <option value="4">HDMI</option>
                      <option value="5">Micro-USB </option>
                      <option value="6">DVI</option>
                      <option value="7">VGA</option>
                      <option value="8">KOAXIAL</option>
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
                      <Accordion.Header>Länge</Accordion.Header>
                      <Accordion.Body>
                        <Form.Select aria-label="Default select example">
                          <option value="1">30cm</option>
                          <option value="2">50cm</option>
                          <option value="3">100cm</option>
                          <option value="4">120cm</option>
                          <option value="5">150cm</option>
                          <option value="6">200cm</option>
                        </Form.Select>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Col>
                  <Col lg={2} style={{ display: 'inline-block' }}>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Farbe</Accordion.Header>
                      <Accordion.Body>
                        <Form.Select aria-label="Default select example">
                          <option value="1">Rot</option>
                          <option value="2">Grün</option>
                          <option value="3">Blau</option>
                          <option value="4">Gelb</option>
                          <option value="5">Schwarz</option>
                          <option value="6">Weiß</option>
                          <option value="7">Lila</option>
                          <option value="8">Durchsichtig</option>
                        </Form.Select>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Col>
                  <Col lg={2} style={{ display: 'inline-block' }}>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Anschlüsse</Accordion.Header>
                      <Accordion.Body>
                        <Form.Select aria-label="Default select example">
                          <option value="1">USB 2.0 </option>
                          <option value="2">USB 3.0</option>
                          <option value="3">Displayport </option>
                          <option value="4">HDMI</option>
                          <option value="5">Micro-USB </option>
                          <option value="6">DVI</option>
                          <option value="7">VGA</option>
                          <option value="8">KOAXIAL</option>
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
      </Row>
    </Container>
  )
}
