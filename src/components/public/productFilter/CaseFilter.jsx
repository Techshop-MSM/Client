import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export const CaseFilter = () => {
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
              <Col lg={2} style={{ display: 'inline-block' }}>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Formfaktor</Accordion.Header>
                  <Accordion.Body>
                    <Form.Select aria-label="Default select example">
                      <option value="atx mid tower">Mini-ATX</option>
                      <option value="atx full tower">ATX</option>
                    </Form.Select>
                  </Accordion.Body>
                </Accordion.Item>
              </Col>
              <Col lg={2} style={{ display: 'inline-block' }}>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Farbe</Accordion.Header>
                  <Accordion.Body>
                    <Form.Select aria-label="Default select example">
                      <option value="black">Schwarz</option>
                      <option value="white">Weiß</option>
                      <option value="white / black">Schwarzweiß</option>
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
  )
}
