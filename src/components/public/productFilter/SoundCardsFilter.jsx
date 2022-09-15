import { Container,Row, Col, Accordion, Form } from 'react-bootstrap';

export function SoundCardsFilter() {
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
      <option value="2">Silverstone</option>
      <option value="3">Creative</option>
      <option value="4">AXAGON</option>
      <option value="5">EPOS</option>
      <option value="6">SteelSeries</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="3">
        <Accordion.Header>Anschluss</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">3,5 mm Klinke</option>
      <option value="2">6,3 mm Klinke</option>
      <option value="3">USB</option>
      <option value="4">USB Typ C</option>
      <option value="5">Mini-USB</option>
      <option value="6">Micro-USB</option>
      <option value="7">Optisch</option>
      <option value="8">PCIe</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
        <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="4">
        <Accordion.Header>Kanäle</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Max 2 </option>
      <option value="2">Max 6</option>
      <option value="3">Max 8</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="5">
        <Accordion.Header>max. Wiedergabequalität
        </Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">48KHz / 16 bit</option>
      <option value="2">95KHz / 24 bit</option>
      <option value="3">192KHz / 24 bit</option>
      <option value="1">384KHz / 32 bit</option>
      <option value="2">Thunderbold</option>
      <option value="3">USB</option>
      <option value="1">Mini- Displayport</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Standard / Späzifikation</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">USB 2.0</option>
      <option value="2">USB 3.0</option>
      <option value="3">PCIe</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>    
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Stromversorgung</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Kein PCIe Stromkabel</option>
      <option value="2">Micro.USB</option>
      <option value="3">1* 6-Pin PCIe</option>
      <option value="4">USB</option>
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
