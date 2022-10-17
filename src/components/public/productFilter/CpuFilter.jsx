import { Container, Row, Col, Accordion, Form } from 'react-bootstrap'

export function CpuFilter() {
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
                    <Accordion.Header>CPU</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option>Kerne</option>
                        <option value="4">x4</option>
                        <option value="6">x6</option>
                        <option value="8">x8</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>CPU Type</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="Ryzen 3">Ryzen 3</option>
                        <option value="Ryzen 5">Ryzen 5</option>
                        <option value="Ryzen 7">Ryzen 7</option>
                        <option value="Ryzen 9">Ryzen 9</option>
                        <option value="Core 3">i3</option>
                        <option value="Core 5">i5</option>
                        <option value="Core 7">i7</option>
                        <option value="Core 9">i9</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col lg={2} style={{ display: 'inline-block' }}>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>Boxed</Accordion.Header>
                    <Accordion.Body>
                      <Form.Select aria-label="Default select example">
                        <option value="true">Ja</option>
                        <option value="false">Nein</option>
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
