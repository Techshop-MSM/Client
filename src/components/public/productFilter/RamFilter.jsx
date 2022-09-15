import { Container,Row, Col, Accordion, Form } from 'react-bootstrap';

export function RamFilter() {
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
        <Accordion.Header>Speichertyp</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">DDR5</option>
      <option value="2">DDR4</option>
      <option value="3">DDR3</option>
      <option value="4">DDr2</option>
      <option value="5">SO-DIMM</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="3">
        <Accordion.Header>Speichergröße (Gesamt)</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">128 GB</option>
      <option value="2">64 GB</option>
      <option value="3">32 GB</option>
      <option value="4">16 GB</option>
      <option value="5">8 GB</option>
      <option value="6">4 GB</option>
      <option value="7">KEIN Speicher</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
        <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="4">
        <Accordion.Header>Arbeitsspeicher Tackt in MHz</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">6200 </option>
      <option value="2">6000</option>
      <option value="3">5600 </option>
      <option value="4">5200</option>
      <option value="5">5100 </option>
      <option value="6">4800</option>
      <option value="7">4600 </option>
      <option value="8">4500</option>
      <option value="9">4400 </option>
      <option value="10">4266</option>
      <option value="11">4000 </option>
      <option value="12">3733</option>
      <option value="13">3600 </option>
      <option value="14">3200</option>
      <option value="15">3000 </option>
      <option value="16">2933</option>
      <option value="17">2666 </option>
      <option value="18">2400</option>
      <option value="19">2133 </option>
      <option value="20">1600</option>

    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="5">
        <Accordion.Header>ECC Support
        </Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Ja</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Anzahl Module</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">4</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>   
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Beleuchtung</Accordion.Header>
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



