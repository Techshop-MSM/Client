import { Col, Container, Row, Button, Card,Form, Table, Accordion } from 'react-bootstrap'



export const Downloads = () => {
    return (
        // Kannst du löschen, ist nur für den Login/Logout-Test
        <>
        <Container>
            <Row>
                <Col lg={10} style={{padding: '100px'}}>
                <h3>Downloads</h3>

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
        <Accordion.Header>
        <Table style={{color: '#000'}}>
      <thead>
        <tr>
          <th><span style={{fontWeight: 'bold'}}>Datum:</span> 00.00.2000</th>
          <th><span style={{fontWeight: 'bold'}}>Bestellnummer:</span> 00000000000000</th>
          <th><span style={{fontWeight: 'bold'}}>Versandart:</span> Direktdownload</th>
          <th><span style={{fontWeight: 'bold'}}>Bestellstatus:</span> Komplett abgeschlossen</th>

        </tr>
      </thead>
    </Table>
        </Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Artikel</th>
          <th>Anzahl</th>
          <th>Stückpreis</th>
          <th>Summe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Borderlands 2
            </td>
          <td>
            1
            </td>
            <td>
            29,99 €*
            </td>
            <td>
            29,99 €*
            </td>
        </tr>
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
        <Table style={{color: '#000'}}>
      <thead>
        <tr>
          <th><span style={{fontWeight: 'bold'}}>Datum:</span> 00.00.2000</th>
          <th><span style={{fontWeight: 'bold'}}>Bestellnummer:</span> 00000000000000</th>
          <th><span style={{fontWeight: 'bold'}}>Versandart:</span> Direktdownload</th>
          <th><span style={{fontWeight: 'bold'}}>Bestellstatus:</span> Komplett abgeschlossen</th>

        </tr>
      </thead>
    </Table>
        </Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Artikel</th>
          <th>Anzahl</th>
          <th>Stückpreis</th>
          <th>Summe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Borderlands 2
            </td>
          <td>
            1
            </td>
            <td>
            29,99 €*
            </td>
            <td>
            29,99 €*
            </td>
        </tr>
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </Col>
            </Row>
        </Container>
        </>
    )
}







