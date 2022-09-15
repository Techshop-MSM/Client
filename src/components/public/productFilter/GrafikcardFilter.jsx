import { Container,Row, Col, Accordion, Form } from 'react-bootstrap';

export function GrafikcardFilter() {
  return (
    <>
    <Container fluid>
        <Row>
            <Accordion defaultActiveKey={['1']} alwaysOpen>
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
        <Accordion.Header>Speichergröße</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">2 GB</option>
      <option value="2">4 GB</option>
      <option value="3">6 GB</option>
      <option value="4">8 GB</option>
      <option value="5">12 GB</option>
      <option value="6">16 GB</option>
      <option value="7">32 GB</option>
      <option value="8">64 GB</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
        <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="4">
        <Accordion.Header>Wasserkühlung</Accordion.Header>
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
        <Accordion.Header>Display Anschluss
        </Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">VGA</option>
      <option value="2">DVI</option>
      <option value="3">HDMI</option>
      <option value="1">Displayport</option>
      <option value="2">Thunderbold</option>
      <option value="3">USB</option>
      <option value="1">Mini- Displayport</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Grafikkarte Länge</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">unter 150 mm</option>
      <option value="2">150mm - 249 mm</option>
      <option value="3">250mm - 300mm</option>
      <option value="4">über 300mm</option>
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



