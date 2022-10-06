import { Col, Container, Row, Button, Card,Form, CardGroup, Accordion } from 'react-bootstrap'



export const Bestellungen = () => {
    return (
        // Kannst du löschen, ist nur für den Login/Logout-Test
        <>
        <Container>
            <Row>
                <Col lg={5} style={{padding: '100px'}}>
                <p>Bestellungen nach Datum sortiert</p>

                <p>Hier finden Sie eine Übersicht aller getätigten Bestellungen.</p>

                <p>Sie haben die Möglichkeit nochmals die Details der Bestellung einzusehen und die Bestellungen nochmals durchzuführen.</p>
                </Col>
                <Col lg={5} style={{padding: '100px'}}>
                <h3>Service</h3>
                <ul>
                    <li>> Service-Hotline & Bestellstornierung</li>
                    <li>>Rückgabe & Rücksendung</li>
                    <li>>Garantie</li>
                    <li>>Reklamazion (Gewährleistung)</li>
                </ul>
                <hr/>

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
        <Container>
            <Row>
                <Col lg={12}>
                <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Datum: 00.00.2000</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </Col>
            </Row>
        </Container>
        </>
    )
}







