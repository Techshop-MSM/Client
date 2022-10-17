import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function RamFilter() {
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
                    <Accordion.Header>Speichertyp</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="ddr5">DDR5</option>
                        <option value="ddr4">DDR4</option>
                        <option value="ddr3">DDR3</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Speichergröße (Gesamt)</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="128">128 GB</option>
                        <option value="64">64 GB</option>
                        <option value="32">32 GB</option>
                        <option value="16">16 GB</option>
                        <option value="8">8 GB</option>
                        <option value="4">4 GB</option>
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
