import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function StorageFilter() {
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
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Kapazität</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="4">bis 500 GB</option>
                        <option value="5">1 TB</option>
                        <option value="6">2 TB</option>
                        <option value="7">4 TB</option>
                        <option value="8">8 TB</option>
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
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Type</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="rpm">HDD intern</option>
                        <option value="ssd">SSD intern</option>
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
