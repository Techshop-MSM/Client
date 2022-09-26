import { Container,Row, Col, Accordion, Form } from 'react-bootstrap';

export function ScreenFilter() {
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
      <option value="2">AOC</option>
      <option value="3">Dell</option>
      <option value="4">EIZO</option>
      <option value="5">GIGABYTE</option>
      <option value="6">HP</option>
      <option value="7">LG</option>
      <option value="8">Phillips</option>
      <option value="9">Samsung</option>
      <option value="4">ViewSonic</option>
      <option value="5">Andere</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="3">
        <Accordion.Header>DisplayGröße</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">10 Zoll</option>
      <option value="2">23,8 Zoll</option>
      <option value="3">24 Zoll</option>
      <option value="4">26,9 Zoll</option>
      <option value="5">29,5 Zoll</option>
      <option value="6">30 Zoll</option>
      <option value="7">34 Zoll</option>
      <option value="8">37,5 Zoll</option>
      <option value="9">39,7 Zoll</option>
      <option value="2">47,5 Zoll</option>
      <option value="3">39,7 Zoll</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
        <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="4">
        <Accordion.Header>Reaktionszeit</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">o,1 ms (Grau zu Grau) </option>
      <option value="2">0,5 ms (Grau zu Grau)</option>
      <option value="3">4 ms (Grau zu Grau) </option>
      <option value="4">1 ms (Grau zu Grau)</option>
      <option value="5">2 ms (Grau zu Grau) </option>
      <option value="6">3 ms (Grau zu Grau)</option>
      <option value="7">5 ms (Grau zu Grau)</option>
      <option value="8">8 ms (Grau zu Grau)</option>
      <option value="9">10 ms (Grau zu Grau) </option>
      <option value="10">14 ms (Grau zu Grau)</option>
      <option value="11">15 (Grau zu Grau) </option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="5">
        <Accordion.Header>Auflösung
        </Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">1024 * 600</option>
      <option value="2">1920 * 360</option>
      <option value="3">1920 * 480</option>
      <option value="4">3840 * 1100</option>
      <option value="5">Full-HD</option>
      <option value="6">WUXGA</option>
      <option value="7">UWFHD</option>
      <option value="8">WQHD</option>
      <option value="9">UWQHD</option>
      <option value="10">DFHD</option>
      <option value="11">QHD+</option>
      <option value="12">UHD</option>
      <option value="13">DQHD</option>
      <option value="14">WUHD</option>
      <option value="15">UHD+</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>            
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Seitenverhältnis</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">4:1</option>
      <option value="2">12:5</option>
      <option value="3">16:9</option>
      <option value="4">16:10</option>
      <option value="5">21:9</option>
      <option value="6">24:10</option>
      <option value="7">32:9</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>     
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>DisplayAnschluss</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">VGA</option>
      <option value="2">DVI-D</option>
      <option value="3">HDMI</option>
      <option value="4">MicroHDMI</option>
      <option value="5">Display Port</option>
      <option value="6">Mini Display Port</option>
      <option value="7">Mini-HDMI</option>
      <option value="8">Micro-HDMI</option>
      <option value="9">Thunderbold 3</option>
      <option value="10">Thunderbold 4</option>
      <option value="11">USB Typ C</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>     
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Helligkeit</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">1000 cd/m2</option>
      <option value="2">900 cd/m2</option>
      <option value="3">750 cd/m2</option>
      <option value="4">600 cd/m2</option>
      <option value="5">550 cd/m2</option>
      <option value="6">500 cd/m2</option>
      <option value="7">450 cd/m2</option>
      <option value="8">420 cd/m2</option>
      <option value="9">400 cd/m2</option>
      <option value="10">350 cd/m2</option>
      <option value="11">300 cd/2</option>
      <option value="12">250 cd/2</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>     
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Curved Display</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Ja</option>
      <option value="2">Nein</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>  
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Pivot / Hochformat</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Ja</option>
      <option value="2">Nein</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>   
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Panel-Typ</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">IPS</option>
      <option value="2">MVA</option>
      <option value="3">OLED</option>
      <option value="4">TN</option>
      <option value="5">VA</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>   
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Energieeffizienzklasse</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">B</option>
      <option value="2">C</option>
      <option value="3">E</option>
      <option value="4">F</option>
      <option value="5">G</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>   
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Lautsprecher</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">Ja</option>
      <option value="2">Nein</option>
      <option value="3">2* 20 Watt</option>
      <option value="4">2* 1,2 Watt</option>
      <option value="5">2* 2 Watt</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>  
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Betrachtungswinkel</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">170 Grad horizontal / 160 Grad vertikal</option>
      <option value="2">172 Grad horizontal / 178 Grad vertikal</option>
      <option value="3">178 Grad horizontal / 178 Grad vertikal</option>
    </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
      </Col>     
      <Col lg={2} style={{display: 'inline-block'}}>
        <Accordion.Item eventKey="6">
        <Accordion.Header>Kontrastverhältnis (statisch)</Accordion.Header>
        <Accordion.Body>
        <Form.Select aria-label="Default select example">
      <option value="1">1.500.000:1</option>
      <option value="2">1.600:1</option>
      <option value="3">800:1</option>
      <option value="4">1000:1</option>
      <option value="5">1100:1</option>
      <option value="6">1200:1</option>      
      <option value="7">1300:1</option>
      <option value="8">2500:1</option>
      <option value="9">3000:1</option>
      <option value="10">3500:1</option>
      <option value="11">4000:1</option>
      <option value="12">135000:1</option>
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



