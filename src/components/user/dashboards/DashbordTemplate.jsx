import { Col, Container, Row, Button, Card,Form, CardGroup } from 'react-bootstrap'



export const DashboardTemplate = () => {
    return (
        // Kannst du löschen, ist nur für den Login/Logout-Test
        <>
        <Container>
            <Row>
                <Col lg={10} style={{padding: '100px'}}>
                <h1>Willkommen "UserName"</h1>
                <p>Dies ist dein persönliches Kunden-Konto, in dem du die Möglichkeit hast, deine Benutzer-Information, Lieferadresse und bevorzugte Zahlweise zu bearbeiten sowie ihre Bestellungen und deren Status einzusehen.</p>
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
            <Row>
                <Col lg={5}>
                <Card>
                    <Card.Header>Benutzerinformationen</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <p>Vorname Nachname</p>
                        <p>E-Mailadresse</p>
                        <p>Kundennummer</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={5}>
                <Card>
                    <Card.Header>Gewählte Zahlart</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <h6>Paypal</h6>
                            <p>Bitte beachte darauf das beim Kauf von Direktdownloads nur per Paypal, Sofort oder Kreditkarte möglich ist</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col lg={5}>
                <Card>
                    <Card.Header>Passwort ändern</Card.Header>
                    <Card.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Dein aktuelles Passwort</Form.Label>
                        <Form.Control type="old-password" placeholder="Aktuelles Passwort" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="newpassword" placeholder="Neues Passwort" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Absenden
                    </Button>
                    </Form>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={5}>
                <Card>
                    <Card.Header>E-Mailadresse ändern</Card.Header>
                    <Card.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Dein aktuelle E-Mailadresse</Form.Label>
                        <Form.Control type="oldemail" placeholder="Deine aktuelle E-Mailadresse" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Gebe deine neue E-Mailadresse ein</Form.Label>
                        <Form.Control type="new-email" placeholder="Deine neue E-Mailadressse" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Absenden
                    </Button>
                    </Form>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={10} style={{marginTop: '30px'}}>
                <h2>Produktbewertungen</h2>
                <CardGroup style={{width: '100%'}}>
                    <Card style={{padding: '30px'}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Jetzt bewerten</Card.Title>
                        <Card.Text>

                            <div class="cont">
                            <div class="stars">
                            <form action="">
                            <input class="star star-5" id="star-5-2" type="radio" name="star"/>
                            <label class="star star-5" for="star-5-2"></label>
                            <input class="star star-4" id="star-4-2" type="radio" name="star"/>
                            <label class="star star-4" for="star-4-2"></label>
                            <input class="star star-3" id="star-3-2" type="radio" name="star"/>
                            <label class="star star-3" for="star-3-2"></label>
                            <input class="star star-2" id="star-2-2" type="radio" name="star"/>
                            <label class="star star-2" for="star-2-2"></label>
                            <input class="star star-1" id="star-1-2" type="radio" name="star"/>
                            <label class="star star-1" for="star-1-2"></label>
                            <div class="rev-box">
                                <textarea class="review" col="30" name="review"></textarea>
                                <label class="review" for="review">Bewertung abschicken</label>
                            </div>
                            </form>
                            </div>
                            </div>

                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Bestellt am 00.00.00</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{padding: '30px'}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Jetzt bewerten</Card.Title>
                        <Card.Text>

                            <div class="cont">
                            <div class="stars">
                            <form action="">
                            <input class="star star-5" id="star-5-2" type="radio" name="star"/>
                            <label class="star star-5" for="star-5-2"></label>
                            <input class="star star-4" id="star-4-2" type="radio" name="star"/>
                            <label class="star star-4" for="star-4-2"></label>
                            <input class="star star-3" id="star-3-2" type="radio" name="star"/>
                            <label class="star star-3" for="star-3-2"></label>
                            <input class="star star-2" id="star-2-2" type="radio" name="star"/>
                            <label class="star star-2" for="star-2-2"></label>
                            <input class="star star-1" id="star-1-2" type="radio" name="star"/>
                            <label class="star star-1" for="star-1-2"></label>
                            <div class="rev-box">
                                <textarea class="review" col="30" name="review"></textarea>
                                <label class="review" for="review">Bewertung abschicken</label>
                            </div>
                            </form>
                            </div>
                            </div>

                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Bestellt am 00.00.00</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{padding: '30px'}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Jetzt bewerten</Card.Title>
                        <Card.Text>

                            <div class="cont">
                            <div class="stars">
                            <form action="">
                            <input class="star star-5" id="star-5-2" type="radio" name="star"/>
                            <label class="star star-5" for="star-5-2"></label>
                            <input class="star star-4" id="star-4-2" type="radio" name="star"/>
                            <label class="star star-4" for="star-4-2"></label>
                            <input class="star star-3" id="star-3-2" type="radio" name="star"/>
                            <label class="star star-3" for="star-3-2"></label>
                            <input class="star star-2" id="star-2-2" type="radio" name="star"/>
                            <label class="star star-2" for="star-2-2"></label>
                            <input class="star star-1" id="star-1-2" type="radio" name="star"/>
                            <label class="star star-1" for="star-1-2"></label>
                            <div class="rev-box">
                                <textarea class="review" col="30" name="review"></textarea>
                                <label class="review" for="review">Bewertung abschicken</label>
                            </div>
                            </form>
                            </div>
                            </div>

                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Bestellt am 00.00.00</small>
                        </Card.Footer>
                    </Card>
                    </CardGroup>
                </Col>
            </Row>
            
        </Container>
        </>
    )
}







