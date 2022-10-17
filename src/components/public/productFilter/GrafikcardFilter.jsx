import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function GrafikcardFilter() {
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
                    <Accordion.Header>Type</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">GTX</option>
                        <option value="2">RTX</option>
                        <option value="3">ichill</option>
                        <option value="4">AMD</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Speichergröße</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1">4 GB</option>
                        <option value="2">6 GB</option>
                        <option value="3">8 GB</option>
                        <option value="4">10 GB</option>
                        <option value="5">12 GB</option>
                        <option value="6">16 GB</option>
                        <option value="6">24 GB</option>
                        <option value="7">32 GB</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Chipsatz</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="1050">1050</option>
                        <option value="1080">1080</option>
                        <option value="1650">1650</option>
                        <option value="1660">1660</option>
                        <option value="2060">2060</option>
                        <option value="2070">2070</option>
                        <option value="3060">3060</option>
                        <option value="3070">3070</option>
                        <option value="3080">3080</option>
                        <option value="3090">3090</option>
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
