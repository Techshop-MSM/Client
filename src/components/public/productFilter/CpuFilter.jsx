import { Container,Row, Col, Accordion, Form } from 'react-bootstrap';

export function CpuFilter() {
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
        <Accordion.Header>CPU</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option>Hersteller</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
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
        <Accordion.Header>Sockel</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">1200</option>
      <option value="2">AM4</option>
      <option value="3">35467</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="5">
        <Accordion.Header>CPU Cores</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="3">4</option>      
      <option value="3">5</option>      
      <option value="3">6</option>      
      <option value="3">7</option>      
      <option value="3">8</option>      
      <option value="3">9</option>      
      <option value="3">10</option>      
      <option value="3">11</option>      
      <option value="3">12</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Unlocked</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Ja</option>
      <option value="2">Nein</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="7">
        <Accordion.Header>Boxed</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Ja</option>
      <option value="2">Nein</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="8">
        <Accordion.Header>Channels</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Single</option>
      <option value="2">Dual</option>
      <option value="3">Quad</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="9">
        <Accordion.Header>Ram</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">DDR3</option>
      <option value="2">DDR4</option>
      <option value="3">DDR5</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="10">
        <Accordion.Header>Onboard GPU</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Ja</option>
      <option value="2">Nein</option>
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



