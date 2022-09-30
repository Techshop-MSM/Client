import { Container,Row, Col, Accordion, Form } from 'react-bootstrap';

export function CaseFilter() {
  return (
    <>
    <Container fluid>
        <Row>
            <Accordion defaultActiveKey={['1']} alwaysOpen style={{paddingLeft: '0', paddingRight: '0'}}>
      <Accordion.Item eventKey="">
        <Accordion.Header>Filter</Accordion.Header>
        <Accordion.Body>
            <Col lg={2} style={{display: 'inline-block', zIndex: '40000000'}} >
        <Accordion.Item eventKey="2">
        <Accordion.Header>Größe</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Mini-PC</option>
      <option value="2">MediTower</option>
      <option value="3">MaxiTower</option>
      <option value="4">Desktop PC</option>
      <option value="5">All in One PC</option>
      <option value="6">Server</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>
      <Col lg={2} style={{display: 'inline-block'}}>
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
        <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="4">
        <Accordion.Header>Laufwerksschächte</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">2,5 Zoll intern (5)</option>
      <option value="2">3,5 Zoll intern (7)</option>
      <option value="3">3,5 Zoll extern (3  )</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="5">
        <Accordion.Header>USB Anschlüsse
        </Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">USB 2.0 (2)</option>
      <option value="2">USB 3.0</option>
      <option value="3">USB 3.1</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Grafikkarte Länge</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">30 cm</option>
      <option value="2">40 cm</option>
      <option value="3">45 cm</option>
      <option value="4">50 cm</option>
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
        </Row>
    </Container>
    </>
  );
}



