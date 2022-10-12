import { Container,Row, Col, Accordion, Form } from 'react-bootstrap';

export function MainboardFilter() {
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
        <Accordion.Header>Hersteller</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">ASUS</option>
      <option value="2">MSI</option>
      <option value="3">ichill</option>
      <option value="4">AMD</option>
      <option value="5">EVGA</option>
      <option value="6">INNO3D</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="3">
        <Accordion.Header>Arbeitsspeicher-Typ</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">DDR2</option>
      <option value="2">DDR3</option>
      <option value="3">DDR4</option>
      <option value="4">DDR5</option>
      <option value="5">DDR6</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
        <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="4">
        <Accordion.Header>Beleuchtung</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Ja </option>
      <option value="2">Nein</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="5">
        <Accordion.Header>Formfaktor
        </Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">ATX</option>
      <option value="2">E-ATX</option>
      <option value="3">Micro-ATX</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Chipsatz</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Z490</option>
      <option value="2"> Z590</option>
      <option value="3"> X670</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>   
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="7">
        <Accordion.Header>PCI Express</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Version 3</option>
      <option value="2"> Version 4</option>
      <option value="3"> Thunderbold</option>
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



