import { Col, Container, Row, Button, Card,Form,Tabs,ListGroup, Table, Accordion, Tab, InputGroup } from 'react-bootstrap'



export const ZahlartAendern = () => {
    return (
        <>
        <Container>
            <Row>
                <Col lg={10}>
          <h2 className='mt-5'>Bitte wählen Sie die von Ihnen bevorzugte Zahlungsart</h2>
          <Form>
            <Col sm="10" className='mb-5'>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Kreditkarte"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <img src="https://www.caseking.de/templates/emotion_casekingde/frontend/_resources/images/dispatchpayment/credit-cart-icons.png" alt="" />

                  </div>
                ))}
              </Col>
              <Col sm="10" className='mb-5'>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Amazon Pay"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <img src="https://www.caseking.de/templates/emotion_casekingde/frontend/_resources/images/dispatchpayment/amazon-pay-icon.png" alt="" />

                  </div>
                ))}
              </Col>
              <Col sm="10" className='mb-5'>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Paypal"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <img src="https://www.caseking.de/templates/emotion_casekingde/frontend/_resources/images/dispatchpayment/paypal-icon.png" alt="" />

                  </div>
                ))}
              </Col>
            <Form.Group as={Col} lg={6} className="mb-3" controlId="formPlaintextPassword">
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
              <Col lg={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Firma:</InputGroup.Text>
                  <Form.Control
                    placeholder="Optional"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col lg={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Vorname:</InputGroup.Text>
                  <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col lg={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Nachnahme:</InputGroup.Text>
                  <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Straße und Nr:</InputGroup.Text>
                  <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">PLZ und Ort:</InputGroup.Text>
                  <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <Col lg={12}>
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
              </Col>



              <button className="bg-success" style={{ color: '#fff' }}>
                Aktualisieren
              </button>
            </Form.Group>
          </Form>
          </Col>
          <Col lg={2} style={{position: 'sticky', top: '0'}}>
                <div className="d-grid gap-1 mt-4">
                    <Button variant="secondary" size="sm">
                        Mein Konto
                    </Button>
                    <Button variant="secondary" size="sm">
                        Meine Bestellung
                    </Button>
                    <Button variant="secondary" size="sm">
                        Rechnungsadresse ändern
                    </Button>
                    <Button variant="secondary" size="sm">
                        Lieferadresse ändern
                    </Button>
                    <Button variant="secondary" size="sm">
                        Zahlungsart ändern
                    </Button>
                    <Button variant="secondary" size="sm">
                        Wunschzettel
                    </Button>
                    <Button variant="secondary" size="sm">
                        Leasing
                    </Button>
                    <Button variant="secondary" size="sm">
                        Unternehmensdaten
                    </Button>
                </div>
                </Col>
          </Row>
          </Container>
        </>
    )
}







