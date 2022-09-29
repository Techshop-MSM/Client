import { Tab, Tabs, Container, Col, Row, Table, Form, InputGroup,ListGroup,Button } from 'react-bootstrap'




export function Basket() {
  return (
    <>
    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Ihr Warenkorb">
    <Container fluid style={{padding: '100px'}}>
        <Row>
        <Col xl={12}>
            <Table responsive style={{color: '#fff'}}>
  <thead>
    <tr>
      <th>Artikel</th>
      <th>Verfügbarkeit</th>
      <th>Anzahl</th>
      <th>Stückpreis</th>
      <th>Summe</th>
      <th><span></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' width={100}></img></td>
      <td> # lagernd</td>
      <td>   
         <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Select></td>
      <td>199,90 euro</td>
      <td>199,90 Euro</td>
      <td><Button variant="danger">Entfernen</Button>{' '}</td> 

    </tr>
    <tr>
      <td><img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' width={100}></img></td>
      <td> # lagernd</td>
      <td>   
         <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Select></td>
      <td>199,90 euro</td>
      <td>199,90 Euro</td>
      <td><Button variant="danger">Entfernen</Button>{' '}</td> 

    </tr>
    <tr>
      <td><img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' width={100}></img></td>
      <td> # lagernd</td>
      <td>   
         <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Select></td>
      <td>199,90 euro</td>
      <td>199,90 Euro</td>
      <td><Button variant="danger">Entfernen</Button>{' '}</td> 

    </tr>
  </tbody>
</Table>
        </Col>
        <Col lg={6}>
            <h2>Versandkosten</h2>
        </Col>
        <Col lg={6}>
            <p>Summe: 199,90 Euro</p>
            <p>Versandkosten: 7,99 Euro</p>
            <hr/>
            <h4>Gesamtsumme: 206,99 Euro</h4>
            <hr/>
            <p>inkl.MwSt.</p>
        </Col>
        <Col lg={12}>
            <button style={{float: 'right'}}>Weiter zur Kasse</button>
        </Col>
        </Row>
    </Container>
  </Tab>
  <Tab eventKey={2} title="Ihre Adresse" style={{padding: '100px'}}>
    <h2>Ihre persönlichen Angaben</h2>
    <Form>
      <Form.Group className="mb-3" controlId="privat-or-company">
      <Col lg={6}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Ich bin:</InputGroup.Text>
        <Form.Select aria-label="Default select example">
      <option value="privat">Privatkunde</option>
      <option value="company">Geschäftskunde</option>
    </Form.Select>
      </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Anrede:
        </Form.Label>
        <Col sm="10">
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Herr"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Frau"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        <Form.Check
            inline
            label="Divers"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />

        </div>
      ))}
        </Col>
        <Col lg={6}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Vorname:</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Col>
        <br/>
        <Col lg={6}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Nachnahme:</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Col>
        <br/>
        <Col lg={6}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Ihre E-Mail-Adresse:</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Col>
        <br/>
        <Col lg={6}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Telefon:</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
            <h2>Ihre Adresse</h2>
        <br/>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Straße und Nr:</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Col>
        <br/>
        <Col lg={6}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">PLZ und Ort:</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Col>
        <br/>
        <Col lg={6}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Land:</InputGroup.Text>
        <Form.Select aria-label="Default select example">
      <option value="germany">Deutschland</option>
      <option value="lux">Luxenburg</option>
      <option value="Denmark">Dänemark</option>
      <option value="netherland">Niederlande</option>
      <option value="poland">Polen</option>
      <option value="france">Frankreich</option>
      <option value="gb">Groß Britanien</option>
      <option value="sweden">Schweden</option>
      <option value="Auenland">Auenland</option>
    </Form.Select>
      </InputGroup>
        </Col>
        <button className='bg-success' style={{color: '#fff'}}>Weiter zur Bestellübersicht</button>
      </Form.Group>
    </Form>
  </Tab>
  <Tab eventKey={3} title="Prüfen und Bestellen">
    <Container style={{padding: '100px'}}>
    <h2>Persönliche Informationen</h2>

        <Row>
            <Col lg={3}>
                <h4>Rechnungsadresse</h4>
                <ul>
                    <li>Uservorname Usernachnahme</li>
                    <li>Teststraße 1</li>
                    <li>22045 Hamburg</li>
                    <li>Deutschland</li>
                </ul>

            </Col>
            <Col lg={4}>
                <h4>Lieferadresse</h4>
                <ul>
                    <li>Uservorname Usernachnahme</li>
                    <li>Teststraße 1</li>
                    <li>22045 Hamburg</li>
                    <li>Deutschland</li>
                </ul>

            </Col>
            </Row>
            <Row>
            <Col lg={6}>
                <h4>Versandart</h4>
                <ListGroup>
                    <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`DHL Standard`}
                            />

                            </div>
                        ))}
                        </Form>
                        <p style={{display: 'inline'}}>7,99 Euro</p>
                        </ListGroup.Item>
                        <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`DHL Express`}
                            />

                            </div>
                        ))}
                        </Form>
                        <p style={{display: 'inline'}}>39,99 Euro</p>
                        </ListGroup.Item>                    
                        <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`GLS Standard`}
                            />

                            </div>
                        ))}
                        </Form>
                        <p style={{display: 'inline'}}>8,99 Euro</p>
                        </ListGroup.Item>                   
                         <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`UPS Standard`}
                            />

                            </div>
                        ))}
                        </Form>
                        <p style={{display: 'inline'}}>9,99 Euro</p>
                        </ListGroup.Item>                    
                        <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`UPS Express National`}
                            />

                            </div>
                        ))}
                        </Form>
                        <p style={{display: 'inline'}}>19,99 Euro</p>
                        </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col lg={6}>
                <h4>Zahlungsart</h4>
                <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`Vorkasse`}
                            />

                            </div>
                        ))}
                        </Form>
                        <p style={{display: 'inline'}}>Sie zahlen einfach vorab und erhalzten die Ware bequem und ohne weitere GEbühren bei Zahlungseingang nach Hause geliefert. Hier finden Sie unsere Bankverbindung</p>
                        </ListGroup.Item>                    
                        
                        <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`Kreditkarte`}
                            />

                            </div>
                        ))}
                        </Form>
                        </ListGroup.Item>                    
                        
                        <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`Amazon Pay`}
                            />

                            </div>
                        ))}
                        </Form>
                        </ListGroup.Item>                    
                        
                        <ListGroup.Item>    
                        <Form style={{display: 'inlineBlock'}}>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`PayPal`}
                            />

                            </div>
                        ))}
                        </Form>
                        
                        </ListGroup.Item>

            </Col>
            <Container fluid>
        <Row>
        <Col xl={12}>
            <Table responsive style={{color: '#fff'}}>
  <thead>
    <tr>
      <th>Artikel</th>
      <th>Verfügbarkeit</th>
      <th>Anzahl</th>
      <th>Stückpreis</th>
      <th>Summe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' width={100}></img></td>
      <td> # lagernd</td>
      <td>   
         <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Select></td>
      <td>199,90 euro</td>
      <td>199,90 Euro</td>
    </tr>
    <tr>
      <td><img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' width={100}></img></td>
      <td> # lagernd</td>
      <td>   
         <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Select></td>
      <td>199,90 euro</td>
      <td>199,90 Euro</td>
    </tr>
    <tr>
      <td><img src='https://image1280.macovi.de/images/product_images/1280/1317274_0__73140.jpg' width={100}></img></td>
      <td> # lagernd</td>
      <td>   
         <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Select></td>
      <td>199,90 euro</td>
      <td>199,90 Euro</td>
    </tr>
  </tbody>
</Table>
        </Col>
        <Col lg={{ span: 6, offset: 6 }}>
            <p>Summe: 199,90 Euro</p>
            <p>Versandkosten: 7,99 Euro</p>
            <hr/>
            <h4>Gesamtsumme: 206,99 Euro</h4>
            <hr/>
            <p>inkl.MwSt.</p>
        </Col>
        <Col lg={12}>
            <p>
                Mit Klick auf "Zahlungspflichtig bezahlen" akzeptierst du unsere AGB und bestätigst, dass du für private Zwecke bestellst und mit der GEltung unserer Widerrufsbelehrung einverstanden bist.
            </p>
            <button className='bg-success' style={{float: 'right'}}>Zahlungspflichtig bestellen</button>
        </Col>
        </Row>
    </Container>
        </Row>
    </Container>
  </Tab>
</Tabs>
    </>
  );
}



