import { Col, Container, Row, Button, ButtonGroup, Card,Form,Tabs,ListGroup, Table, Accordion, Tab, InputGroup } from 'react-bootstrap'



export const  Wishilist= () => {
    return (
        <>
        <Container>
            <Row>
                <Col lg={10}>
          <h2 className='mt-5'>Wunschzettel</h2>
          <p>Speichern Sie hier Ihre persönlichen Favoriten - bis Sie das nächste Mal bei uns sind.</p>
          <br></br>
          <p>Einfach den gewünschten Artikel auf den Wunschzettel setzen und Caseking speichert für Sie automatisch Ihre persönlichen Wunschartikel. So können Sie bequem bei einem späteren Besuch Ihre vorgemerkten Artikel wieder abrufen. </p>
          <Col lg ={12} className={'wl-outborder'} style={{border: '', marginBottom: '20px' }}>
            <Col lg={2} style={{display: 'inline-block'}}>
              <img src='https://static3.caseking.de/media/image/thumbnail/hpit-747_hpit_747_01_105x105.jpg'></img>
            </Col>
            <Col lg={7} style={{display: 'inline-block'}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis mollitia quod, sapiente assumenda sed doloribus possimus laborum in perspiciatis veniam neque. Qui in est at accusamus et aut sint?</p>
            </Col>
            <Col lg={3} style={{display: 'inline-block', marginLeft: '75%', marginBottom: '20px'}}>
              <div style={{width: '150px', backgroundColor: 'green', textAlign: 'center', float: 'right', position: 'absolute'}}>
                Lagernd
              </div>
              <h4>200 Euro</h4>
              <Button variant="success">In den Warenkorb legen</Button>{' '}
            </Col>
          </Col>
          <Col lg ={12} className={'wl-outborder'} style={{border: '', marginBottom: '20px' }}>
            <Col lg={2} style={{display: 'inline-block'}}>
              <img src='https://static3.caseking.de/media/image/thumbnail/hpit-747_hpit_747_01_105x105.jpg'></img>
            </Col>
            <Col lg={7} style={{display: 'inline-block'}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis mollitia quod, sapiente assumenda sed doloribus possimus laborum in perspiciatis veniam neque. Qui in est at accusamus et aut sint?</p>
            </Col>
            <Col lg={3} style={{display: 'inline-block', marginLeft: '75%', marginBottom: '20px'}}>
            <div style={{width: '150px', backgroundColor: 'green', textAlign: 'center', float: 'right', position: 'absolute'}}>
                Lagernd
              </div>
              <h4>200 Euro</h4>
              <Button variant="success">In den Warenkorb legen</Button>{' '}
            </Col>
          </Col>
          <Col lg ={12} className={'wl-outborder'} style={{marginBottom: '20px' }}>
            <Col lg={2} style={{display: 'inline-block'}}>
              <img src='https://static3.caseking.de/media/image/thumbnail/hpit-747_hpit_747_01_105x105.jpg'></img>
            </Col>
            <Col lg={7} style={{display: 'inline-block'}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis mollitia quod, sapiente assumenda sed doloribus possimus laborum in perspiciatis veniam neque. Qui in est at accusamus et aut sint?</p>
            </Col>
            <Col lg={3} style={{display: 'inline-block', marginLeft: '75%', marginBottom: '20px'}}>
            <div style={{width: '150px', backgroundColor: 'green', textAlign: 'center', float: 'right', position: 'absolute'}}>
                Lagernd
              </div>
              <h4>200 Euro</h4>
              <Button variant="success">In den Warenkorb legen</Button>{' '}
            </Col>
          </Col>
          <Col lg ={12} className={'wl-outborder'} style={{marginBottom: '20px' }}>
            <Col lg={2} style={{display: 'inline-block'}}>
              <img src='https://static3.caseking.de/media/image/thumbnail/hpit-747_hpit_747_01_105x105.jpg'></img>
            </Col>
            <Col lg={7} style={{display: 'inline-block'}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis mollitia quod, sapiente assumenda sed doloribus possimus laborum in perspiciatis veniam neque. Qui in est at accusamus et aut sint?</p>
            </Col>
            <Col lg={3} style={{display: 'inline-block', marginLeft: '75%', marginBottom: '20px'}}>
            <div style={{width: '150px', backgroundColor: 'green', textAlign: 'center', float: 'right', position: 'absolute'}}>
                Lagernd
              </div>
              <h4>200 Euro</h4>
              <Button variant="success">In den Warenkorb legen</Button>{' '}
            </Col>
          </Col>
          <Col lg ={12} className={'wl-outborder'} style={{marginBottom: '20px'}}>
            <Col lg={2} style={{display: 'inline-block'}}>
              <img src='https://static3.caseking.de/media/image/thumbnail/hpit-747_hpit_747_01_105x105.jpg'></img>
            </Col>
            <Col lg={7} style={{display: 'inline-block'}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis mollitia quod, sapiente assumenda sed doloribus possimus laborum in perspiciatis veniam neque. Qui in est at accusamus et aut sint?</p>
            </Col>
            <Col lg={3} style={{display: 'inline-block', marginLeft: '75%', marginBottom: '20px'}}>
            <div style={{width: '150px', backgroundColor: 'orange', textAlign: 'center', float: 'right', position: 'absolute'}}>
                Wenig verfügbar
              </div>
              <h4>200 Euro</h4>
              <Button variant="success">In den Warenkorb legen</Button>{' '}
            </Col>
          </Col>
          <Col lg ={12} className={'wl-outborder'} style={{marginBottom: '20px' }}>
            <Col lg={2} style={{display: 'inline-block'}}>
              <img src='https://static3.caseking.de/media/image/thumbnail/hpit-747_hpit_747_01_105x105.jpg'></img>
            </Col>
            <Col lg={7} style={{display: 'inline-block'}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis mollitia quod, sapiente assumenda sed doloribus possimus laborum in perspiciatis veniam neque. Qui in est at accusamus et aut sint?</p>
            </Col>
            <Col lg={3} style={{display: 'inline-block', marginLeft: '75%', marginBottom: '20px'}}>
            <div style={{width: '150px', backgroundColor: 'green', textAlign: 'center', float: 'right', position: 'absolute'}}>
                Lagernd
              </div>
              <h4>200 Euro</h4>
              <Button variant="success">In den Warenkorb legen</Button>{' '}
            </Col>
          </Col>
          <Col lg ={12} className={'wl-outborder'} style={{marginBottom: '20px' }}>
            <Col lg={2} style={{display: 'inline-block'}}>
              <img src='https://static3.caseking.de/media/image/thumbnail/hpit-747_hpit_747_01_105x105.jpg'></img>
            </Col>
            <Col lg={7} style={{display: 'inline-block'}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis mollitia quod, sapiente assumenda sed doloribus possimus laborum in perspiciatis veniam neque. Qui in est at accusamus et aut sint?</p>
            </Col>
            <Col lg={3} style={{display: 'inline-block', marginLeft: '75%', marginBottom: '20px'}}>
            <div style={{width: '150px', backgroundColor: 'red', textAlign: 'center', float: 'right', position: 'absolute'}}>
                Ausverkauft
              </div>
              <h4>200 Euro</h4>
              <Button variant="success">In den Warenkorb legen</Button>{' '}
            </Col>
          </Col>

          <ButtonGroup aria-label="Basic example" style={{float: 'right'}}>
          <Button variant="warning">Alle Produkte vom Wunschzettel entfernen</Button>
          <Button style={{marginLeft: '30px'}} variant="success">Alle Produkte in den Warenkorb legen</Button>
          </ButtonGroup>
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







